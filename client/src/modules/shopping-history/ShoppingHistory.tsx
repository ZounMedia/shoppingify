import { FC } from "react";
import ShoppingHistoryList from "./components/ShoppingHistoryList";
import { items } from "./data";
import styles from "@styles/ShoppingHistory.module.scss";

const ShoppingHistory: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Shopping history</div>
      <ShoppingHistoryList date="August 2020" items={items} />
      <ShoppingHistoryList date="July 2020" items={items} />
    </div>
  );
};

export default ShoppingHistory;
