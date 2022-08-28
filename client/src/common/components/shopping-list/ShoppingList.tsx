import { FC } from "react";
import ShoppingListCategory from "./components/ShoppingListCategory";
import ShoppingListFooter from "./components/ShoppingListFooter";
import ShoppingListHeader from "./components/ShoppingListHeader";
import { shoppingItems } from "./data";
import styles from "@styles/ShoppingList.module.scss";

const ShoppingList: FC = () => {
  return (
    <div className={styles.container}>
      <ShoppingListHeader />
      <div className={styles.itemsContainer}>
        <ShoppingListCategory
          category="Fruits and Vegetables"
          items={shoppingItems}
        />
        <ShoppingListCategory category="Meat and Fish" items={shoppingItems} />
        <ShoppingListCategory category="Beverages" items={shoppingItems} />
      </div>
      <ShoppingListFooter />
    </div>
  );
};

export default ShoppingList;
