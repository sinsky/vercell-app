import type { NextPage } from "next";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import { ImQrcode, ImPriceTags, ImDatabase, ImBubbles2, ImUsers } from "react-icons/im";
import { JSXElementConstructor } from "react";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <h2 className="font-bold text-4xl mb-4">Home</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <Card title="QR 読み取り数" value={32} unit={"人/day"} icon={<ImQrcode size={40} />} />
        <Card title="サイトのタグ数" value={10} unit={"個"} icon={<ImPriceTags size={40} />} />
        <Card title="DB容量" value={3.4} unit={"GB"} icon={<ImDatabase size={40} />} />
        <Card title="ユーザー数" value={18} unit={"人"} icon={<ImUsers size={40} />} />
        <Card title="コメント数" value={10} unit={"コメ"} icon={<ImBubbles2 size={40} />} />
      </div>
    </>
  );
};

type CardProps = {
  title: string;
  value: number;
  unit?: string;
  icon: any | string | JSXElementConstructor<any>;
}

const Card = ({ title, value, unit, icon }: CardProps) => {
  return (
    <div className="border rounded-md m-2 p-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="w-10 h-10 my-2 ml-4 mr-8">{icon}</div>
        <div className="flex flex-col grow text-center">
          <h3 className="capitalize text-xl font-bold">{title}</h3>
          <div>
            <span className="font-bold text-lg">{value}</span>
            <span className="text-sm">{unit ?? ""}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

export const getServerSideProps = async (context: GetServerSideProps) => {
  return {
    props: {},
  };
};
