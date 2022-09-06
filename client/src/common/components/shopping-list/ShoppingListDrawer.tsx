//import styles 👇
import "react-modern-drawer/dist/index.css";

import { useAppDispatch, useAppSelector } from "@app/hooks";

// import component 👇
import Drawer from "react-modern-drawer";
import { FC } from "react";
import ShoppingList from "./ShoppingList";
import { handleDrawerOpen } from "@components/nav/navSlice";
import styles from "@styles/ShoppingListDrawer.module.scss";

const ShoppingListDrawer: FC = () => {
  const dispatch = useAppDispatch();

  const drawerOpen = useAppSelector((state) => state.nav.drawerOpen);

  const toggleDrawer = () => {
    dispatch(handleDrawerOpen());
  };

  return (
    <Drawer
      open={drawerOpen}
      onClose={toggleDrawer}
      direction="right"
      customIdSuffix="shopping-list-drawer"
    >
      <div className={styles.container}>
        <ShoppingList />
      </div>
    </Drawer>
  );
};

export default ShoppingListDrawer;
