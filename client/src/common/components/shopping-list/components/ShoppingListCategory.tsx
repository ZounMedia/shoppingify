import { FC } from "react";
import ShoppingListItem from "./ShoppingListItem";
import styles from "@styles/ShoppingListCategory.module.scss";

interface Item {
  name: string;
  category: string;
  quantity: number;
}

interface Props {
  category: string;
  items: Item[];
}

const ShoppingListCategory: FC<Props> = ({ category, items }) => {
  return (
    <div className={styles.container}>
      <div className={styles.category}>{category}</div>
      <div className={styles.items}>
        {items
          .filter((item: Item) => item.category === category)
          .map((item: Item, idx) => (
            <ShoppingListItem
              key={idx}
              name={item.name}
              quantity={item.quantity}
            />
          ))}
      </div>
    </div>
  );
};

export default ShoppingListCategory;

{
  /* <ShoppingListItem name="Squash" quantity={5} />
        <ShoppingListItem name="Avocado" quantity={3} />
        <ShoppingListItem name="Pre-cooked corn 450g" quantity={1} />
        <ShoppingListItem name="Avocado" quantity={1} /> */
}
