"use client";

import { useState, useEffect } from "react";

export const useWindowWidth = () => {
  const [width, setWidth] = useState(0); // Default to 0 or some appropriate value

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleResize);
      handleResize(); // Set initial width

      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return width;
};
