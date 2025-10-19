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
  name: /^[a-zA-Z\s]{2,50}$/,
  email: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
};

interface CareerFormData {
  firstName: string;
  lastName: string;
  email: string;
  position: string;
  additionalInfo: string;
  cvFile?: File;
}

export async function POST(request: NextRequest) {
  try {
    // Parse form data
    const formData = await request.formData();

    const careerData: CareerFormData = {
      firstName: formData.get('first-name') as string,
      lastName: formData.get('last-name') as string,
      email: formData.get('email') as string,
      position: formData.get('position') as string,
      additionalInfo: formData.get('additional-info') as string,
      cvFile: formData.get('cv') as File,
    };



    // Validate required fields
    const errors: string[] = [];
    
    if (!careerData.firstName || !patterns.name.test(careerData.firstName.trim())) {
      errors.push('Please enter a valid first name (2-50 characters, letters only)');
    }
    
    if (!careerData.lastName || !patterns.name.test(careerData.lastName.trim())) {
      errors.push('Please enter a valid last name (2-50 characters, letters only)');
    }
    
    if (!careerData.email || !patterns.email.test(careerData.email.trim())) {
      errors.push('Please enter a valid email address');
    }
    
    if (!careerData.position || !careerData.position.trim()) {
      errors.push('Please select a position');
    }
    
    if (!careerData.additionalInfo || !careerData.additionalInfo.trim()) {
      errors.push('Additional information is required');
    }

    // Validate CV file
    if (!careerData.cvFile || careerData.cvFile.size === 0) {
      errors.push('CV file is required');
    } else {
      // Check file type
      if (careerData.cvFile.type !== 'application/pdf') {
        errors.push('CV must be a PDF file');
      }

      // Check file size (5MB limit)
      const maxSize = 5 * 1024 * 1024; // 5MB in bytes
      if (careerData.cvFile.size > maxSize) {
        errors.push('CV file size must be less than 5MB');
      }
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { success: false, message: errors.join(', ') },
        { status: 400 }
      );
    }

    // Convert CV file to base64 for storage
    let cvBase64 = '';
    let cvFileName = '';
    if (careerData.cvFile) {
      try {
        const arrayBuffer = await careerData.cvFile.arrayBuffer();
        cvBase64 = Buffer.from(arrayBuffer).toString('base64');
        cvFileName = careerData.cvFile.name;
      } catch (fileError) {
        console.error('Error processing CV file:', fileError);
        return NextResponse.json(
          { success: false, message: 'Error processing CV file. Please try again.' },
          { status: 400 }
        );
      }
    }

    // Save to MongoDB
    let result;
    let careerRecord;
    try {
      const collection = await getCollection('careers');
      careerRecord = {
        firstName: careerData.firstName.trim(),
        lastName: careerData.lastName.trim(),
        fullName: `${careerData.firstName.trim()} ${careerData.lastName.trim()}`,
        email: careerData.email.trim(),
        position: careerData.position.trim(),
        additionalInfo: careerData.additionalInfo.trim(),
        cvFileName,
        cvBase64,
        submittedAt: new Date(),
        ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown',
        userAgent: request.headers.get('user-agent') || 'unknown',
      };

      result = await collection.insertOne(careerRecord);
    } catch (dbError) {
      console.error('MongoDB error:', dbError);
      return NextResponse.json(
        { success: false, message: 'Database error. Please try again later.' },
        { status: 500 }
      );
    }

    // Send email notification
    let transporter;
    try {
      transporter = createTransporter();
    } catch (transporterError) {
      console.error('Error creating email transporter:', transporterError);
      // Continue without email - don't fail the entire request
    }

    // Format date in IST
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

    // Job titles mapping
    const jobTitles: { [key: string]: string } = {
      'marketing-manager': 'Digital Marketing Manager',
      'tele-caller': 'Telecaller',
      'sales-executive': 'Sales Executive',
      'video-editor': 'Video Editor',
      'sales-manager': 'Sales Manager'
    };

    const positionTitle = jobTitles[careerData.position] || careerData.position;

    // Email to admin
    const adminMailOptions = {
      from: `Delight Eco Farms <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: `New Career Application from Delight Eco Farms Website - ${positionTitle} - ${now.toISOString().split('T')[0]} ${now.toTimeString().split(' ')[0]}`,
      html: `
        <html>
        <head>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
                .container { max-width: 600px; margin: 0 auto; padding: 20px; }
                h1 { color: #4a4a4a; }
                .application-info { background-color: #f9f9f9; padding: 15px; border-radius: 5px; }
                .footer { margin-top: 20px; font-size: 12px; color: #888; }
            </style>
        </head>
        <body>
            <div class='container'>
                <h1>New Career Application from Delight Eco Farms Website</h1>
                <p>A new career application has been submitted through the Delight Eco Farms website careers form.</p>
                <div class='application-info'>
                    <p><strong>Name:</strong> ${careerRecord?.fullName || `${careerData.firstName} ${careerData.lastName}`}</p>
                    <p><strong>Email:</strong> ${careerData.email}</p>
                    <p><strong>Position:</strong> ${positionTitle}</p>
                    <p><strong>Submission Date:</strong> ${istDate}</p>
                    <p><strong>Additional Information:</strong> ${careerData.additionalInfo}</p>
                    <p><strong>CV File:</strong> ${cvFileName} (attached)</p>
                </div>
                <div class='footer'>
                    <p>This email was sent from the Delight Eco Farms website careers form.</p>
                    <p>Delight Eco Farms - Estate Plots & Plantation Villas at Balupet, Sakleshpur</p>
                    <p>Site: #330, 2nd Floor, 27th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102</p>
                    <p>Office: #330, 2nd Floor, 27th Main Rd, Sector 2, HSR Layout, Bengaluru, Karnataka 560102</p>
                </div>
            </div>
        </body>
        </html>
      `,
      attachments: careerData.cvFile ? [{
        filename: cvFileName,
        content: cvBase64,
        encoding: 'base64',
        contentType: 'application/pdf'
      }] : []
    };

    // Send email
    let mailSent = false;
    if (transporter) {
      try {
        await transporter.sendMail(adminMailOptions);
        mailSent = true;
      } catch (emailError) {
        console.error('Failed to send email:', emailError);
        mailSent = false;
      }
    } else {
      mailSent = false;
    }

    // Create log message
    const logMessage = `
[${istDate}] Career Application Submitted
Name: ${careerRecord?.fullName || `${careerData.firstName} ${careerData.lastName}`}
Email: ${careerData.email}
Position: ${positionTitle}
IP: ${careerRecord?.ipAddress || 'unknown'}
User Agent: ${careerRecord?.userAgent || 'unknown'}
CV File: ${cvFileName}
Mail Sent: ${mailSent ? 'Yes' : 'No'}
MongoDB ID: ${result?.insertedId || 'unknown'}
---

`;

    // Write to log file
    try {
      const fs = await import('fs/promises');
      await fs.appendFile('career_logs.txt', logMessage);
    } catch (logError) {
      console.error('Failed to write to career log file:', logError);
    }

    // Return response - success if data was saved to database
    if (result && result.insertedId) {
      return NextResponse.json({
        success: true,
        message: 'Application submitted successfully! We will get back to you soon.'
      });
    } else {
      return NextResponse.json({
        success: false,
        message: "We're experiencing technical difficulties. Please try again later or contact us directly."
      }, { status: 500 });
    }

  } catch (error) {
    console.error('Career form submission error:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { success: false, message: 'Internal server error. Please try again later.' },
      { status: 500 }
    );
  }
}
