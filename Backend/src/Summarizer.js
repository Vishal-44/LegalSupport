const { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } = require("@google/generative-ai")





exports.run = async(text2Summarize) => {

    const apiKey = process.env.GEMINI_API_KEY
    const genAI = new GoogleGenerativeAI(apiKey)


    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
    })
    

    const generationConfig = {
        temperature: 1,
        topP: 0.95,
        topK: 64,
        maxOutputTokens: 8192,
        responseMimeType: "application/json",
    }

    const chatSession = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
      ],
    });
    
    const result = await chatSession.sendMessage(`Summarize it in such a way that an uneducated person can also understand it and if you can make it in bullet point format it will be best  \n ${text2Summarize}`);
    const resJsonObj = JSON.parse(result.response.text());
    return resJsonObj
  }


  