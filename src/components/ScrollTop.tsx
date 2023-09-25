import { FaArrowUp } from "react-icons/fa";

import useScrollHeight from "../utilities/useScrollHeight";

const ScrollTop = () => {
  const { scrollHeight } = useScrollHeight();

  let content;

  if (scrollHeight > 1800) {
    content = (
      <div className="flex items-center justify-center fixed z-[100] h-8 w-8 rounded-full bg-purple-500 md:right-24 md:bottom-40 right-10 bottom-28 ">
        <button
          className="text-white"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <FaArrowUp />
        </button>
      </div>
    );
  }

  return <>{content}</>;
};

export default ScrollTop;
