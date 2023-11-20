import { ReactNode } from "react";

export interface projectType {
  id: string;
  image: string;
  title: string;
  description: string;
  slug: string;
  images: Array<string>;
  stack: string;
  live?: string;
  github?: string;
}

export interface IconsType {
  icon: ReactNode;
  url: string;
  name: string;
}

export interface SocialsType {
  id: string;
  url: string;
  label: string;
}
