import { Icons } from "../components";

const Home = () => {
  return (
    <main className="dark:bg-grey bg-white h-screen w-screen fixed opacity-80 flex items-center justify-center ">
      <article className="text-white flex flex-col items-center gap-5">
        <h1 className="text-4xl">Samuel Ibrahim (Oluwanbowa) </h1>
        <article className="flex flex-col items-center gap-2">
          <h2 className="text-xl">Software Developer</h2>
          <Icons />
        </article>
      </article>
    </main>
  );
};

export default Home;
