"use client";

import { useState } from "react";
import { Smile, Gamepad2, Camera, Monitor, Glasses, Joystick } from "lucide-react";

const categories = [
  { label: "All", icon: Smile },
  { label: "GTA VI", image: "/images/categories/gta.png" },
  { label: "PS5 Console", image: "/images/categories/ps5.png" },
  { label: "Xbox Console", image: "/images/categories/xbox.png" },
  { label: "Racing Wheel", icon: Joystick },
  { label: "Big Screen Gaming", icon: Monitor },
  { label: "PS5 Games", icon: Gamepad2 },
  { label: "Cameras", icon: Camera },
  { label: "VR", icon: Glasses },
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
