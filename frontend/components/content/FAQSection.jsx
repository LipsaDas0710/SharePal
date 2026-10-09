"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { faqs } from "../../data/faqs";

export default function FAQSection() {
  const [open, setOpen] = useState(-1);
  return (
    <section className="faq-section">
      <h2>Frequently Asked Questions (FAQs)</h2>
      <div className="faq-list">
        {faqs.map((faq, i) => (
          <div className="faq-item" key={faq.question}>
            <button onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i}>
              <span>{faq.question}</span>{open === i ? <ChevronUp size={14}/> : <ChevronDown size={14}/>}
            </button>
            {open === i && <p>{faq.answer}</p>}
          </div>
        ))}
      </div>
      <button className="view-faqs" onClick={() => setOpen(open === -2 ? -1 : -2)}>View more FAQs</button>
      {open === -2 && <p className="more-faqs-note">For additional help, please contact SharePal support.</p>}
    </section>
  );
}
