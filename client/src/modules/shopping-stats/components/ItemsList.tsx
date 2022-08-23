import { topCategories, topItems } from "../data";

import { FC } from "react";
import ItemPercentage from "./ItemPercentage";
import styles from "@styles/ItemsList.module.scss";

interface Item {
  name: string;
  percent: number;
}

interface Props {
  items: Item[];
  listType?: string;
}

const ItemsList: FC<Props> = ({ items, listType }) => {
  return (
    <div className={styles.container}>
      <div className={styles.items}>
        {items &&
          items.map((item: Item) => (
            <div className={styles.item}>
              <div className={styles.itemDetails}>
                <span className={styles.name}>{item.name}</span>{" "}
                <span className={styles.percent}>{item.percent}%</span>
              </div>
              <ItemPercentage
                percent={item.percent}
                color={listType === "category" ? "#56CCF2" : ""}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ItemsList;
