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
            margin: 1cm;
          }
          body {
            -webkit-print-color-adjust: exact;
          }
          .no-print {
            display: none !important;
          }
        }
      `}</style>

      {/* Download/Print Button */}
      <div className="no-print fixed bottom-8 right-8 z-50">
        <Button
          onClick={() => window.print()}
          className="shadow-lg print:hidden"
          size="lg"
        >
          <Printer className="mr-2 size-4" />
          Download PDF
        </Button>
      </div>

      {/* CV Content Container */}
      <div className="mx-auto max-w-[210mm] bg-white">
        {/* Header */}
        <header className="mb-8 border-b-2 border-black pb-4 text-center">
          <h1 className="mb-2 text-4xl font-bold uppercase tracking-wide">
            Paul-Jasper Sahr
          </h1>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm">
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
            {/* Add phone if available, placeholder for structure */}
            {/* <span className="flex items-center gap-1"><Phone className="size-3" /> +49 123 456789</span> */}
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-6">
          <h2 className="mb-3 border-b border-black text-lg font-bold uppercase tracking-wider">
            Professional Summary
          </h2>
          <p className="text-justify text-sm leading-relaxed">
            {cvData.professionalSummary}
          </p>
        </section>

        {/* Professional Experience */}
        <section className="mb-6">
          <h2 className="mb-4 border-b border-black text-lg font-bold uppercase tracking-wider">
            Professional Experience
          </h2>
          <div className="space-y-6">
            {cvData.experience.map((exp, index) => (
              <div key={index}>
                {/* Render positions for the company */}
                {exp.positions.map((pos, posIndex) => (
                  <div key={posIndex} className="mb-4 last:mb-0">
                    <div className="mb-1 flex items-baseline justify-between">
                      <div className="text-base font-bold">{pos.title}</div>
                      <div className="whitespace-nowrap text-sm font-medium">
                        {pos.date}
                      </div>
                    </div>
                    <div className="mb-2 flex items-baseline justify-between">
                      <div className="text-sm font-semibold italic">
                        {exp.company}
                      </div>
                      <div className="hidden text-xs text-gray-600 print:block">
                        Berlin, Germany
                      </div>
                    </div>

                    <ul className="ml-4 list-outside list-disc space-y-1">
                      {pos.projects.map((project, projIndex) => (
                        <li
                          key={projIndex}
                          className="pl-1 text-sm leading-tight"
                        >
                          <span className="mr-1 font-semibold">
                            {project.title}:
                          </span>
                          {project.description}
                          {project.technologies && (
                            <span className="mt-0.5 block text-xs italic text-gray-600">
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

        {/* Education */}
        <section className="mb-6">
          <h2 className="mb-4 border-b border-black text-lg font-bold uppercase tracking-wider">
            Education
          </h2>
          <div className="space-y-4">
            {cvData.education.map((edu, index) => (
              <div key={index}>
                {edu.positions.map((pos, posIndex) => (
                  <div key={posIndex} className="mb-3 last:mb-0">
                    <div className="flex items-baseline justify-between">
                      <div className="text-base font-bold">{edu.company}</div>
                      <div className="text-sm font-medium">{pos.date}</div>
                    </div>
                    <div className="mb-1 flex items-baseline justify-between">
                      <div className="text-sm italic">{pos.title}</div>
                    </div>
                    {pos.projects.length > 0 && (
                      <ul className="ml-4 mt-1 list-outside list-disc space-y-1">
                        {pos.projects.map((proj, pIndex) => (
                          <li
                            key={pIndex}
                            className="pl-1 text-sm leading-tight"
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

        {/* Certifications & Skills */}
        <section className="mb-6">
          <h2 className="mb-4 border-b border-black text-lg font-bold uppercase tracking-wider">
            Certifications & Skills
          </h2>

          {/* Skills Section - Derived from technologies mentioned */}
          <div className="mb-4">
            <h3 className="mb-1 text-sm font-bold uppercase text-gray-700">
              Technical Skills
            </h3>
            <div className="text-sm leading-relaxed">
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

          {/* Certifications List */}
          <div>
            <h3 className="mb-1 text-sm font-bold uppercase text-gray-700">
              Certifications
            </h3>
            <div className="grid grid-cols-1 gap-x-4 gap-y-1 sm:grid-cols-2">
              {cvData.certifications.map((cert, index) => (
                <div key={index} className="flex justify-between text-sm">
                  <span>{cert.title}</span>
                  <span className="self-center text-xs italic text-gray-600">
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
