import { Header, Projects } from "../containers";

const Home = () => {
  return (
    <main className="dark:bg-black bg-white h-full w-full px-[6.94%] ">
      <div className="dot-background flex flex-col ">
        <Header />
        <Projects />
      </div>
    </main>
  );
};

export default Home;
