import Head from "next/head";
import type { NextPage } from "next";
import SideNav from "../common/components/nav/SideNav";
import styles from "@styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SideNav />
      <main className=""></main>
    </div>
  );
};

export default Home;
