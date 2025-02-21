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
  title: "Paul's Page",
  description:
    "Paul's personal website of showing his projects and experiences",
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
