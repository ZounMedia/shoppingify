import { FC } from "react";
import ShoppingItem from "./ShoppingItem";
import styles from "@styles/CategoryList.module.scss";

interface Item {
  category: string;
  name: string;
}

interface Props {
  category: string;
  items: Item[];
}

const CategoryList: FC<Props> = ({ category, items }) => {
  return (
    <div className={styles.container}>
      <div className={styles.category}>{category}</div>
      {items &&
        items
          .filter((item: Item) => item.category === category)
          .map((item: Item, idx: number) => (
            <ShoppingItem key={idx} name={item.name} />
          ))}
    </div>
  );
};

export default CategoryList;
