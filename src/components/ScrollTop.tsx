import { FaArrowUp } from "react-icons/fa";

import useScrollHeight from "../utilities/useScrollHeight";

const ScrollTop = () => {
  const { scrollHeight } = useScrollHeight();

  let content;

  if (scrollHeight > 2500) {
    content = (
      <button
        className="text-white flex items-center justify-center fixed z-[100] h-8 w-8 rounded-full bg-purple-500 md:right-24 md:bottom-40 right-10 bottom-28 "
        onClick={() => {
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}
      >
        <FaArrowUp />
      </button>
    );
  }

  return <>{content}</>;
};

export default ScrollTop;
