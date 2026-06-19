import mongoose, { Schema, Document, Model } from "mongoose";

export interface IInquiry extends Document {
  name: string;
  phone: string;
  email: string;
  service: string;
  budget: string;
  message: string;
  createdAt: Date;
}

const InquirySchema: Schema = new Schema({
  name: { type: String, required: true, trim: true },
  phone: { type: String, required: false, default: "", trim: true },
  email: { type: String, required: true, trim: true, lowercase: true },
  service: { type: String, required: false, default: "Not Specified" },
  budget: { type: String, required: false, default: "Not Specified" },
  message: { type: String, required: false, default: "" },
  createdAt: { type: Date, default: Date.now },
});

// Avoid compiling model again if it is already compiled
export const Inquiry: Model<IInquiry> =
  mongoose.models.Inquiry || mongoose.model<IInquiry>("Inquiry", InquirySchema);
