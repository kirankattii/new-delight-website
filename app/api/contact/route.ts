import { NextRequest, NextResponse } from 'next/server';
import { getCollection } from '@/lib/mongodb';
import nodemailer, { Transporter } from 'nodemailer';

// Email configuration for Ubuntu server
const createTransporter = (): Transporter => {
  // Option 1: Use local sendmail (most common for Ubuntu servers)
  if (process.env.EMAIL_METHOD === 'sendmail') {
    return nodemailer.createTransport({
      sendmail: true,
      newline: 'unix',
      path: '/usr/sbin/sendmail',
    });
  }

  // Option 2: Use local Postfix SMTP
  if (process.env.EMAIL_METHOD === 'postfix') {
    return nodemailer.createTransport({
      host: 'localhost',
      port: 25,
      secure: false,
      ignoreTLS: true,
    });
  }

  // Option 3: External SMTP (fallback)
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'localhost',
    port: parseInt(process.env.EMAIL_PORT || '25'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: process.env.EMAIL_USER ? {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    } : undefined,
  });
};

// Validation patterns
const patterns = {
  fullName: /^[a-zA-Z\s]{2,50}$/,
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  mobileNumber: /^[0-9]{10}$/,
};

interface ContactFormData {
  fullName: string;
  email: string;
  mobileNumber: string;
  project?: string;
  message: string;
}

export async function POST(request: NextRequest) {
  try {
    // Parse form data
    const formData = await request.formData();
    
    const contactData: ContactFormData = {
      fullName: formData.get('fullName') as string,
      email: formData.get('email') as string,
      mobileNumber: formData.get('mobileNumber') as string,
      project: formData.get('project') as string || '',
      message: formData.get('message') as string,
    };

    // Validate required fields
    const errors: string[] = [];
    
    if (!contactData.fullName || !patterns.fullName.test(contactData.fullName.trim())) {
      errors.push('Please enter a valid name (2-50 characters, letters only)');
    }
    
    if (!contactData.email || !patterns.email.test(contactData.email.trim())) {
      errors.push('Please enter a valid email address');
    }
    
    if (!contactData.mobileNumber || !patterns.mobileNumber.test(contactData.mobileNumber.trim())) {
      errors.push('Please enter a valid 10-digit phone number');
    }
    
    if (!contactData.message || !contactData.message.trim()) {
      errors.push('Message is required');
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, message: errors.join(', ') },
        { status: 400 }
      );
    }

    // Save to MongoDB
    const collection = await getCollection('contacts');
    const contactRecord = {
      ...contactData,
      submittedAt: new Date(),
      ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
      userAgent: request.headers.get('user-agent') || 'unknown',
    };

    const result = await collection.insertOne(contactRecord);

    // Send email notification (matching your PHP template)
    const transporter = createTransporter();

    // Format date in IST (matching your PHP timezone)
    const now = new Date();
    const istDate = new Intl.DateTimeFormat('en-IN', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    }).format(now);

    // Email to admin (matching your PHP template exactly)
    const adminMailOptions = {
      from: `Delight Eco Farms <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `New Lead from Delight Eco Farms Website - ${now.toISOString().split('T')[0]} ${now.toTimeString().split(' ')[0]}`,
      html: `
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                h1 { color: #4a4a4a; }
                .lead-info { background-color: #f9f9f9; padding: 15px; border-radius: 5px; }
                .footer { margin-top: 20px; font-size: 12px; color: #888; }
            </style>
        </head>
        <body>
            <div class='container'>
                <h1>New Lead from Delight Eco Farms Website</h1>
                <p>A new lead has submitted their information through the Delight Eco Farms website contact form.</p>
                <div class='lead-info'>
                    <p><strong>Name:</strong> ${contactData.fullName}</p>
                    <p><strong>Email:</strong> ${contactData.email}</p>
                    <p><strong>Mobile:</strong> ${contactData.mobileNumber}</p>
                    <p><strong>Submission Date:</strong> ${istDate}</p>
                    <p><strong>Project:</strong> ${contactData.project || 'NA'}</p>
                    <p><strong>Message:</strong> ${contactData.message || 'NA'}</p>
                </div>
                <div class='footer'>
                    <p>This email was sent from the Delight Eco Farms website contact form.</p>
                    <p>Delight Eco Farms - Estate Plots & Plantation Villas at Balupet, Sakleshpur</p>
                    <p>Site: #330, 2nd Floor, 27th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102</p>
                    <p>Office: #330, 2nd Floor, 27th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102</p>
                </div>
            </div>
        </body>
        </html>
      `,
    };

    // Send email (only to admin, matching your PHP implementation)
    let mailSent = false;
    try {
      await transporter.sendMail(adminMailOptions);
      mailSent = true;
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      mailSent = false;
    }

    // Log the lead information (matching your PHP logging)
    const logMessage = `${istDate} - New Lead
Name: ${contactData.fullName}
Email: ${contactData.email}
Mobile: ${contactData.mobileNumber}
Project: ${contactData.project || 'NA'}
Message: ${contactData.message || 'NA'}
Mail sent: ${mailSent ? 'Yes' : 'No'}
User Agent: ${contactRecord.userAgent}
IP Address: ${contactRecord.ipAddress}
Database ID: ${result.insertedId}

`;

    // Write to log file (similar to your PHP implementation)
    try {
      const fs = await import('fs/promises');
      await fs.appendFile('lead_logs.txt', logMessage);
    } catch (logError) {
      console.error('Failed to write to lead log file:', logError);
    }

    // Return response matching your PHP format
    if (mailSent) {
      return NextResponse.json({
        success: true,
        message: 'Thank you for your interest. Our team will contact you shortly!'
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "We're experiencing technical difficulties. Please try again later or contact us directly."
      }, { status: 500 });
    }

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Something went wrong. Please try again later.' 
      },
      { status: 500 }
    );
  }
}
