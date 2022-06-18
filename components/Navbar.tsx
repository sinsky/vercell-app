import { Navbar } from "@mantine/core";
import type { NextPage } from "next";
import Link from "next/link";
import { ImHome, ImPencil, ImCalendar, ImCog, ImUser } from "react-icons/im";

const NavItem: NextPage = () => {
  return (
    <Navbar width={{ base: 300 }} p="xs">
      <Navbar.Section grow>
        <Link href="/">
          <a className="px-2 py-4 flex items-center cursor-pointer hover:bg-slate-200">
            <span className="ml-2 mr-4">
              <ImHome size={24} />
            </span>
            <span className="capitalize text-xl">Home</span>
          </a>
        </Link>
        <Link href="/test">
          <a className="px-2 py-4 flex items-center cursor-pointer hover:bg-slate-200">
            <span className="ml-2 mr-4">
              <ImPencil size={24} />
            </span>
            <span className="capitalize text-xl">Test</span>
          </a>
        </Link>
        <Link href="/calendar">
          <a className="px-2 py-4 flex items-center cursor-pointer hover:bg-slate-200">
            <span className="ml-2 mr-4">
              <ImCalendar size={24} />
            </span>
            <span className="capitalize text-xl">Calendar</span>
          </a>
        </Link>
      </Navbar.Section>
      <Navbar.Section className="border-t-2">
        <Link href="/settings">
          <div className="px-2 py-4 flex items-center cursor-pointer hover:bg-slate-200">
            <span className="ml-2 mr-4">
              <ImCog size={24} />
            </span>
            <span className="capitalize text-xl">Setting</span>
          </div>
        </Link>
        <div className="px-2 py-4 flex items-center cursor-default">
          <span className="ml-2 mr-4">
            <ImUser size={24} />
          </span>
          <span className="capitalize text-xl">User Name</span>
        </div>
      </Navbar.Section>
    </Navbar>
  );
};

export default NavItem;
