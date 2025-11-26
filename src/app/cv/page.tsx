"use client";

import { cvData } from "~/lib/cv-data";
import { Button } from "~/components/ui/button";
import { Printer, Mail, Globe, MapPin } from "lucide-react";

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

      <div className="no-print fixed right-8 top-8 z-50">
        <Button
          onClick={() => window.print()}
          className="rounded-full border-2 border-black bg-black px-6 text-white shadow-xl hover:bg-white hover:text-black print:hidden"
          size="lg"
        >
          <Printer className="mr-2 size-5" />
          Download PDF
        </Button>
      </div>

      <div className="print-container mx-auto max-w-[210mm] bg-white print:text-[11px]">
        <header className="mb-4 border-b-2 border-black pb-2 text-center print:mb-3 print:pb-2">
          <h1 className="mb-1 text-3xl font-bold uppercase tracking-wide print:text-2xl">
            Paul-Jasper Sahr
          </h1>
          <div className="flex flex-wrap justify-center gap-x-4 gap-y-0.5 text-sm print:text-[10px]">
            <span className="flex items-center gap-1">
              <MapPin className="size-3" /> Oldenburg, Germany
            </span>
            <a
              href="mailto:mail@pauljasper.dev"
              className="flex items-center gap-1 hover:underline"
            >
              <Mail className="size-3" /> mail@pauljasper.dev
            </a>
            <a
              href="https://pauljasper.dev"
              className="flex items-center gap-1 hover:underline"
            >
              <Globe className="size-3" /> pauljasper.dev
            </a>
          </div>
        </header>

        <section className="avoid-break mb-4 print:mb-2">
          <h2 className="mb-1 border-b border-black text-lg font-bold uppercase tracking-wider print:mb-0.5 print:text-sm">
            Professional Summary
          </h2>
          <p className="text-justify text-sm leading-relaxed print:text-[9px] print:leading-tight">
            {cvData.professionalSummary}
          </p>
        </section>

        <section className="mb-4 print:mb-2">
          <h2 className="mb-2 border-b border-black text-lg font-bold uppercase tracking-wider print:mb-0.5 print:text-sm">
            Professional Experience
          </h2>
          <div className="space-y-3 print:space-y-0">
            {cvData.experience.map((exp, index) => (
              <div key={index}>
                {exp.positions.map((pos, posIndex) => (
                  <div
                    key={posIndex}
                    className="avoid-break mb-3 last:mb-0 print:mb-0.5"
                  >
                    <div className="mb-0.5 flex items-baseline justify-between print:mb-0">
                      <div className="text-base font-bold print:text-[10px]">
                        {pos.title}
                      </div>
                      <div className="whitespace-nowrap text-sm font-medium print:text-[9px]">
                        {pos.date}
                      </div>
                    </div>
                    <div className="mb-1 flex items-baseline justify-between print:mb-0">
                      <div className="text-sm font-semibold italic print:text-[9px]">
                        {exp.company}
                      </div>
                      <div className="hidden text-xs text-gray-600 print:block print:text-[8px]">
                        Berlin, Germany
                      </div>
                    </div>

                    <ul className="ml-4 mt-1.5 list-outside list-disc space-y-0.5 print:ml-3 print:mt-0.5">
                      {pos.projects.map((project, projIndex) => (
                        <li
                          key={projIndex}
                          className="pl-1 text-sm leading-tight print:pl-0 print:text-[9px] print:leading-[1.1]"
                        >
                          <span className="mr-1 font-semibold">
                            {project.title}:
                          </span>
                          {project.description}
                          {project.technologies && (
                            <span className="mt-0.5 block text-xs italic text-gray-600 print:text-[8px]">
                              Tech: {project.technologies}
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="mb-4 print:mb-2">
          <h2 className="mb-2 border-b border-black text-lg font-bold uppercase tracking-wider print:mb-1 print:text-sm">
            Education
          </h2>
          <div className="space-y-2 print:space-y-1">
            {cvData.education.map((edu, index) => (
              <div key={index}>
                {edu.positions.map((pos, posIndex) => (
                  <div
                    key={posIndex}
                    className="avoid-break mb-2 last:mb-0 print:mb-1"
                  >
                    <div className="flex items-baseline justify-between">
                      <div className="text-base font-bold print:text-[10px]">
                        {edu.company}
                      </div>
                      <div className="text-sm font-medium print:text-[9px]">
                        {pos.date}
                      </div>
                    </div>
                    <div className="mb-0.5 flex items-baseline justify-between">
                      <div className="text-sm italic print:text-[9px]">
                        {pos.title}
                      </div>
                    </div>
                    {pos.projects.length > 0 && (
                      <ul className="ml-4 mt-0.5 list-outside list-disc space-y-0.5 print:ml-3">
                        {pos.projects.map((proj, pIndex) => (
                          <li
                            key={pIndex}
                            className="pl-1 text-sm leading-tight print:text-[9px] print:leading-[1.1]"
                          >
                            {proj.title && (
                              <span className="mr-1 font-semibold">
                                {proj.title}:
                              </span>
                            )}
                            {proj.description}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="avoid-break mb-4 print:mb-0">
          <h2 className="mb-2 border-b border-black text-lg font-bold uppercase tracking-wider print:mb-1 print:text-sm">
            Certifications & Skills
          </h2>

          <div className="mb-2 print:mb-1">
            <h3 className="mb-0.5 text-sm font-bold uppercase text-gray-700 print:text-[9px]">
              Technical Skills
            </h3>
            <div className="text-sm leading-relaxed print:text-[9px] print:leading-tight">
              <span className="font-semibold">Languages & Frameworks:</span>{" "}
              {cvData.technicalSkills.languages}
              <br />
              <span className="font-semibold">Cloud & DevOps:</span>{" "}
              {cvData.technicalSkills.cloud}
              <br />
              <span className="font-semibold">Data & AI:</span>{" "}
              {cvData.technicalSkills.dataAI}
              <br />
            </div>
          </div>

          <div>
            <h3 className="mb-0.5 text-sm font-bold uppercase text-gray-700 print:text-[9px]">
              Certifications
            </h3>
            <div className="grid grid-cols-1 gap-x-4 gap-y-0.5 sm:grid-cols-2 print:gap-y-0">
              {cvData.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex justify-between text-sm print:text-[9px]"
                >
                  <span>{cert.title}</span>
                  <span className="self-center text-xs italic text-gray-600 print:text-[8px]">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
