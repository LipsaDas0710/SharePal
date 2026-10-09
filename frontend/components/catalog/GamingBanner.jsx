export default function GamingBanner() {
  return (
    <section className="gaming-banner" >
      <img className="banner-art banner-art-left" src="/images/gaming-left.webp" alt="" />
      <div className="banner-content">
        <h2>Gaming Consoles</h2>
        <p>Rent the latest gaming gadgets from <strong>SharePal</strong> PS5, Xbox,<br className="desktop-break"/> Oculus VR, Racing Wheel on rent.</p>
      
<div
  className="gaming-banner__brands"
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "18px",
    marginTop: "24px",
    minWidth: 0,
  }}
>
  <img
    src="https://images.sharepal.in/super-categories-brand-logos/gaming/XBOX.svg"
    alt="Xbox"
    style={{
      display: "block",
      width: "120px",
      height: "34px",
      objectFit: "contain",
      filter: "brightness(0) invert(1)",
    }}
  />

  <span
    style={{
      width: "3px",
      height: "34px",
      flexShrink: 0,
      backgroundColor: "rgba(255,255,255,0.12)",
    }}
  />

  <img
    src="https://images.sharepal.in/super-categories-brand-logos/gaming/PS5.svg"
    alt="PlayStation 5"
    style={{
      display: "block",
      width: "140px",
      height: "34px",
      objectFit: "contain",
      filter: "brightness(0) invert(1)",
    }}
  />

  <span
    style={{
      width: "3px",
      height: "34px",
      flexShrink: 0,
      backgroundColor: "rgba(255,255,255,0.12)",
    }}
  />

  <span
    style={{
      color: "#fff",
      fontSize: "28px",
      whiteSpace: "nowrap",
    }}
  >
    ∞ Meta
  </span>
</div>

      </div>
      <img className="banner-art banner-art-right" src="/images/gaming-right.webp" alt="" />
    </section>
  );
}
