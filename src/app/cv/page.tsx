"use client";

import { cvData } from "~/lib/cv-data";
import { Header } from "./_components/header";
import { Summary } from "./_components/summary";
import { Experience } from "./_components/experience";
import { Education } from "./_components/education";
import { Projects } from "./_components/projects";
import { Certifications } from "./_components/skills";

export default function CVPage() {
  return (
    <div className="min-h-screen w-full bg-white p-8 font-sans text-black print:p-0">
      <style jsx global>{`
        @media print {
          @page {
            margin: 0;
            size: A4;
          }
          body {
            -webkit-print-color-adjust: exact;
            print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
          .avoid-break {
            break-inside: avoid;
            page-break-inside: avoid;
          }
          .print-container {
            padding: 0.5cm 1cm !important;
            max-width: 210mm;
            margin: 0 auto;
          }
        }
      `}</style>

      <div className="print-container mx-auto flex max-w-[210mm] flex-col gap-4 bg-white print:gap-5 print:text-[11px]">
        <Header />
        <Summary summary={cvData.professionalSummary} />
        <Experience experience={cvData.experience} />
        <Projects projects={cvData.sideProjects} />
        <Certifications certifications={cvData.certifications} />
        <Education education={cvData.education} />
      </div>
    </div>
  );
}
