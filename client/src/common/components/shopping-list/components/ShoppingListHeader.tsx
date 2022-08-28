import { FC, useState } from "react";

import { FaWineBottle } from "react-icons/fa";
import { MdModeEditOutline } from "react-icons/md";
import { RiCheckFill } from "react-icons/ri";
import styles from "@styles/ShoppingListHeader.module.scss";

const ShoppingListHeader: FC = () => {
  const [editTitle, setEditTitle] = useState(false);
  const [title, setTitle] = useState("Shopping list");
  return (
    <div className={styles.container}>
      <div className={styles.addItem}>
        <div className={styles.headerIcon}>
          <FaWineBottle size={95} />
        </div>
        <div className={styles.action}>
          <span>Didn't find what you need?</span>
          <button>Add item</button>
        </div>
      </div>
      <div className={styles.itemTitle}>
        <input
          style={{ backgroundColor: `${editTitle ? "white" : "transparent"}` }}
          type="text"
          value={title}
          required
          readOnly={!editTitle}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <div className={styles.edit} onClick={() => setEditTitle(!editTitle)}>
          {editTitle ? (
            <RiCheckFill size={25} color="#f9a109" />
          ) : (
            <MdModeEditOutline size={20} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingListHeader;
