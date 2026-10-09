"use client";

import { useState } from "react";

export default function RecommendationForm() {
  const [name, setName] = useState("");
  const [useCase, setUseCase] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <section className="recommendation-box" id="recommendation">
      <div>
        <h3>Can't find what you're looking for?</h3>
        <label htmlFor="recommend-name">Tell us what gear we should launch next</label>
        <input id="recommend-name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter product name"/>
      </div>
      <div>
        <h3 className="invisible-heading">Your use case</h3>
        <label htmlFor="recommend-use">What will you use this for?</label>
        <input id="recommend-use" value={useCase} onChange={(e) => setUseCase(e.target.value)} placeholder="e.g. trekking trip, weekend gaming, party"/>
      </div>
      <button onClick={() => setSubmitted(true)}>Submit Recommendation</button>
      {submitted && <p className="form-message">Thanks! Your recommendation has been noted locally.</p>}
    </section>
  );
}
