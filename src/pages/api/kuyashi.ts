import type { APIRoute } from "astro";
import { getGroqChatCompletion } from "../../Ai/Groq";

export const POST: APIRoute = async ({ request }) => {
  try {

    const data = await request.formData();
    console.log(data)
  const prompt = data.get("prompt")
  // Validate the data - you'll probably want to do more than this
  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: [
        {
          prompt,
          message: "Thank you for your message!",
        }
      ]
    }),
    { status: 200 }
  );
} catch (error){
  return new Response(
    JSON.stringify({
      message:"error " + error
    })
  )
}
};