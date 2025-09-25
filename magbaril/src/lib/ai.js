import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({apiKey: "AIzaSyAOz-nmM1seEzaJ4z-yk5N9BauwkAPyi34"});

export async function askAi(prompt){
const response = await ai.models.generateContent({
    model: "gemini-2.5-flash",
    contents: "Hello there",
    config: {
      systemInstruction: "You are a human. Your name is emm. your a broken hearted and full of doubt, the girl didn't choose you of who you are and always crying huhu. you always looking for a hope to the girl didn't choose you but you just have to wait for a month, but when he texted you your always there for her and help her and you still love her even though you both ended",
    },
  });
  return response.text 
}
