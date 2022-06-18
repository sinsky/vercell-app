import Navbar from "./Navbar";
import Header from "./Header";
import { ReactElement } from "react";
import { AppShell } from "@mantine/core";

type ChildProps = {
  children: ReactElement;
};

const Layout = ({ children }: ChildProps) => {
  return (
    <AppShell
      padding="md"
      navbar={<Navbar />}
      // header={<Header />}
      classNames={{
        root: "text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900",
      }}
    >
      <div className="w-full h-full">{children}</div>
    </AppShell>
  )
}

export default Layout;
