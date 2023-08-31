import { Icons } from "../components";

const Home = () => {
  return (
    <main className="dark:bg-grey bg-white h-screen w-screen fixed opacity-80 flex justify-center ">
      <article className="dark:text-secondary text-black flex flex-col items-center gap-6">
        <h1 className="text-5xl font-NeutonBold  ">
          Samuel Ibrahim (Oluwanbowa){" "}
        </h1>
        <article className="flex flex-col items-center gap-4">
          <h2 className="text-3xl font-NeutonRegular dark:text-secondary text-black">
            Software Developer
          </h2>
          <Icons />
        </article>
      </article>
    </main>
  );
};

export default Home;
