import { useState, useEffect } from "react";

const useScrollHeight = () => {
  const [scrollHeight, setScrollHeight] = useState<number>(window.scrollY);

  useEffect(() => {
    const handleScrollHeight = () => {
      setScrollHeight(window.scrollY);
    };
    window.addEventListener("scroll", handleScrollHeight);

    return () => {
      window.removeEventListener("scroll", handleScrollHeight);
    };
  }, []);

  return { scrollHeight };
};

export default useScrollHeight;
