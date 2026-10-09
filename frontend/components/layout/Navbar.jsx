"use client";

import { useState } from "react";
import { MapPin, ChevronDown, CalendarDays, CalendarPlus, Search, ShoppingCart, UserRound } from "lucide-react";

export default function Navbar() {
  const [city, setCity] = useState("Bangalore");
  return (
    <header className="top-header">
      <a className="brand-logo" href="/" aria-label="SharePal home">Share<span>Pal</span></a>
      <div className="booking-controls">
        <button className="city-button" onClick={() => setCity(city === "Bangalore" ? "Bhubaneswar" : "Bangalore")}>
          <MapPin size={17}/><span>{city}</span><ChevronDown size={13}/>
        </button>
        <button className="date-button" type="button"><CalendarDays size={16}/><span>Delivery Date</span></button>
        <button className="date-button" type="button"><CalendarDays size={16}/><span>Pickup Date</span></button>
        <button className="select-button" type="button"><CalendarPlus size={15}/>Select</button>
      </div>
      <div className="header-actions">
        <button aria-label="Search"><Search/></button>
        <button aria-label="Cart"><ShoppingCart/></button>
        <button className="profile-button" aria-label="Profile"><UserRound/></button>
        <span className="greeting">Hi, Lipsa</span>
      </div>
    </header>
  );
}
