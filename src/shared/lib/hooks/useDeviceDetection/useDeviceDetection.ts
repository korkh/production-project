import { useState, useEffect } from "react";

export function useDeviceDetection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () =>
      setIsMobile(window.matchMedia("(pointer:coarse)").matches);

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize); // удаляем обработчик
  }, []);

  return isMobile;
}
