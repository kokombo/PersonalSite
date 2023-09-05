import { Header, Projects, Languages, Contact } from "../containers";

const Home = () => {
  return (
    <main className="bg-black  h-full w-full ">
      <div className="dot-background">
        <Header />
        <Languages />
        <Projects />
        <Contact />
      </div>
    </main>
  );
};

export default Home;
