import { type Metadata } from "next";

export const metadata: Metadata = {
  title: "Paul-Jasper Sahr - CV",
  description: "CV of Paul-Jasper Sahr",
};

export default function CVLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
