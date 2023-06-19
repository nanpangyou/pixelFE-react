import { a, useTransition } from "@react-spring/web";
import * as React from "react";
import { useRef, type ReactNode, useState } from "react";
import { Link, useLocation, useOutlet } from "react-router-dom";

const routeMap: Record<string, Record<string, string>> = {
  "/welcome/1": { nav: "/welcome/2", text: "下一页" },
  "/welcome/2": { nav: "/welcome/3", text: "下一页" },
  "/welcome/3": { nav: "/welcome/4", text: "下一页" },
  "/welcome/4": { nav: "/welcome/xxx", text: "开启手帐" },
};
export const WelcomeLayout: React.FC = () => {
  const [extraStyle, setExtraStyle] = useState({});
  const map = useRef<Record<string, ReactNode>>({});
  const location = useLocation();
  const outlet = useOutlet();
  map.current[location.pathname] = outlet;
  const transitions = useTransition(location.pathname, {
    from: {
      transform: location.pathname === "/welcome/1" ? "translateX(0%)" : "translateX(100%)",
    },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(-100%)" },
    config: {
      duration: 300,
    },
    onStart: () => {
      setExtraStyle({ position: "absolute" });
    },
    onRest: () => {
      setExtraStyle({ position: "relative" });
    },
  });
  return (
    <div flex flex-col h-screen items-center>
      <header shrink-0>手帐</header>
      <main grow-1 shrink-1 relative b-1 b-red b-solid w="100%" flex flex-col bg-gradient="to-b from-[var(--welcome-background-color-top)] to-[var(--welcome-background-color-bottom)]">
        {transitions((styles, pathname) => (
          <a.div style={{ ...styles, ...extraStyle }} key={pathname} w="100%" h="100%">
            <div h="100%" flex justify-center items-center flex-col>
              <div w="90%" grow-1 my-4 bg-white>
                {map.current[pathname]}
              </div>
            </div>
          </a.div>
        ))}
      </main>
      <footer shrink-0>
        <Link to={routeMap[location.pathname].nav}>{routeMap[location.pathname].text}</Link>
        {location.pathname !== "/welcome/4" ? <Link to="/welcome/xxx">跳过</Link> : undefined}
      </footer>
    </div>
  );
};
