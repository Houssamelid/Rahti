import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import LoginModal from "./components/modals/LoginModal";
import SignupModal from "./components/modals/SignupModal";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahti",
  // Add favicon reference here:
  icons: {
    icon: "/logo.png", // Path to your favicon in the public folder
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = (
      <p>test content</p>
    );
  
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="pt-32">
          {children}
        </div>

        <LoginModal/>
        <SignupModal/>
      </body>
    </html>
  );
}
