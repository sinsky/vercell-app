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
      header={<Header />}
    >
      <div className="w-full h-full">{children}</div>
    </AppShell>
  )
}

export default Layout;
