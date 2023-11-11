import { Icons, SendAMessageButton, VisitSubstack } from "../components";

const Header = () => {
  return (
    <header className="header">
      <div className="text-gray flex_center gap-4 ">
        <h1 className="text-xl md:text-2xl font-NeutonBold">Hi, I'm Samuel.</h1>

        <article className="flex_center gap-8">
          <h2 className="text-4xl md:text-6xl font-NeutonRegular max-w-[800px] ">
            Software Developer who enjoys building web and mobile applications.
          </h2>

          <p className="md:text-lg text-base font-NeutonRegular">
            I love shipping solutions and working on the business side of
            things!
          </p>

          <Icons />
        </article>

        <div className="mt-[30px] flex flex-col gap-6">
          <SendAMessageButton label="Send an email" />

          <VisitSubstack />
        </div>
      </div>
    </header>
  );
};

export default Header;
