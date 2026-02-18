export type ProjectType = {
  title: string;
  description: string | string[];
  technologies: string;
  link?: string;
};

export type SideProjectType = {
  title: string;
  description: string | string[];
  technologies: string;
  link: string;
};

export type PositionType = {
  title: string;
  date: string;
  projects: ProjectType[];
};

export type StepsType = {
  company: string;
  link: string;
  description?: string;
  positions: PositionType[];
}[];

export type CertificateType = {
  title: string;
  description: string;
  date: string;
};
