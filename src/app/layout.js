import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Head from "next/head";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AJCS Classes",
  description:
    "AJCSClasses is a dedicated online learning platform that offers expert-led training in MERN Stack development, C, C++, HTML, CSS, and JavaScript. Designed for beginners to advanced learners, we focus on practical, real-world skills to help students become confident full-stack developers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Head>
          <title>AJCS Classes</title>
          <meta
            name="AJCS Classes"
            content="AJCSClasses is a dedicated online learning platform that offers expert-led training in MERN Stack development, C, C++, HTML, CSS, and JavaScript. Designed for beginners to advanced learners, we focus on practical, real-world skills to help students become confident full-stack developers."
          />
          <link rel="icon" href="/favicon.ico" />

          {/* Open Graph */}
          <meta property="og:title" content="AJCS Classes" />
          <meta
            property="og:description"
            content="AJCSClasses is a dedicated online learning platform that offers expert-led training in MERN Stack development, C, C++, HTML, CSS, and JavaScript. Designed for beginners to advanced learners, we focus on practical, real-world skills to help students become confident full-stack developers."
          />
          <meta property="og:image" content="/AJCSClasses.jpeg" />
          <meta property="og:url" content="https://ajcsclasses.com" />
          <meta property="og:type" content="website" />

          {/* Twitter Card */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta property="og:title" content="AJCS Classes" />
          <meta
            name="twitter:description"
            content="AJCSClasses is a dedicated online learning platform that offers expert-led training in MERN Stack development, C, C++, HTML, CSS, and JavaScript. Designed for beginners to advanced learners, we focus on practical, real-world skills to help students become confident full-stack developers."
          />
          <meta name="twitter:image" content="/AJCSClasses.jpeg" />
        </Head>

        <Toaster position="top-center" />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
