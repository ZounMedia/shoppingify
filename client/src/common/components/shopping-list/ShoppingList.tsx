import { FC } from "react";
import ShoppingListFooter from "./components/ShoppingListFooter";
import ShoppingListHeader from "./components/ShoppingListHeader";
import styles from "@styles/ShoppingList.module.scss";

const ShoppingList: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
        <ShoppingListHeader />
      </div>
      <ShoppingListFooter />
    </div>
  );
};

export default ShoppingList;
