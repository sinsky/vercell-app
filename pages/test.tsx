import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { Button } from "@mantine/core";

const Im: NextPage = () => {
  return (
    <>
      <Head>
        <title>test page</title>
      </Head>
      <div>
        <h1>Hello, Test page.</h1>
        <h3>Test <code className="text-pink-600">tailwindcss</code>.</h3>
        <div>
          <Link href="/">
            <Button variant={"outline"}>return top</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Im;
