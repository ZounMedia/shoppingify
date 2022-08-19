import { FC } from "react";
import { NavTabs } from "@modules/nav/navSlice";
import ShoppingHistory from "@modules/shopping-history/ShoppingHistory";
import ShoppingList from "@modules/shopping-list/ShoppingList";
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
        return <ShoppingList />;
    }
  };
  return <main className={styles.container}>{renderSection()}</main>;
};

export default Main;
