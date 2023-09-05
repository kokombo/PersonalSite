import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { projectType } from "../types/types";
import { Link } from "react-router-dom";

const Project = ({ title, description, image }: projectType) => {
  return (
    <article className="border-[1px] border-gray flex flex-col items-start gap-6 pt-24 pb-8 px-4 rounded-sm text-gray dark:bg-grey md:hover:translate-y-2 ">
      <div className="h-[150px] w-full">
        <img src={image} className="h-full w-full object-contain" />
      </div>

      <h2 className="text-lg">{title} </h2>
      <p className="text-sm">{description}</p>
      <Link to="" className="flex items-center gap-2 hover:text-secondary">
        <p className="text-sm ">View Project</p>
        <HiOutlineArrowNarrowRight />
      </Link>
    </article>
  );
};

export default Project;
