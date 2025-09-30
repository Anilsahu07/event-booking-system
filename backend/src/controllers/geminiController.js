const {GoogleGenAI}= require("@google/genai")
const dotenv= require("dotenv")
dotenv.config()

const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
if(!GEMINI_API_KEY){
  console.warn('GEMINI_API_KEY not set in env. Get one from Google AI Studio.');
}
const ai = new GoogleGenAI({ apiKey: GEMINI_API_KEY });

module.exports.generateTopic=async(req, res)=>{
  const { topic } = req.body;
  if(!topic || typeof topic !== 'string'){
    return res.status(400).json({ error: 'topic (string) is required in body' });
  }

  try{
    // Prompt you can customize
    const prompt = `Explain "${topic}" in a clear way for a web developer:
- Give a short explanation,
- Provide a small example or code snippet if applicable,
- Keep it friendly and concise.`;

    // Call Gemini (generateContent)
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',   // or another Gemini model; docs show gemini-2.5-flash & others.
      contents: prompt
    });

    const text = response?.text ?? (response?.candidates?.[0]?.content?.parts?.[0]?.text) ?? '';


    return res.json({ text });
  }catch(err){
    console.error('Gemini error', err);
    // SDK provides ApiError class, but we return message for dev debugging
    return res.status(500).json({ error: err.message || 'Generation failed' });
  }
}




