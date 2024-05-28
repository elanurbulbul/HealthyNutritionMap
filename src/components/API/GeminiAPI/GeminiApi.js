import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";

function GeminiApi() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "AIzaSyDragP94bWxrKrlg_IrCMh2sevwvKNQcUQ";

  const handleGenerateAnswer = async () => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText",
        {
          prompt: { text: question },
        },
        {
          params: {
            key: API_KEY,
          },
        }
      );
      setAnswer(response.data.candidates[0].output);
    } catch (error) {
      console.error(error);
      setAnswer("Sorry, something went wrong. Please try again.");
    }
    setLoading(false);
  };

  return (
    <div>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question about calory"
      />
      <button onClick={handleGenerateAnswer} disabled={loading}>
        Generate Answer
      </button>
      {loading && <p>Loading...</p>}
      {answer && (
        <div>
          <h2>Generated Answer:</h2>
          <ReactMarkdown>{answer}</ReactMarkdown>
        </div>
      )}
    </div>
  );
}

export default GeminiApi;
