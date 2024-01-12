import { Project } from "../components";
import { projectType } from "../types/types";
import { useState } from "react";
import { projectData } from "../constant/data";
import { Link } from "react-router-dom";

const Projects = () => {
  const [data] = useState<projectType[]>(projectData);

  return (
    <section className="projects">
      <h2 className="text-gray text-4xl font-NeutonBold">
        A Few Side Projects
      </h2>

      <div className="projects_wrapper">
        {data.map((item) => (
          <Project key={item.id} {...item} />
        ))}
      </div>

      <p className=" text-gray md:text-xl text-lg font-NeutonRegular text-center">
        Want to see some more? Let's hop on a call.
        <br />
        <Link
          to="mailto:samuelibrahim3029@gmail.com"
          className=" rounded-sm underline"
        >
          SEND AN EMAIL NOW
        </Link>{" "}
        to schedule.
      </p>
    </section>
  );
};

export default Projects;
