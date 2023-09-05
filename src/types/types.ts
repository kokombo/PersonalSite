import { ReactNode } from "react";

export interface projectType {
  id: number;
  image?: string;
  title: string;
  description: string;
  slug: string;
}

export interface IconsType {
  icon: ReactNode;
  url: string;
  name: string;
}
