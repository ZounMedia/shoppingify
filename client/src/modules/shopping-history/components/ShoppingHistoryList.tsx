import { FC } from "react";
import ShoppingHistoryItem from "./ShoppingHistoryItem";
import styles from "@styles/ShoppingHistoryList.module.scss";

interface ItemDetails {
  title: string;
  date: string;
  status: string;
}

interface Props {
  date: string;
  items: ItemDetails[];
}

const ShoppingHistoryList: FC<Props> = ({ date, items }) => {
  return (
    <div className={styles.container}>
      <div className={styles.date}>{date}</div>
      <div className={styles.items}>
        {items &&
          items.map((item: ItemDetails) => (
            <ShoppingHistoryItem
              title={item.title}
              date={item.date}
              status={item.status}
            />
          ))}
      </div>
    </div>
  );
};

export default ShoppingHistoryList;
