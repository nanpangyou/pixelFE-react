import { a, useTransition } from "@react-spring/web";
import * as React from "react";
import type { ReactNode } from "react";
import { useLocation, useOutlet } from "react-router-dom";

export const WelcomeLayout: React.FC = () => {
  const map = React.useRef<Record<string, ReactNode>>({});
  const location = useLocation();
  const outlet = useOutlet();
  map.current[location.pathname] = outlet;
  const transitions = useTransition(location.pathname, {
    from: {
      transform:
        location.pathname === "/welcome/1"
          ? "translateX(0)"
          : "translateX(100%)"
    },
    enter: { transform: "translateX(0)" },
    leave: { transform: "translateX(-100%)" },
    config: {
      duration: 1000
    }
  });
  return (
    <div>
      {transitions((styles, item) => (
        <a.div style={styles}>{map.current[item] || outlet}</a.div>
      ))}
    </div>
  );
};
