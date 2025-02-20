import "~/styles/globals.css";

import { Space_Mono, Montserrat } from "next/font/google";
import { type Metadata } from "next";

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-space-mono",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "paul-jasper sahr",
  description: "personal website",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${spaceMono.variable} ${montserrat.variable} dark`}
    >
      <body>{children}</body>
    </html>
  );
}
