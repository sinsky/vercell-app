import { Navbar } from "@mantine/core";
import { useLocalStorage } from '@mantine/hooks';
import type { NextPage } from "next";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ImHome, ImPencil, ImCalendar, ImCog, ImUser, ImBrightnessContrast, ImTab } from "react-icons/im";

const NavItem: NextPage = () => {
  const [theme, setTheme] = useLocalStorage({ key: "theme", defaultValue: "light" });
  const didLogRef = useRef(false);
  useEffect(() => {
    if (!didLogRef.current) {
      didLogRef.current = true;
      if (theme === "dark") document.documentElement.classList.add('dark')
    }
  }, []);
  const toggleTheme = () => {
    setTheme((current) => {
      if (current === "dark") {
        document.documentElement.classList.remove('dark');
        return "light"
      } else {
        document.documentElement.classList.add('dark');
        return "dark"
      }
    });
  };
  const [openNav, setOpenNav] = useState(true);

  return (
    <Navbar p="xs" classNames={{ root: "text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 " + (openNav ? "w-[300px]" : "w-[81px]") }}>
      <Navbar.Section className="border-b-2">
        <div className="px-2 py-4 h-[60px] flex items-center cursor-default">
          <span className="ml-2 mr-4"><ImUser size={24} /></span>
          <span className={"capitalize text-xl text-left " + (!openNav && "hidden")}>User name</span>
        </div>
      </Navbar.Section>
      <Navbar.Section grow>
        <Link href="/">
          <a className="px-2 py-4 h-[60px] flex items-center cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 dark:hover:text-500">
            <span className="ml-2 mr-4">
              <ImHome size={24} />
            </span>
            <span className={"capitalize text-xl text-left " + (!openNav && "hidden")}>Home</span>
          </a>
        </Link>
        <Link href="/test">
          <a className="px-2 py-4 h-[60px] flex items-center cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 dark:hover:text-500">
            <span className="ml-2 mr-4">
              <ImPencil size={24} />
            </span>
            <span className={"capitalize text-xl text-left " + (!openNav && "hidden")}>Test</span>
          </a>
        </Link>
        <Link href="/calendar">
          <a className="px-2 py-4 h-[60px] flex items-center cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 dark:hover:text-500">
            <span className="ml-2 mr-4">
              <ImCalendar size={24} />
            </span>
            <span className={"capitalize text-xl text-left " + (!openNav && "hidden")}>Calendar</span>
          </a>
        </Link>
      </Navbar.Section>
      <Navbar.Section className="border-t-2">
        <Link href="/settings">
          <div className="px-2 py-4 h-[60px] flex items-center cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 dark:hover:text-500">
            <span className="ml-2 mr-4">
              <ImCog size={24} />
            </span>
            <span className={"capitalize text-xl text-left " + (!openNav && "hidden")}>Setting</span>
          </div>
        </Link>
        <button className="px-2 py-4 h-[60px] w-full flex items-center cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 dark:hover:text-500" onClick={toggleTheme}>
          <span className="ml-2 mr-4">
            <ImBrightnessContrast size={24} />
          </span>
          <span className={"capitalize text-xl text-left " + (!openNav && "hidden")}>Toggle {theme} theme</span>
        </button>
        <button className="px-2 py-4 h-[60px] w-full flex items-center cursor-pointer hover:bg-slate-200 dark:hover:bg-slate-700 dark:hover:text-500" onClick={() => setOpenNav(!openNav)}>
          <span className="ml-2 mr-4">
            <ImTab size={24} />
          </span>
          <span className={"capitalize text-xl text-left " + (!openNav && "hidden")}>Toggle Nav</span>
        </button>
      </Navbar.Section>
    </Navbar>
  );
};

export default NavItem;
