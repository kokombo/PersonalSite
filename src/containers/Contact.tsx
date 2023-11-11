import { SendAMessageButton } from "../components";

const Contact = () => {
  return (
    <section className="contact">
      <h2 className="text-4xl text-gray font-NeutonBold ">
        Say Hello, Anytime!{" "}
      </h2>

      <div className="flex_center gap-8  max-w-5xl font-NeutonRegular ">
        <p className="md:text-xl text-lg">
          I am happy to connect with you to discuss building amazing solutions
          together. I enjoy collaborating with other professionals to deliver
          real-world products. <br /> I am open to startup discussions - it
          excites me a lot. <br /> Well, we can also talk about football, I have
          some spare time for that, haha!
        </p>

        <SendAMessageButton label="Send a message now" />
      </div>
    </section>
  );
};

export default Contact;
