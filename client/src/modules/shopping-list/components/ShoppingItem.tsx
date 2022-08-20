import { FC } from "react";
import styles from "@styles/ShoppingItem.module.scss";

interface Props {
  name: string;
}

const ShoppingItem: FC<Props> = ({ name }) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.plus}>+</div>
    </div>
  );
};

export default ShoppingItem;
