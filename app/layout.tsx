import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Dr. Abhilasha's Clinic | Women's Health, Fertility & Laparoscopy Centre",
  description:
    "Compassionate, expert gynecological, obstetric, laparoscopic surgery and hormonal PCOS care by Dr. Abhilasha (MBBS, MD - OBGYN, FMAS). Book in-clinic or online video consultations.",
  keywords: [
    "Dr Abhilasha",
    "Dr Abhilasha Clinic",
    "HerCare",
    "Gynecologist",
    "Obstetrician",
    "PCOS Treatment",
    "Pregnancy Care",
    "Laparoscopic Surgery",
    "Women's Health",
    "Online Consultation",
  ],
  authors: [{ name: "Dr. Abhilasha" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="font-sans antialiased min-h-screen bg-[#fdfbfb] text-[#18181b] selection:bg-pink-100 selection:text-pink-700">
        {children}
      </body>
    </html>
  );
}
