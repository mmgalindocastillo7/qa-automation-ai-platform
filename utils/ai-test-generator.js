import fetch from "node-fetch";

const API_KEY = "TU_API_KEY";

async function generateTests(feature) {
  const res = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${API_KEY}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "Eres un QA experto generando casos de prueba"
        },
        {
          role: "user",
          content: `Genera casos de prueba para: ${feature}`
        }
      ]
    })
  });

  const data = await res.json();
  console.log(data.choices[0].message