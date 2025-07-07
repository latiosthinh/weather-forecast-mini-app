import Sidebar from "@/components/sidebar";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import WeatherRefetchProvider from "@/components/main-city/WeatherRefetchProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Singapore - WeatherForcast",
  description: "WeatherForcast mini app for Singapore",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WeatherRefetchProvider>
          <main className="p-4 bg-gradient min-h-screen flex items-center justify-center">
            {children}
          </main>
        </WeatherRefetchProvider>

        <Sidebar />
      </body>
    </html>
  );
}
