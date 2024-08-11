// "use server";

// import { GoogleGenerativeAI } from "@google/generative-ai";

// const generativeAI = new GoogleGenerativeAI(process.env.API_KEY || "");

// export async function getData() {
//   try {
//     const model = generativeAI.getGenerativeModel({ model: "gemini-pro" });

//     const result = await model.generateContent("hello. who are you?");
//     const response = await result.response;
//     const text = await response.text();

//     if (text) {
//       console.log(text, "결과 텍스트 ");
//       return
//     }
//   } catch (e) {
//     console.error(e, "error");
//   }
// }
