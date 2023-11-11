import { Project } from "../components";
import { projectType } from "../types/types";
import { useState } from "react";
import { projectData } from "../constant/data";

const Projects = () => {
  const [data] = useState<projectType[]>(projectData);

  return (
    <section className="projects">
      <h2 className="text-gray text-4xl font-NeutonBold">Projects </h2>

      <div className="projects_wrapper">
        {data.map((item) => (
          <Project key={item.id} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
