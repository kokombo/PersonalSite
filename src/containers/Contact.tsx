import { Link } from "react-router-dom";
import { MdMarkEmailRead } from "react-icons/md";

const Contact = () => {
  return (
    <section className="md:py-20 py-12 flex flex-col items-center md:gap-20 gap-10 text-gray">
      <h2 className="text-4xl text-gray font-NeutonBold ">
        Say Hello, Anytime!{" "}
      </h2>
      <div className="flex flex-col items-center gap-8 text-center max-w-5xl font-NeutonRegular ">
        <p className="md:text-xl text-lg">
          I am happy to connect with you to discuss building amazing solutions
          together. I enjoy collaborating with other professionals to deliver
          real-world products. <br /> I am open to startup discussions - it
          excites me a lot. <br /> Well, we can also talk about football, I have
          some spare time for that, haha!
        </p>

        <button className="flex items-center border-[1px] border-gray bg-grey py-4 px-10 gap-2 rounded-sm hover:scale-105 md:text-xl text-lg font-NeutonRegular ">
          <Link
            to="mailto:samuelibrahim3029@gmail.com"
            className=" rounded-sm "
            aria-label="send me a message now"
          >
            Send a message now
          </Link>
          <MdMarkEmailRead />
        </button>
      </div>
    </section>
  );
};

export default Contact;
