import type { APIRoute } from "astro";

export const POST: APIRoute = async ({ request }) => {
  try {

    const data = await request.formData();
    console.log(data)
    const name = data.get("name");
    const email = data.get("email");
  const messages = data.get("message");
  // Validate the data - you'll probably want to do more than this
  if (!name || !email || !messages) {
    return new Response(
      JSON.stringify({
        message: "Missing required fields",
      }),
      { status: 400 }
    );
  }
  // Do something with the data, then return a success response
  return new Response(
    JSON.stringify({
      message: [
        {
          name,
          email,
          messages,
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