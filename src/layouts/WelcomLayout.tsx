import { a, useTransition } from "@react-spring/web";
import * as React from "react";
import { useRef, type ReactNode } from "react";
import { Link, useLocation, useOutlet } from "react-router-dom";

const routeMap: Record<string, Record<string, string>> = {
  "/welcome/1": { nav: "/welcome/2", text: "下一页" },
  "/welcome/2": { nav: "/welcome/3", text: "下一页" },
  "/welcome/3": { nav: "/welcome/4", text: "下一页" },
  "/welcome/4": { nav: "/welcome/xxx", text: "开启手帐" }
};
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
      duration: 300
    }
  });
  return (
    <>
      <header>手帐</header>
      {transitions((styles, pathname) => (
        <a.div style={styles} key={pathname}>
          <div>{map.current[pathname]}</div>
        </a.div>
      ))}
      <footer>
        <Link to={routeMap[location.pathname].nav}>
          {routeMap[location.pathname].text}
        </Link>
        {location.pathname !== "/welcome/4" ? (
          <Link to="/welcome/xxx">跳过</Link>
        ) : undefined}
      </footer>
    </>
  );
};
