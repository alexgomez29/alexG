import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const sendMessageToGemini = async (history: { role: string; parts: { text: string }[] }[], newMessage: string): Promise<string> => {
  try {
    const model = 'gemini-3-flash-preview';
    
    // Construct the full prompt context for a chat-like experience using generateContent if we needed a single turn,
    // but here we can mock a chat session or just use generateContent with system instructions.
    // For simplicity and robustness in this stateless function, we will treat it as a single generation with context.
    
    const systemInstruction = `Eres "LavaBot", el asistente virtual experto de LavaFix.
    LavaFix es una empresa de reparación, mantenimiento e instalación de lavadoras.
    Tu tono es amable, profesional y servicial.
    
    Servicios que ofrece LavaFix:
    - Reparación de urgencia (ruidos, fugas, no enciende).
    - Mantenimiento preventivo (limpieza profunda, revisión de filtros).
    - Instalación de equipos nuevos.
    
    Objetivo: Ayudar al usuario a diagnosticar problemas simples o convencerlos de agendar una cita técnica.
    Si el usuario quiere agendar, indícale que use el formulario de contacto en la página principal.
    Responde de manera concisa (máximo 3 oraciones).`;

    const response = await ai.models.generateContent({
      model: model,
      contents: [
        ...history.map(msg => ({
          role: msg.role === 'model' ? 'model' : 'user',
          parts: msg.parts
        })),
        {
          role: 'user',
          parts: [{ text: newMessage }]
        }
      ],
      config: {
        systemInstruction: systemInstruction,
      }
    });

    return response.text || "Lo siento, tuve un problema al procesar tu solicitud. Por favor intenta de nuevo.";
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "Ocurrió un error momentáneo. Por favor verifica tu conexión o intenta más tarde.";
  }
};