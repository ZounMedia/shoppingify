import { AiFillHeart, AiOutlineShoppingCart } from "react-icons/ai";
import { FC, useEffect, useState } from "react";
import { ImList2, ImStatsBars } from "react-icons/im";
import { NavTabs, handleDrawerOpen, handleNavTab } from "./navSlice";
import { useAppDispatch, useAppSelector } from "@app/hooks";

import { FaHistory } from "react-icons/fa";
import styles from "@styles/SideNav.module.scss";

const SideNav: FC = () => {
  const dispatch = useAppDispatch();
  const currentTab = useAppSelector((state) => state.nav.currentTab);
  const [screenWidth, setSreenWidth] = useState(0);
  const toggleDrawer = () => screenWidth < 912 && dispatch(handleDrawerOpen());

  useEffect(() => {
    const handleWindowResize = () => setSreenWidth(window.innerWidth);
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [screenWidth]);
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <AiFillHeart color="#F9A109" size={20} />
      </div>
      <div className={styles.navItems}>
        <div
          className={`${styles.navItem} ${
            currentTab === NavTabs.shoppingList ? styles.active : ""
          }`}
        >
          <ImList2
            onClick={() => dispatch(handleNavTab(NavTabs.shoppingList))}
            color="#454545"
            size={20}
          />
        </div>

        <div
          className={`${styles.navItem} ${
            currentTab === NavTabs.shoppingHistory ? styles.active : ""
          }`}
        >
          <FaHistory
            onClick={() => dispatch(handleNavTab(NavTabs.shoppingHistory))}
            color="#454545"
            size={20}
          />
        </div>

        <div
          className={`${styles.navItem} ${
            currentTab === NavTabs.shoppingStats ? styles.active : ""
          }`}
        >
          <ImStatsBars
            onClick={() => dispatch(handleNavTab(NavTabs.shoppingStats))}
            color="#454545"
            size={20}
          />
        </div>
      </div>
      <div className={styles.cart} onClick={toggleDrawer}>
        <AiOutlineShoppingCart color="white" size={20} />
        <div className={styles.quantity}>5</div>
      </div>
    </div>
  );
};

export default SideNav;
