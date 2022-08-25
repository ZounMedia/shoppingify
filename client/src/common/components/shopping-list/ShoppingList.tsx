import { FC } from "react";
import ShoppingListFooter from "./components/ShoppingListFooter";
import styles from "@styles/ShoppingList.module.scss";
const ShoppingList: FC = () => {
  return (
    <div className={styles.container}>
      ShoppingList
      <ShoppingListFooter />
    </div>
  );
};

export default ShoppingList;
