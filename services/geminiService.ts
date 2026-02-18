
import { GoogleGenAI } from "@google/genai";

export const fetchEfeSavranInfo = async (): Promise<string> => {
  // Access process.env inside the function to avoid top-level ReferenceErrors
  let apiKey = '';
  try {
    apiKey = typeof process !== 'undefined' ? process.env.API_KEY || '' : '';
  } catch (e) {
    console.warn("Could not access process.env. Using fallback behavior.");
  }
  
  if (!apiKey) {
    return "Hayri Efe Savran, geleneksel hukuk formasyonunu modern analitik disiplinlerle birleştiren, dijital dönüşüm ve LegalTech alanında yenilikçi projeler yürüten bir avukattır. Özuğur & Savran bünyesindeki pratiğini yapay zeka ve teknoloji odaklı girişimlerle harmanlayarak hukuk dünyasında sürdürülebilir çözümler inşa etmeyi amaçlar.";
  }

  const ai = new GoogleGenAI({ apiKey });
  
  const prompt = `
    Hayri Efe Savran hakkında bir profesyonel biyografi özeti oluştur. 
    Kendisi bir Avukat (Lawyer). 
    Aşağıdaki projelerin/web sitelerinin sahibi veya kurucusudur:
    1. ozugursavran.com
    2. satirarasi.pro
    3. briefly.ai
    4. davapusulasi.com
    
    Lütfen Google Search kullanarak bu sitelerden ve internetteki bilgilerden yararlanarak Hayri Efe Savran'ın profesyonel kimliğini, hukuk alanındaki uzmanlıklarını ve vizyonunu özetleyen şık, tek paragraflık "quiet luxury" felsefesine uygun bir metin yaz.
    Dili Türkçe olsun. Çok resmi ama zarif bir üslup kullan. Sadece metni döndür, başlık ekleme.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        tools: [{ googleSearch: {} }]
      }
    });

    return response.text?.trim() || "Hayri Efe Savran, teknoloji ve hukuk disiplinlerini bir araya getiren vizyoner bir hukukçudur.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Hayri Efe Savran, dijital dönüşüm ve hukuk alanında yenilikçi projeler yürüten bir avukattır.";
  }
};
