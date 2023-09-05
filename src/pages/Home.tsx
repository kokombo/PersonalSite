import { Header, Projects, Languages, Contact, Footer } from "../containers";

const Home = () => {
  return (
    <main className="dark:bg-black bg-white h-full w-full px-[6.94%]">
      <div className="dot-background flex flex-col items-center gap-20">
        <Header />
        <Languages />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Home;
