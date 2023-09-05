import { Project } from "../components";
import { projectType } from "../types/types";
import { useState } from "react";
import { images } from "../constant";

const projectData: projectType[] = [
  {
    image: images.bowal_home,
    title: "Bowal Mobile App",
    description:
      "A multi-vendor e-commerce platform, A multi-vendor e-commerce platform",
  },
  {
    image: images.bowal_home,
    title: "Bowal Mobile App",
    description:
      "A multi-vendor e-commerce platform, A multi-vendor e-commerce platform",
  },
  {
    image: images.bowal_home,
    title: "Bowal Mobile App",
    description:
      "A multi-vendor e-commerce platform, A multi-vendor e-commerce platform",
  },
  {
    image: images.bowal_home,
    title: "Bowal Mobile App",
    description:
      "A multi-vendor e-commerce platform, A multi-vendor e-commerce platform",
  },
  {
    image: images.bowal_home,
    title: "Bowal Mobile App",
    description:
      "A multi-vendor e-commerce platform, A multi-vendor e-commerce platform",
  },
];

const Projects = () => {
  const [data] = useState<projectType[]>(projectData);
  return (
    <section className="flex flex-col items-center gap-10 md:gap-20 py-8 md:py-12">
      <h2 className="text-gray text-4xl">Projects </h2>
      <div className="grid gap-6 place-items-center xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 lg:gap-x-[20px]  ">
        {data.map((item, index) => (
          <Project key={index} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
