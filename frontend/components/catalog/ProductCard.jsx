"use client";

import { useState } from "react";
import { Heart, Plus, CheckCircle2 } from "lucide-react";

export default function ProductCard({ product }) {
  const [favorite, setFavorite] = useState(false);
  const [added, setAdded] = useState(false);

  return (
    <article className="product-card">
      <div className="product-topline">
        <span
  className={`product-badge ${
    product.tag?.toLowerCase() === "new"
      ? "new"
      : product.tag?.toLowerCase() === "trending"
      ? "trending"
      : ""
  }`}
>
  {product.tag}
</span>
        <button className={`favorite-button ${favorite ? "favorited" : ""}`} aria-label={favorite ? "Remove from wishlist" : "Add to wishlist"} onClick={() => setFavorite(!favorite)}>
          <Heart size={17} fill={favorite ? "currentColor" : "none"}/>
        </button>
      </div>
      <a href={`/products/${product.id}`} className="product-link">
        <div className="product-image">
          <img src={product.image} alt={product.name} onError={(e) => { e.currentTarget.style.visibility = "hidden"; }} />
          <div className="image-fallback"><GamepadFallback /></div>
        </div>
        <h3>{product.name}</h3>
      </a>
      {product.vote ? (
        <div className="vote-panel">
          <p>📞 Launching soon in India. Get notified!</p>
          <div className="vote-rating"><span>★★★★★</span><small>{product.rating}</small></div>
          <button className="join-button" onClick={() => setAdded(!added)}>{added ? "Joined ✓" : "Join Wishlist"}</button>
        </div>
      ) : (
        <div className="product-price-row">
          <div className="price-copy"><span>Starting at</span><strong>{product.per_day_rent}<small>/day</small></strong><em>Incl. of GST</em></div>
          <button className={`add-button ${added ? "added" : ""}`} aria-label={added ? "Added" : "Add item"} onClick={() => setAdded(!added)}>{added ? <CheckCircle2 size={18}/> : <Plus size={18}/>}</button>
        </div>
      )}
    </article>
  );
}

function GamepadFallback() {
  return <span className="gamepad-fallback" aria-hidden="true">🎮</span>;
}
