import { useEffect, useState } from "react";

function AiCard() {
  const [message, setmessage] = useState("");
    async function fetchData() {
  try {

    const fetchData = await fetch("/api/test", {
      method: "POST",
      body: JSON.stringify({ message: "Hello World" }),
      headers: {
        "Content-Type": "application/json",
      },
    })
    const datas = await fetchData.json()
    console.log(datas)
  } catch {
    console.log("error")
  }

      // .then((response) => response.json())
      // .then((data) => console.log(data))
      // .catch(err => console.error(err));
  }
// useEffect(() => {fetchData()},[])
    

  return (
    <>
      <button onClick={fetchData}>test</button>
    </>
  );
}

export default AiCard;
