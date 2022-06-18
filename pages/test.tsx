import type { NextPage } from 'next'
import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@mantine/core';

const Im: NextPage = () => {
  return (
    <>
      <Head>
        <title>test page</title>
      </Head>
      <div>
        <h1>Hello, Test page.</h1>
        <div>
          <Link href="/">
            <Button>return top</Button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Im;
