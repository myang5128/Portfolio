import { Raleway } from "next/font/google";
import "./globals.css";

const fontLang = Raleway({ 
  subsets: ["latin"],
  weight: ["400"]
 });

export const metadata = {
  title: "Portfolio",
  description: "Portfolio for Michael Yang",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fontLang.className}>{children}</body>
    </html>
  );
}
