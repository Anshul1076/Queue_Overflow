import dotenv from "dotenv";
dotenv.config();
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export const chatbotController = async (req, res) => {
  const { message } = req.body;
  try {
    const result = await model.generateContent(message);
    const response = await result.response;
    res.status(200).json({
      message: response.text() || "No response from AI",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Something went wrong..." });
  }
};
