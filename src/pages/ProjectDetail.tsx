import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { projectData } from "../constant/data";
import { projectType } from "../types/types";
import { useEffect, useState } from "react";
import { ScrollTop } from "../components";
import { ProgressBar } from "react-loader-spinner";

const ProjectDetail = () => {
  const [loadedImages, setLoadedImages] = useState<string[]>([]);

  const [data] = useState<projectType[] | null>(projectData);

  const { slug } = useParams();

  const currentProject = data?.find(
    (project) => project.slug === slug?.toString()
  );

  const shots = currentProject?.images;
  const live = currentProject?.live;
  const github = currentProject?.github;

  useEffect(() => {
    const loadShot = (path: string) => {
      const img = new Image();
      img.src = path;
      img.onload = () => {
        setLoadedImages((prev) => [...prev, path]);
      };
    };

    shots?.forEach((shot) => {
      loadShot(shot);
    });
  }, [shots]);

  return (
    <main className="bg-black w-full py-4">
      <div className="dot-background w-full text-gray flex flex-col gap-12 pb-4 ">
        <section className="flex flex-col justify-between text-start md:text-center gap-12 mt-12">
          <h2 className="text-4xl font-NeutonBold">{currentProject?.title} </h2>

          <div className="flex  items-center gap-12 text-lg md:text-xl font-NeutonRegular ">
            {live && (
              <Link
                to={live!}
                target="_blank"
                className="hover:underline hover:text-secondary hover:scale-110 "
              >
                View Live
              </Link>
            )}

            {github && (
              <Link
                to={github!}
                target="_blank"
                className="hover:underline hover:text-secondary hover:scale-110 "
              >
                View GitHub
              </Link>
            )}
          </div>
        </section>

        <section className="flex flex-col gap-6 text-gray">
          <article className="flex flex-col gap-4 font-NeutonRegular">
            <h3 className="text-3xl ">Description</h3>

            <p className="text-lg md:text-xl">{currentProject?.description}</p>
          </article>

          <article className="flex flex-col gap-4 font-NeutonRegular">
            <h3 className="text-3xl ">Stack</h3>

            <p className="text-lg md:text-xl"> {currentProject?.stack} </p>
          </article>

          <div className="flex flex-col gap-6">
            <h3 className="text-3xl font-NeutonRegular">Shots</h3>

            {shots && loadedImages.length < 3 ? (
              <div className="h-screen flex items-center justify-center">
                <p>Loading Shots...</p>
                <ProgressBar
                  visible={true}
                  barColor="#64ffda"
                  borderColor="#e6f1ff"
                  ariaLabel="progress bar loading"
                />
              </div>
            ) : (
              <div className="grid gap-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 ">
                {shots?.map((shot, index) => (
                  <div key={index} className="w-full h-full ">
                    <img
                      src={shot}
                      className="w-full h-full object-contain "
                      loading="lazy"
                      alt={`${currentProject?.title} image-${index + 1}`}
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </div>

      <ScrollTop />
    </main>
  );
};

export default ProjectDetail;
