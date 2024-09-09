// src/pages/api/submit.ts
import type { APIRoute } from "astro";
import { getGroqChatCompletion } from "../../Ai/Groq";

export const POST: APIRoute = async ({ params, request }) => {
  // const data = params.id
  const data = await request.formData();
    console.log(data)
    const prompt = data.get("prompt");
  //   const email = data.get("email");
  //   const messages = data.get("message");
  // const data =
  return new Response(
    JSON.stringify({
      message: 
        {
          message: "test",
          data: prompt,
          response: (await getGroqChatCompletion(prompt)).choices[0].message.content,
        },
    }),
    { status: 200 }
  );
  // Validate the data - you'll probably want to do more than this
};
