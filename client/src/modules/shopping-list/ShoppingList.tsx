import CategoryList from "./components/CategoryList";
import { FC } from "react";
import { shoppingItems } from "./data";
import styles from "@styles/ShoppingList.module.scss";

const ShoppingList: FC = () => {
  const categories = ["Fruits and Vegitables", "Meat and Fish", "Beverages"];

  return (
    <div className={styles.container}>
      {categories.map((category: string, idx: number) => (
        <CategoryList key={idx} category={category} items={shoppingItems} />
      ))}
    </div>
  );
};

export default ShoppingList;

{
  /* <CategoryList category="Fruits and Vegitables" items={shoppingItems} />
      <CategoryList category="Meat and Fish" items={shoppingItems} />
      <CategoryList category="Beverages" items={shoppingItems} /> */
}
