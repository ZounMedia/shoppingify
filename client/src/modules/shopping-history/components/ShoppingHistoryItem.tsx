import { FC } from "react";
import { IoIosArrowForward } from "react-icons/io";
import styles from "@styles/ShoppingHistoryItem.module.scss";

interface Props {
  title: string;
  date: string;
  status: string;
}

const ShoppingHistoryItem: FC<Props> = ({ title, date, status }) => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <div className={styles.details}>
        <div className={styles.date}>{date}</div>
        <div className={styles.status}>{status}</div>
        <div className={styles.action}>
          <IoIosArrowForward size={20} />
        </div>
      </div>
    </div>
  );
};

export default ShoppingHistoryItem;
