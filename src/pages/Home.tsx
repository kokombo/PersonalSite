import { Icons } from "../components";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <main className="dark:bg-black bg-white h-screen w-screen fixed  flex justify-center ">
      <div className="dark:text-secondary text-black flex flex-col items-center gap-6 mt-[200px]">
        <h1 className="text-5xl font-NeutonBold  ">
          Samuel Ibrahim (Oluwanbowa){" "}
        </h1>
        <article className="flex flex-col items-center gap-4">
          <h2 className="text-3xl font-NeutonRegular dark:text-secondary text-black">
            Software Developer
          </h2>
          <Icons />
        </article>

        <article className="mt-[50px]">
          <Link
            to=""
            className="border-2 border-background p-4 rounded-sm dark:text-secondary text-black"
          >
            Click Me to View Some Projects
          </Link>
        </article>
      </div>
    </main>
  );
};

export default Home;
