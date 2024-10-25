import localFont from "next/font/local";
import "./globals.scss";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "MyBooks",
  description: "A simple book store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Navbar />
        <div className="body-content">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
