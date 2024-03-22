import { Icons, SendAMessageButton, VisitSubstack } from "../components";
import { images } from "../constant";

const Header = () => {
  return (
    <header className="header">
      <div className="text-gray flex_center gap-8 ">
        <div className=" flex_center gap-8">
          <h1 className="text-2xl md:text-3xl font-NeutonBold">Hi, I'm Sam.</h1>

          <img
            src={images.sam}
            alt="samuel's picture"
            loading="eager"
            className="h-[250px] w-[250px] rounded-full object-cover brightness-60"
          />
        </div>

        <article className="flex_center gap-8">
          <h2 className="text-3xl md:text-5xl font-NeutonRegular max-w-[900px]">
            A Software developer & startup enthusiast who focuses on building
            delightful, user-friendly, and optimized web experiences.
          </h2>

          <p className="md:text-xl text-lg font-NeutonRegular">
            Thrives in a fast-paced environment and is eager to contribute to an
            ambitious team. Let's connect to discuss how my passion and skills
            align with your goals.
          </p>
          <Icons />
        </article>

        <div className="mt-5 flex flex-col gap-6">
          <SendAMessageButton label="Send a quick email" />

          <VisitSubstack />
        </div>
      </div>
    </header>
  );
};

export default Header;
