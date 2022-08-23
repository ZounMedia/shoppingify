import { topCategories, topItems } from "./data";

import { FC } from "react";
import ItemsList from "./components/ItemsList";
import styles from "@styles/ShoppingStats.module.scss";

const ShoppingStats: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.title}>Top Items</div>
        <ItemsList items={topItems} />
      </div>
      <div className={styles.section}>
        <div className={styles.title}>Top Categories</div>
        <ItemsList items={topCategories} listType="category" />
      </div>
      <div className={styles.section}>
        <div className={styles.title}>Monthly Summary</div>
      </div>
    </div>
  );
};

export default ShoppingStats;
