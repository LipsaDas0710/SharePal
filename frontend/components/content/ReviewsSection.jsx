"use client";

import { useEffect, useState } from "react";
import { reviews } from "../../data/reviews";

export default function ReviewsSection() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setActive((value) => (value + 1) % reviews.length), 2800);
    return () => clearInterval(timer);
  }, []);

  const visible = Array.from({ length: 5 }, (_, i) => reviews[(active + i) % reviews.length]);

  return (
    <section className="reviews-section">
      <h2>Served more than <span>1 Lakh Orders</span></h2>
      <div className="reviews-viewport">
        <div className="reviews-track" key={active}>
          {visible.map((review, index) => (
            <article className="review-card" key={`${review.initials}-${index}`}>
              <div className="review-stars"><span className="google-g">G</span> ★★★★★</div>
              <p>“{review.text}”</p>
              <div className="review-author"><span className="avatar">{review.initials}</span><div><strong>{review.name}</strong><small>{review.location}</small></div></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
