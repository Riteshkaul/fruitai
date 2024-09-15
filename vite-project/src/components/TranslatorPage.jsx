import React, { useState } from "react";
import axios from "axios";
import "../css/translator.css"; // Import specific CSS for TranslatorPage

const TranslatorPage = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [targetLang, setTargetLang] = useState("hi"); // Default: Hindi

  const translateText = async () => {
    try {
      // MyMemory API call
      const response = await axios.get(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          text
        )}&langpair=en|${targetLang}`
      );

      setTranslatedText(response.data.responseData.translatedText);
    } catch (error) {
      console.error("Translation error:", error);
    }
  };

  return (
    <div className="translator-page">
      <h1>Translator</h1>
      <textarea
        placeholder="Enter text to translate"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div>
        <label>Select target language:</label>
        <select
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
        >
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="hi">Hindi</option>
          <option value="zh">Chinese</option>
        </select>
      </div>
      <button onClick={translateText}>Translate</button>

      {translatedText && (
        <div>
          <h2>Translated Text:</h2>
          <p>{translatedText}</p>
        </div>
      )}
    </div>
  );
};

export default TranslatorPage;
