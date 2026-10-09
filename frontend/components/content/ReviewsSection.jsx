"use client";

import { reviews } from "../../data/reviews";

export default function ReviewsSection() {
  // Duplicate the reviews to create a continuous scrolling track.
  const scrollingReviews = [...reviews, ...reviews];

  return (
    <section className="reviews-section">
      <h2>
        Served more than <span>1 Lakh Orders</span>
      </h2>

      <div className="reviews-viewport">
        <div className="reviews-track">
          {scrollingReviews.map((review, index) => (
            <article
              className="review-card"
              key={`${review.initials}-${index}`}
            >
              <div className="review-stars flex ">
                <img
  src="https://www.gstatic.com/images/branding/product/1x/gsa_512dp.png"
  alt="Google"
  style={{
    width: "34px",
    height: "34px",
    objectFit: "contain",
    display: "block",
  }}
/>

                <span className="star">★★★★★</span>
              </div>

              <p>“{review.text}”</p>

              <div className="review-author">
                <span className="avatar">{review.initials}</span>

                <div>
                  <strong>{review.name}</strong>
                  <small>{review.location}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}