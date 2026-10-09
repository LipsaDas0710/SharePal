import "./globals.css";
import "./sharepal.css";

export const metadata = {
  title: "SharePal | Gaming Gadgets on Rent",
  description: "Discover and rent gaming gadgets on SharePal.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
