import Head from "next/head";
import Main from "@components/main/Main";
import type { NextPage } from "next";
import ShoppingList from "@components/shopping-list/ShoppingList";
import ShoppingListDrawer from "@components/shopping-list/ShoppingListDrawer";
import SideNav from "../common/components/nav/SideNav";
import styles from "@styles/Home.module.scss";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Shoppingify</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <SideNav />
        <Main />
        <ShoppingListDrawer />
        <ShoppingList />
      </div>
    </>
  );
};

export default Home;
