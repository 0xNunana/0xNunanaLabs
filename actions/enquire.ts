'use server'

import nodemailer from 'nodemailer'


export const enquire=async (formData:FormData)=>{

const email=  formData.get('Email')
const topic =  formData.get('Topic')


    // Ensure email and message are not null before using them
    if (email && topic) {
        const mailOptions = {
            from: email.toString(), // Convert FormDataEntryValue to string
            to: process.env.RECEIVER_EMAIL || '', // Ensure it's not undefined
            subject: 'Enquiry',
            text: topic.toString(), // Convert FormDataEntryValue to string
            replyTo: email.toString(), // Convert FormDataEntryValue to string
            html:"<div>{email}+ <p>try html</p></div>"
        };



        try {
            const transporter = nodemailer.createTransport({
                service: 'gmail',
                host: process.env.SMTP_HOST || '', // Ensure it's not undefined
                port: 587,
                secure: false,
                auth: {
                    user: process.env.OWNER_EMAIL || '', // Ensure it's not undefined
                    pass: process.env.OWNER_PASSWORD || '' // Ensure it's not undefined
                }
            });

            // send the email
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent', info.response);
        } catch (error) {
            console.log('Error', error);
        }
}
}