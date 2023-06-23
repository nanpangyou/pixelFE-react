import { a, useTransition } from "@react-spring/web";
import * as React from "react";
import { useRef, type ReactNode, useState } from "react";
import { Link, useLocation, useOutlet } from "react-router-dom";
import logo from "../assets/icons/logo.svg";

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
    <div flex flex-col h-screen items-center bg-gradient="to-b from-[var(--welcome-background-color-top)] to-[var(--welcome-background-color-bottom)]">
      <header shrink-0 flex flex-col justify-center items-center>
        <img src={logo} alt="logo" w="8em" h="8em" />
        <h1 text-center w="5em" flex justify-around font-800 text-3xl underline="~ 4 solid $basic-font-color">
          <span>手</span>
          <span>帐</span>
        </h1>
      </header>
      <main grow-1 shrink-1 relative w="100%" flex justify-center>
        {transitions((styles, pathname) => (
          <a.div style={{ ...styles, ...extraStyle }} key={pathname} h="100%" w="90%">
            <div h="100%" flex justify-center items-center flex-col>
              <div w="90%" h="90%" my-4 bg-white>
                {map.current[pathname]}
              </div>
            </div>
          </a.div>
        ))}
      </main>
      <footer shrink-0 grid grid-cols-3 grid-rows-1 text-center w="100%" mb-4 text-2xl>
        <Link style={{ gridArea: "1 / 2 / 2 / 3" }} to={routeMap[location.pathname].nav}>
          {routeMap[location.pathname].text}
        </Link>
        {location.pathname !== "/welcome/4" ? (
          <Link style={{ gridArea: "1 / 3 / 2 / 4" }} to="/welcome/xxx">
            跳过
          </Link>
        ) : undefined}
      </footer>
    </div>
  );
};
