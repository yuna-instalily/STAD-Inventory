import { GoogleGenAI } from "@google/genai";
import { ActionItem } from "../types";

let aiClient: GoogleGenAI | null = null;

const getClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY || '';
    // We will assume the key is valid if present, otherwise it might fail gracefully or we can handle it in UI
    aiClient = new GoogleGenAI({ apiKey });
  }
  return aiClient;
};

export const regenerateInsight = async (item: ActionItem, tone: 'friendly' | 'urgent' | 'concise'): Promise<string> => {
  try {
    const client = getClient();
    if (!process.env.API_KEY) {
        console.warn("No API Key found in env");
        return item.insightText; // Fallback
    }

    const rawDataString = JSON.stringify(item.rawData);
    const prompt = `
      You are an AI sales assistant for InstaLily.
      Generate a short, actionable insight summary for a sales representative based on the following raw data:
      ${rawDataString}

      The current insight text is: "${item.insightText}"

      Please rewrite this insight to be ${tone}.
      Keep it professional but succinct.
      If it involves money, format it as currency.
    `;

    const response = await client.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || item.insightText;
  } catch (error) {
    console.error("Error generating insight:", error);
    return item.insightText;
  }
};
