import { ArrowUpIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";

function Scrollup() {
  const [isTop, setIsTop] = useState(true);

  useEffect(() => {
    function showScrollUp() {
      if (window.scrollY !== 0) setIsTop(false);
      else setIsTop(true);
    }
    window.addEventListener("scroll",showScrollUp);
    return () => window.removeEventListener('scroll',showScrollUp);
  });

  function scrollUp() {
    window.scrollTo(
      document.body.scrollHeight || document.documentElement.scrollHeight,
      0
    );
  }

  return (
    !isTop ? (
      <button
        className="z-50 fixed bottom-4 right-4 px-2 py-2 shadow-lg rounded-full bg-primary"
        onClick={scrollUp}
      >
        <ArrowUpIcon className="w-4 h-4 text-white" />
      </button>
    ): <></>
  );
}

export default Scrollup;
