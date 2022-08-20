import CategoryList from "./components/CategoryList";
import { FC } from "react";
import { shoppingItems } from "./data";
import styles from "@styles/ShoppingList.module.scss";

const ShoppingList: FC = () => {
  return (
    <div className={styles.container}>
      <CategoryList category="Fruits and Vegitables" items={shoppingItems} />
      <CategoryList category="Meat and Fish" items={shoppingItems} />
      <CategoryList category="Beverages" items={shoppingItems} />
    </div>
  );
};

export default ShoppingList;
