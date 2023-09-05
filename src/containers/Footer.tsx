import { Copyright, Socials } from "../components";

const Footer = () => {
  return (
    <footer className="md:py-12 py-8 flex items-center justify-between w-full border-t-[1px] border-t-gray ">
      <Copyright />
      <Socials />
    </footer>
  );
};

export default Footer;
