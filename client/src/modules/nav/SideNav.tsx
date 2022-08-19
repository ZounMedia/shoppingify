import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { ImList2, ImStatsBars } from "react-icons/im";

import { FaHistory } from "react-icons/fa";
import styles from "@styles/SideNav.module.scss";

const SideNav = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <AiFillHeart color="#F9A109" />
      </div>
      <div className={styles.navItems}>
        <div>
          <ImList2 color="#454545" size={20} />
        </div>
        <div>
          <FaHistory color="#454545" size={20} />
        </div>
        <div>
          <ImStatsBars color="#454545" size={20} />
        </div>
      </div>
      <div className={styles.cart}>
        <AiOutlineShoppingCart color="white" size={20} />
        <div className={styles.quantity}>5</div>
      </div>
    </div>
  );
};

export default SideNav;
