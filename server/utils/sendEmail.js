import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.AUTH_EMAIL,   
    pass: process.env.AUTH_PASSWORD 
  }
});

const sendEmail = async ({to,subject,html}) => {
  console.log(subject);
  try {
    await transporter.sendMail({
      from: process.env.AUTH_EMAIL,
      to,
      subject,
      html // Use the html property instead of text
    });
    console.log("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendEmail;


