// const { direction }  =  useSwipe(DIV)

import { type RefObject, useEffect, useState, useRef } from "react";

type Config = {
  onTouchStart?: (e: TouchEvent) => void;
  onTouchMove?: (e: TouchEvent) => void;
  onTouchEnd?: (e: TouchEvent) => void;
};

export const useSwipe = (elRef: RefObject<HTMLDivElement>, config?: Config) => {
  const [direction, setDirection] = useState<"" | "left" | "right">("");
  const x = useRef(0);
  const onTouchstart = (e: TouchEvent) => {
    config?.onTouchStart?.(e);
    // console.log("touchstart");
    x.current = e.touches[0].clientX;
  };
  const onTouchmove = (e: TouchEvent) => {
    // console.log("touchmove");
    config?.onTouchMove?.(e);
    const newX = e.touches[0].clientX;
    const xx = x.current - newX;
    if (Math.abs(xx) < 3) {
      setDirection("");
    } else if (xx > 3) {
      setDirection("left");
    } else {
      setDirection("right");
    }
  };
  const onTouchend = (e: TouchEvent) => {
    config?.onTouchEnd?.(e);
    // console.log("touchend");
    setDirection("");
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
