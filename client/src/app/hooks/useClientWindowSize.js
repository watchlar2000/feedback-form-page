import { useEffect, useState } from "react";

export function useClientWindowSize() {
  const [clientWindowSize, setClientWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setClientWindowSize({
        width: document.body.clientWidth,
        height: document.body.clientHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return clientWindowSize;
}
