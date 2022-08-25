import { FC } from "react";
import styles from "@styles/ShoppingListFooter.module.scss";

const ShoppingListFooter: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.inputGroup}>
        <input type="text" placeholder="Enter a name" required></input>
        <button>Save</button>
      </div>
    </div>
  );
};

export default ShoppingListFooter;
