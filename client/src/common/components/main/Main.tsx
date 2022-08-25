import { FC } from "react";
import { NavTabs } from "@components/nav/navSlice";
import ShoppingHistory from "@modules/shopping-history/ShoppingHistory";
import ShoppingItems from "@modules/shopping-items/ShoppingItems";
import ShoppingStats from "@modules/shopping-stats/ShoppingStats";
import styles from "@styles/Main.module.scss";
import { useAppSelector } from "@app/hooks";

const Main: FC = () => {
  const currentTab = useAppSelector((state) => state.nav.currentTab);

  const renderSection = () => {
    switch (currentTab) {
      case NavTabs.shoppingStats:
        return <ShoppingStats />;
      case NavTabs.shoppingHistory:
        return <ShoppingHistory />;
      default:
        return <ShoppingItems />;
    }
  };
  return <main className={styles.container}>{renderSection()}</main>;
};

export default Main;
