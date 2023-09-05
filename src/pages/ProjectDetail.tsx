import { Link } from "react-router-dom";
import { NavigationBar } from "../components";
import { Footer } from "../containers";
import { useParams } from "react-router-dom";
import { projectData } from "../constant/data";
import { projectType } from "../types/types";
import { useState } from "react";

const ProjectDetail = () => {
  const [data] = useState<projectType[]>(projectData);
  const { slug } = useParams();

  const currentProject = data.find((project) => project.slug === slug);

  return (
    <main className="bg-black  h-full w-full px-[6.94%]">
      <div className="dot-background flex flex-col items-center gap-20">
        <NavigationBar />
        <section className="w-full text-gray flex flex-col gap-20 ">
          <div className="flex flex-col justify-between text-center gap-12">
            <h2>{currentProject?.title} </h2>
            <div className="flex  items-center justify-between  ">
              <Link
                to=""
                className="hover:underline hover:text-secondary hover:scale-110 "
              >
                View Live
              </Link>
              <Link
                to=""
                className="hover:underline hover:text-secondary hover:scale-110 "
              >
                View GitHub
              </Link>
            </div>
          </div>

          <div>
            <p className="text-gray">Description</p>
            <div></div>
          </div>
        </section>
        <Footer />
      </div>
    </main>
  );
};

export default ProjectDetail;
