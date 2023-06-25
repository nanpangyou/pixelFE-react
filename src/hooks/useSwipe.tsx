// const { direction }  =  useSwipe(DIV)

import { type RefObject, useEffect, useState } from "react";

export const useSwipe = (elRef: RefObject<HTMLDivElement>) => {
  const [direction, setDirection] = useState<"" | "left" | "right">("");
  const onTouchstart = (e: TouchEvent) => {
    console.log("touchstart");
  };
  const onTouchmove = (e: TouchEvent) => {
    console.log("touchmove");
  };
  const onTouchend = (e: TouchEvent) => {
    console.log("touchend");
  };
  useEffect(() => {
    if (!elRef.current) return;
    elRef.current.addEventListener("touchstart", onTouchstart);
    elRef.current.addEventListener("touchmove", onTouchmove);
    elRef.current.addEventListener("touchend", onTouchend);
    return () => {
      if (!elRef.current) return;
      elRef.current.removeEventListener("touchstart", (e) => {
        console.log("touchstartend", e);
      });
      elRef.current.removeEventListener("touchmove", (e) => {
        console.log("touchmoveend", e);
      });
      elRef.current.removeEventListener("touchend", (e) => {
        console.log("touchendend", e);
      });
    };
  }, []);
  return { direction };
};
