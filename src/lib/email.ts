import nodemailer from "nodemailer";

interface EmailPayload {
  name: string;
  phone: string;
  email: string;
  service: string;
  budget: string;
  message: string;
}

// Config variables from environment
const SMTP_HOST = process.env.SMTP_HOST || "";
const SMTP_PORT = Number(process.env.SMTP_PORT) || 587;
const SMTP_USER = process.env.SMTP_USER || "";
const SMTP_PASS = process.env.SMTP_PASS || "";
const SMTP_FROM = process.env.SMTP_FROM || '"Dhaliwal Homes" <no-reply@dhaliwalhomes.com.au>';

// Create transporter only if configuration is present
const hasTransporterConfig = SMTP_HOST && SMTP_USER && SMTP_PASS;

const getTransporter = () => {
  if (hasTransporterConfig) {
    return nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465, // true for 465, false for other ports
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });
  }
  return null;
};

export async function sendInquiryEmails(payload: EmailPayload) {
  const { name, phone, email, service, budget, message } = payload;
  const adminRecipient = "admin@dhaliwalhomes.com.au";

  // Admin Notification HTML
  const adminHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e1e1e1; border-radius: 8px; background-color: #ffffff; color: #1c1c1c;">
      <div style="background-color: #121212; padding: 15px; text-align: center; border-radius: 6px 6px 0 0;">
        <h2 style="color: #d4af37; margin: 0; font-family: Georgia, serif; letter-spacing: 2px;">DHALIWAL HOMES</h2>
        <p style="color: #f4f1ea; margin: 5px 0 0 0; font-size: 12px; letter-spacing: 3px;">NEW INQUIRY RECEIVED</p>
      </div>
      <div style="padding: 20px 10px;">
        <p style="font-size: 16px;">Hello Team,</p>
        <p style="font-size: 15px;">A new lead has submitted a consultation request on the website. Here are the details:</p>
        
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 10px; font-weight: bold; border: 1px solid #ececec; width: 140px;">Client Name</td>
            <td style="padding: 10px; border: 1px solid #ececec;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border: 1px solid #ececec;">Phone Number</td>
            <td style="padding: 10px; border: 1px solid #ececec;"><a href="tel:${phone}" style="color: #d35400; text-decoration: none;">${phone}</a></td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 10px; font-weight: bold; border: 1px solid #ececec;">Email Address</td>
            <td style="padding: 10px; border: 1px solid #ececec;"><a href="mailto:${email}" style="color: #d35400; text-decoration: none;">${email}</a></td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; border: 1px solid #ececec;">Service Required</td>
            <td style="padding: 10px; border: 1px solid #ececec; font-weight: 500;">${service}</td>
          </tr>
          <tr style="background-color: #f9f9f9;">
            <td style="padding: 10px; font-weight: bold; border: 1px solid #ececec;">Project Budget</td>
            <td style="padding: 10px; border: 1px solid #ececec; color: #d4af37; font-weight: bold;">${budget}</td>
          </tr>
        </table>
        
        <div style="margin-top: 20px; padding: 15px; background-color: #f5f2eb; border-left: 4px solid #d4af37; border-radius: 4px;">
          <h4 style="margin: 0 0 10px 0; color: #1c1c1c;">Message / Project Brief:</h4>
          <p style="margin: 0; line-height: 1.5; font-style: italic;">"${message.replace(/\n/g, "<br/>")}"</p>
        </div>
      </div>
      <div style="text-align: center; font-size: 12px; color: #888; border-top: 1px solid #ececec; padding-top: 15px; margin-top: 15px;">
        This email was sent from the website contact system. Established January 2026.
      </div>
    </div>
  `;

  // Client Confirmation HTML
  const clientHtml = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e1e1e1; border-radius: 8px; background-color: #ffffff; color: #1c1c1c;">
      <div style="background-color: #121212; padding: 20px; text-align: center; border-radius: 6px 6px 0 0;">
        <h2 style="color: #d4af37; margin: 0; font-family: Georgia, serif; letter-spacing: 2px;">DHALIWAL HOMES</h2>
        <p style="color: #f4f1ea; margin: 5px 0 0 0; font-size: 11px; letter-spacing: 3px;">CRAFTSMANSHIP & PRECISION</p>
      </div>
      <div style="padding: 20px 10px; line-height: 1.6;">
        <p style="font-size: 16px; font-weight: bold;">Dear ${name},</p>
        <p style="font-size: 15px;">Thank you for contacting Dhaliwal Homes. We have successfully received your project inquiry regarding <strong>${service}</strong>.</p>
        <p style="font-size: 15px;">A <strong>Dhaliwal Homes expert</strong> and our construction planning team are reviewing your request. We will contact you at <strong>${phone}</strong> or via this email address within 24 to 48 business hours to discuss the next steps and schedule a detailed consultation.</p>
        
        <div style="margin: 20px 0; padding: 15px; border: 1px solid #e2d9c6; background-color: #fcfbfa; border-radius: 6px;">
          <h4 style="margin: 0 0 8px 0; color: #d4af37; font-family: Georgia, serif;">Your Inquiry Summary</h4>
          <ul style="margin: 0; padding-left: 20px; font-size: 14px;">
            <li><strong>Service:</strong> ${service}</li>
            <li><strong>Est. Budget:</strong> ${budget}</li>
          </ul>
        </div>
        
        <p style="font-size: 15px;">We look forward to partnering with you to bring your architectural vision to life in Melbourne.</p>
        
        <p style="margin-top: 30px; font-size: 15px; line-height: 1.2;">
          Warm regards,<br/><br/>
          <strong style="color: #121212;">The Team at Dhaliwal Homes</strong><br/>
          <span style="font-size: 13px; color: #666;">DSD Holdings Pty Ltd T/A Dhaliwal Homes</span><br/>
          <span style="font-size: 13px; color: #666;">Phone: +61433 704 645</span><br/>
          <span style="font-size: 13px; color: #666;">Address: 1424, 1 Queens Road, Melbourne VIC 3004</span>
        </p>
      </div>
      <div style="text-align: center; font-size: 11px; color: #999; border-top: 1px solid #ececec; padding-top: 15px; margin-top: 25px;">
        &copy; 2026 Dhaliwal Homes. All rights reserved. Registered Builder Victoria.
      </div>
    </div>
  `;

  const transporter = getTransporter();

  if (transporter) {
    // Send admin notification
    await transporter.sendMail({
      from: SMTP_FROM,
      to: adminRecipient,
      subject: `[New Website Inquiry] ${service} - ${name}`,
      html: adminHtml,
    });

    // Send client confirmation
    await transporter.sendMail({
      from: SMTP_FROM,
      to: email,
      subject: `Thank you for contacting Dhaliwal Homes`,
      html: clientHtml,
    });

    console.log(`Email notifications sent successfully to ${adminRecipient} and ${email}.`);
  } else {
    // Log to console if no transporter config
    console.log("=========================================");
    console.log("MOCK SMTP EMAIL INTAKE LOG (NO CREDENTIALS)");
    console.log("=========================================");
    console.log(`TO ADMIN: ${adminRecipient}`);
    console.log(`SUBJECT: [New Website Inquiry] ${service} - ${name}`);
    console.log(`CONTENT: Name=${name}, Phone=${phone}, Email=${email}, Service=${service}, Budget=${budget}`);
    console.log(`MESSAGE BODY: "${message}"`);
    console.log("-----------------------------------------");
    console.log(`TO CLIENT: ${email}`);
    console.log("SUBJECT: Thank you for contacting Dhaliwal Homes");
    console.log("CONTENT: Confirmation mail template logged successfully.");
    console.log("=========================================");
  }
}
