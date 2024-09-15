import React, { useState, useEffect } from "react";
import { createFAQ, updateFAQ } from "../api/faqService";

const FAQForm = ({ faq, onSave }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  useEffect(() => {
    if (faq) {
      setQuestion(faq.question);
      setAnswer(faq.answer);
    } else {
      setQuestion("");
      setAnswer("");
    }
  }, [faq]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newFAQ = { question, answer };

    if (faq) {
      updateFAQ(faq.id, newFAQ).then(() => onSave());
    } else {
      createFAQ(newFAQ).then(() => onSave());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="faq-form">
      <div className="form-group">
        <label htmlFor="question" className="form-label">
          Question:
        </label>
        <input
          id="question"
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          className="form-input"
          placeholder="Enter your question"
        />
      </div>
      <div className="form-group">
        <label htmlFor="answer" className="form-label">
          Answer:
        </label>
        <textarea
          id="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          className="form-textarea"
          placeholder="Enter the answer"
        />
      </div>
      <button type="submit" className="form-button">
        {faq ? "Update FAQ" : "Create FAQ"}
      </button>
    </form>
  );
};

export default FAQForm;
