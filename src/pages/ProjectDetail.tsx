import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { projectData } from "../constant/data";
import { projectType } from "../types/types";
import { useState } from "react";

const ProjectDetail = () => {
  const [data] = useState<projectType[] | null>(projectData);
  const { slug } = useParams();

  const currentProject = data?.find((project) => project.slug === slug);

  const shots = currentProject?.images;
  const live = currentProject?.live;
  const github = currentProject?.github;

  return (
    <main className="bg-black h-full w-full py-20 ">
      <div className="dot-background ">
        <section className="w-full text-gray flex flex-col gap-12 pb-4">
          <div className="flex flex-col justify-between text-center gap-12">
            <h2 className="text-4xl font-NeutonBold">
              {currentProject?.title}{" "}
            </h2>
            <div className="flex  items-center  gap-12 ">
              <Link
                to={live!}
                target="_blank"
                className="hover:underline hover:text-secondary hover:scale-110 "
              >
                View Live
              </Link>
              <Link
                to={github!}
                target="_blank"
                className="hover:underline hover:text-secondary hover:scale-110 "
              >
                View GitHub
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start gap-6 text-gray">
            <article className="flex flex-col gap-4">
              <h3 className="text-3xl font-NeutonRegular">Description</h3>
              <p className=""> {currentProject?.description} </p>
            </article>
            <article className="flex flex-col gap-4">
              <h3 className="text-3xl font-NeutonRegular">Tools</h3>
              <p className=""> {currentProject?.tools} </p>
            </article>

            <div className="flex flex-col gap-6">
              <h3 className="text-3xl font-NeutonRegular">Shots</h3>
              <div className="grid gap-8 place-items-center xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 ">
                {shots?.map((item, index) => (
                  <div key={index} className="w-full h-full ">
                    <img src={item} className="w-full h-full object-contain " />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default ProjectDetail;
