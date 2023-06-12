import { a, useTransition } from "@react-spring/web";
import * as React from "react";
import { useRef, type ReactNode } from "react";
import { useLocation, useOutlet } from "react-router-dom";

export const WelcomeLayout: React.FC = () => {
  const map = useRef<Record<string, ReactNode>>({});
  const location = useLocation();
  const outlet = useOutlet();
  map.current[location.pathname] = outlet;
  const transitions = useTransition(location.pathname, {
    from: {
      transform:
        location.pathname === "/welcome/1"
          ? "translateX(0%)"
          : "translateX(100%)"
    },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(-100%)" },
    config: {
      duration: 3000
    }
  });
  return transitions((styles, pathname) => (
    <a.div style={styles} key={pathname}>
      <div>{map.current[pathname]}</div>
    </a.div>
  ));
};
