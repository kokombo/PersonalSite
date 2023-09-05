import { Project } from "../components";
import { projectType } from "../types/types";
import { useState } from "react";
import { projectData } from "../constant/data";

const Projects = () => {
  const [data] = useState<projectType[]>(projectData);
  return (
    <section className="flex flex-col items-center gap-10 md:gap-20 py-8 md:py-12">
      <h2 className="text-gray text-4xl font-NeutonBold">Projects </h2>
      <div className="grid gap-8 place-items-center xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 lg:gap-x-5  ">
        {data.map((item) => (
          <Project key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
