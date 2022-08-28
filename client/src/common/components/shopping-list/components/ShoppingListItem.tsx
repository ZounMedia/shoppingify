import { FC } from "react";
import styles from "@styles/ShoppingListItem.module.scss";

interface Props {
  name: string;
  quantity: number;
}

const ShoppingListItem: FC<Props> = ({ name, quantity }) => {
  return (
    <div className={styles.container}>
      <div className={styles.name}>{name}</div>
      <div className={styles.quantity}>{quantity} pcs</div>
    </div>
  );
};

export default ShoppingListItem;
