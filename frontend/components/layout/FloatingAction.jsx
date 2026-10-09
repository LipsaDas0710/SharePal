"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingAction() {
  return <button className="floating-action" aria-label="Open SharePal chat" onClick={() => alert("Chat support coming soon")}><MessageCircle size={17}/><span>•••</span></button>;
}
