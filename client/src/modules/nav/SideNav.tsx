import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { ImList2, ImStatsBars } from "react-icons/im";
import { NavTabs, handleNavTab } from "./navSlice";

import { FC } from "react";
import { FaHistory } from "react-icons/fa";
import styles from "@styles/SideNav.module.scss";
import { useAppDispatch } from "@app/hooks";

const SideNav: FC = () => {
  const dispatch = useAppDispatch();
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <AiFillHeart color="#F9A109" />
      </div>
      <div className={styles.navItems}>
        <ImList2
          onClick={() => dispatch(handleNavTab(NavTabs.shoppingList))}
          color="#454545"
          size={20}
        />

        <FaHistory
          onClick={() => dispatch(handleNavTab(NavTabs.shoppingHistory))}
          color="#454545"
          size={20}
        />

        <ImStatsBars
          onClick={() => dispatch(handleNavTab(NavTabs.shoppingStats))}
          color="#454545"
          size={20}
        />
      </div>
      <div className={styles.cart}>
        <AiOutlineShoppingCart color="white" size={20} />
        <div className={styles.quantity}>5</div>
      </div>
    </div>
  );
};

export default SideNav;
