
import { GoogleGenAI } from "@google/genai";

export const fetchEfeSavranInfo = async (): Promise<string> => {
  let apiKey = '';
  try {
    if (typeof process !== 'undefined' && process.env) {
      apiKey = process.env.API_KEY || '';
    }
  } catch (e) {
    console.warn("Could not access environment variables safely.");
  }
  
  if (!apiKey) {
    return "Hayri Efe Savran, geleneksel hukuk formasyonunu modern analitik disiplinlerle birleştiren, dijital dönüşüm ve LegalTech alanında yenilikçi projeler yürüten bir avukattır. Özuğur & Savran bünyesindeki pratiğini yapay zeka ve teknoloji odaklı girişimlerle harmanlayarak hukuk dünyasında sürdürülebilir çözümler inşa etmeyi amaçlar.";
  }

  try {
    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Hayri Efe Savran hakkında şık, tek paragraflık profesyonel bir biyografi özeti oluştur. Hukuk ve teknoloji vizyonuna değin. Dili Türkçe olsun.",
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
