import { FaArrowUp } from "react-icons/fa";
import useScrollHeight from "../utilities/useScrollHeight";

const ScrollTop = () => {
  const { scrollHeight } = useScrollHeight();

  return (
    <>
      {scrollHeight > 2500 && (
        <button
          className="scroll_top_button"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
        >
          <FaArrowUp />
        </button>
      )}
    </>
  );
};

export default ScrollTop;
