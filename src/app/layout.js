import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata = {
  title: "TEVQuest | Techno-Economic Viability & Valuation",
  description: "Premier Techno-Economic Viability & Valuation Consultancy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className={`${montserrat.className} min-h-full flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
