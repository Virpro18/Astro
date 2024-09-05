import Groq from "groq-sdk";
import text from "./AiSystem.txt?raw"
import env from "dotenv"
// env.config()

console.log(text)

const groq = new Groq({ apiKey: import.meta.env.PUBLIC_GROQ_API_KEY});

export async function main() {
  const chatCompletion = await getGroqChatCompletion();
  // Print the completion returned by the LLM.
  console.log(chatCompletion.choices[0]?.message?.content || "");
}

export async function getGroqChatCompletion() {
  return groq.chat.completions.create({
    messages: [
      {
        role: "user",
        content: "siapa kamu",
      },
      {
        role:"system",
        content:`${text}`
      }
    ],
    model: "llama3-8b-8192",
  });
}
