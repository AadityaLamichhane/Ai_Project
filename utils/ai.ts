import { ChatGoogleGenerativeAI } from "@langchain/google-genai";
import dotenv from "dotenv"
dotenv.config();
const llm = new ChatGoogleGenerativeAI({
	model: "gemini-2.5-flash",
	temperature: 0,
	maxRetries: 2,
	apiKey: process.env.GOOGLE_API_KEY,
});
export const analyze = async (prompt: string) => {
	const output = await llm.invoke(prompt);
	console.log('output', output);
	return output.content;
}
