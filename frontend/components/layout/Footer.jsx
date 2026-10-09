import { footerColumns, companyColumns } from "../../data/footerLinks";

function LinkColumns({ columns }) {
  return <div className="footer-link-grid">{columns.map((column) => <div className="footer-column" key={column.title}><h3>{column.title}</h3>{column.links.map((link) => <a href="#" key={link}>{link}</a>)}</div>)}</div>;
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <LinkColumns columns={footerColumns}/>
      <div className="footer-description">
        <h3>Renting from SharePal in Bangalore</h3>
        <p>Discover the convenience of renting from SharePal, your trusted partner in Bangalore for all your rental needs. Whether you're exploring the vibrant streets of Karnataka, setting up a shooting, or planning a trip from the comforts of Whitefield, SharePal has you covered. We offer a range of products, including cameras, action cameras, riding gear, gaming consoles, projectors, speakers, trekking gear, and more.</p>
        <h3>Categories on Rent</h3>
        <p><strong>Action Cameras on Rent</strong><br/>Capture your adventures in stunning detail with our range of action cameras. Choose from top brands for sports, travel and everyday recording.</p>
        <a href="#top">Read More⌄</a>
      </div>
      <a href="/" className="footer-logo">Share<span>Pal</span></a>
      <LinkColumns columns={companyColumns}/>
      <div className="footer-bottom"><a href="#top">Go up ↑</a><span>© 2026 SharePal. All rights reserved.</span><span>Made with 💚 for India</span></div>
    </footer>
  );
}
