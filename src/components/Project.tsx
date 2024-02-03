import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { projectType } from "../types/types";
import { Link } from "react-router-dom";

const Project = ({ title, description, image, slug, live }: projectType) => {
  return (
    <article className="project_card">
      <div className="h-[120px] w-full">
        <img
          src={image}
          className="h-full w-full object-contain"
          alt={title}
          loading="lazy"
        />
      </div>

      <h2 className="md:text-xl text-lg font-NeutonBold">{title} </h2>

      <p className="md:text-xl text-lg font-NeutonRegular">{description}</p>

      <div className="flex items-center justify-between w-full">
        <Link
          to={`/projects/${slug}`}
          onClick={() => {
            window.scrollTo(0, 0);
          }}
          rel="preload"
          className="flex items-center gap-2 hover:text-secondary"
        >
          <p className="md:text-lg text-base font-NeutonRegular ">
            View Details
          </p>

          <HiOutlineArrowNarrowRight />
        </Link>

        {live && (
          <Link
            to={live!}
            target="_blank"
            className=" hover:text-secondary flex items-center gap-2"
          >
            <p className="md:text-lg text-base font-NeutonRegular ">
              View Live
            </p>

            <HiOutlineArrowNarrowRight />
          </Link>
        )}
      </div>
    </article>
  );
};

export default Project;
