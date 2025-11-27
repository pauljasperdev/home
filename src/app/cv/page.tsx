"use client";

import { cvData } from "~/lib/cv-data";
import { Header } from "./_components/header";
import { Summary } from "./_components/summary";
import { Experience } from "./_components/experience";
import { Education } from "./_components/education";
import { Projects } from "./_components/projects";
import { Skills } from "./_components/skills";
import { DownloadButton } from "./_components/download-button";

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

      <DownloadButton />

      <div className="print-container mx-auto flex max-w-[210mm] flex-col gap-4 bg-white print:gap-5 print:text-[11px]">
        <Header />
        <Summary summary={cvData.professionalSummary} />
        <Experience experience={cvData.experience} />
        <Education education={cvData.education} />
        <Projects projects={cvData.sideProjects} />
        <Skills
          skills={cvData.technicalSkills}
          certifications={cvData.certifications}
        />
      </div>
    </div>
  );
}
