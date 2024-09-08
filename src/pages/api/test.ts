// src/pages/api/submit.ts
import type { APIRoute } from "astro";


export const POST :APIRoute = async ({params,request}) => {
    const data = params.id
//   const data = await request.formData();
//   console.log(data)
//   const name = data.get("name");
//   const email = data.get("email");
//   const messages = data.get("message");
// const data = 
  return new Response(
    JSON.stringify({
      message: [
        {
            message: "test",
            data :params
        }
      ]
    }),
    { status: 200 }
  )
  // Validate the data - you'll probably want to do more than this
}
  