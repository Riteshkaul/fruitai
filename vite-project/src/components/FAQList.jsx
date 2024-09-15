import React, { useState, useEffect } from "react";
import { getAllFAQs, deleteFAQ } from "../api/faqService";
import FAQForm from "./FAQForm";
import "../css/faqlist.css";

const FAQList = () => {
  const [faqs, setFaqs] = useState([]);
  const [selectedFAQ, setSelectedFAQ] = useState(null);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchFAQs();
  }, []);

  const fetchFAQs = () => {
    getAllFAQs().then((response) => {
      setFaqs(response.data);
    });
  };

  const handleSave = () => {
    setShowForm(false);
    setSelectedFAQ(null); // Reset after saving
    fetchFAQs(); // Refresh the FAQ list after save
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this FAQ?")) {
      deleteFAQ(id)
        .then(() => {
          alert("FAQ deleted successfully!");
          fetchFAQs();
        })
        .catch((error) => {
          console.error("Error deleting FAQ:", error);
          alert("Failed to delete FAQ");
        });
    }
  };

  return (
    <div className="faq-list-container">
      {showForm ? (
        <div>
          <h2>{selectedFAQ ? "Edit FAQ" : "Create FAQ"}</h2>
          <FAQForm faq={selectedFAQ} onSave={handleSave} />
        </div>
      ) : (
        <div>
          <h1>FAQ List</h1>
          <button
            className="add-faq-button"
            onClick={() => {
              setSelectedFAQ(null); // Set selected FAQ to null for create form
              setShowForm(true); // Show the form
            }}
          >
            Add FAQ
          </button>
          <ul className="faq-list">
            {faqs.map((faq) => (
              <li key={faq.id} className="faq-item">
                <strong>{faq.question}</strong>
                <p>{faq.answer}</p>
                <button
                  className="edit-faq-button"
                  onClick={() => {
                    setSelectedFAQ(faq); // Load the selected FAQ into the form
                    setShowForm(true); // Show the form
                  }}
                >
                  Edit
                </button>
                <button
                  className="delete-faq-button"
                  onClick={() => handleDelete(faq.id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default FAQList;
