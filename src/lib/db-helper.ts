import fs from "fs";
import path from "path";
import { connectToDatabase } from "./db";
import { Inquiry } from "@/models/inquiry";
import mongoose, { Schema, Document, Model } from "mongoose";

// Setup fallback file path
const FALLBACK_DIR = path.join(process.cwd(), "src", "data");
const FALLBACK_FILE = path.join(FALLBACK_DIR, "db-fallback.json");

interface SiteSettings {
  maintenanceMode: boolean;
}

// Mongoose Settings schema
interface ISettings extends Document {
  key: string;
  value: any;
}

const SettingsSchema = new Schema({
  key: { type: String, required: true, unique: true },
  value: { type: Schema.Types.Mixed, required: true },
});

const SettingsModel: Model<ISettings> =
  mongoose.models.Settings || mongoose.model<ISettings>("Settings", SettingsSchema);

// Helper to check if MongoDB is configured
function isMongoConfigured(): boolean {
  return !!process.env.MONGODB_URI;
}

// Ensure the fallback directory and file exist
function ensureFallbackFile() {
  if (!fs.existsSync(FALLBACK_DIR)) {
    fs.mkdirSync(FALLBACK_DIR, { recursive: true });
  }
  if (!fs.existsSync(FALLBACK_FILE)) {
    const defaultData = {
      settings: { maintenanceMode: false },
      inquiries: [],
    };
    fs.writeFileSync(FALLBACK_FILE, JSON.stringify(defaultData, null, 2), "utf8");
  }
}

// Read fallback data
function readFallbackData() {
  ensureFallbackFile();
  try {
    const content = fs.readFileSync(FALLBACK_FILE, "utf8");
    return JSON.parse(content);
  } catch (error) {
    console.error("Error reading fallback JSON file:", error);
    return { settings: { maintenanceMode: false }, inquiries: [] };
  }
}

// Write fallback data
function writeFallbackData(data: any) {
  ensureFallbackFile();
  try {
    fs.writeFileSync(FALLBACK_FILE, JSON.stringify(data, null, 2), "utf8");
  } catch (error) {
    console.error("Error writing fallback JSON file:", error);
  }
}

export async function getSettings(): Promise<SiteSettings> {
  if (isMongoConfigured()) {
    try {
      const db = await connectToDatabase();
      if (db) {
        const record = await SettingsModel.findOne({ key: "site_settings" });
        if (record && typeof record.value === "object") {
          return { maintenanceMode: !!record.value.maintenanceMode };
        }
      }
    } catch (error) {
      console.error("Mongoose failed to get settings, using JSON fallback:", error);
    }
  }

  // Fallback
  const data = readFallbackData();
  return data.settings || { maintenanceMode: false };
}

export async function updateSettings(settings: SiteSettings): Promise<SiteSettings> {
  if (isMongoConfigured()) {
    try {
      const db = await connectToDatabase();
      if (db) {
        await SettingsModel.findOneAndUpdate(
          { key: "site_settings" },
          { key: "site_settings", value: settings },
          { upsert: true, new: true }
        );
        return settings;
      }
    } catch (error) {
      console.error("Mongoose failed to update settings, using JSON fallback:", error);
    }
  }

  // Fallback
  const data = readFallbackData();
  data.settings = settings;
  writeFallbackData(data);
  return settings;
}

export async function getInquiries(): Promise<any[]> {
  if (isMongoConfigured()) {
    try {
      const db = await connectToDatabase();
      if (db) {
        const mongoInquiries = await Inquiry.find({}).sort({ createdAt: -1 }).lean();
        return mongoInquiries;
      }
    } catch (error) {
      console.error("Mongoose failed to get inquiries, using JSON fallback:", error);
    }
  }

  // Fallback
  const data = readFallbackData();
  // Sort descending by date
  return (data.inquiries || []).sort(
    (a: any, b: any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function saveInquiry(inquiryData: {
  name: string;
  phone: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}): Promise<boolean> {
  const newRecord = {
    ...inquiryData,
    createdAt: new Date(),
  };

  let savedToDb = false;

  if (isMongoConfigured()) {
    try {
      const db = await connectToDatabase();
      if (db) {
        const newInquiry = new Inquiry(newRecord);
        await newInquiry.save();
        savedToDb = true;
      }
    } catch (error) {
      console.error("Mongoose failed to save inquiry, using JSON fallback:", error);
    }
  }

  // Always save to fallback as well or when db fails
  if (!savedToDb) {
    const data = readFallbackData();
    data.inquiries.push({
      ...newRecord,
      _id: new mongoose.Types.ObjectId().toString(), // Generate a mock Mongo ID
    });
    writeFallbackData(data);
    savedToDb = true;
  }

  return savedToDb;
}
