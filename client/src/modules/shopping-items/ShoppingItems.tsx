import CategoryList from "./components/CategoryList";
import { FC } from "react";
import { shoppingItems } from "./data";
import styles from "@styles/ShoppingItems.module.scss";

const ShoppingItems: FC = () => {
  const categories = ["Fruits and Vegetables", "Meat and Fish", "Beverages"];

  return (
    <div className={styles.container}>
      {categories.map((category: string, idx: number) => (
        <CategoryList key={idx} category={category} items={shoppingItems} />
      ))}
    </div>
  );
};

export default ShoppingItems;
