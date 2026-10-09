"use client";

import { useState } from "react";
import { Smile, Gamepad2, Camera, Monitor, Glasses, Joystick } from "lucide-react";

const categories = [
  { label: "All", icon: Smile },
  { label: "Handheld", image:"/images/NINTENDO_SWITCH_01_Hero.webp", },
  { label: "GTA VI", image: "/images/gta-vi.webp" },
  { label: "PS5 Console", image: "/images/ps5-console-on-rent-sharepal.webp", },
  { label: "Xbox Console", image: "/images/xbox-console-on-rent-sharepal.webp", },
  { label: "Racing Wheel", image: "/images/logitech-g29-racing-wheel-on-rent-sharepal-1.webp", },
  { label: "Big Screen Gaming", image: "/images/ps5-with-2-controllers-with-projector-on-rent.webp" },
  { label: "VR", image: "/images/vr-on-rent-sharepal.webp" },
];

export default function Sidebar() {
  const [selected, setSelected] = useState("All");
  return (
    <aside className="sidebar" aria-label="Gaming categories">
      {categories.map(({ label, icon: Icon, image }) => (
        <button key={label} className={`sidebar-item ${selected === label ? "selected" : ""}`} onClick={() => setSelected(label)}>
          <span className="sidebar-image">
            {image ? <img src={image} alt="" onError={(e) => { e.currentTarget.style.display = "none"; }} /> : <Icon size={24}/>}
          </span>
          <span className="sidebar-label">{label}</span>
          {selected === label && <span className="sidebar-underline"/>}
        </button>
      ))}
    </aside>
  );
}
