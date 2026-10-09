"use client";

import { useState } from "react";

const categories = ["Photography", "Gaming", "Outdoor", "Entertainment"];

export default function CategoryNav() {
  const [active, setActive] = useState("Gaming");
  return (
    <nav className="category-nav" aria-label="Product categories">
      {categories.map((item) => (
        <button key={item} className={`category-link ${active === item ? "active" : ""}`} onClick={() => setActive(item)}>
          {item}
        </button>
      ))}
    </nav>
  );
}
