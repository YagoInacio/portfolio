export interface Technology {
  id: string;
  name: string;
  src: string;
}

export interface Experience {
  id: string;
  position: string;
  company: string;
  logo: string;
  period: {
    start: string;
    end: string;
  };
  summary: string[];
  techs: Technology[];
}

export interface Project {
  id: string;
  title: string;
  description: string[];
  techs: Technology[];
}
