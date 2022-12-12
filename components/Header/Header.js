import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setIsShowMenu,
  setIsShowSearch,
} from "../../redux/header/header.actions";

import styles from "./Header.module.scss";
import SubMenu from "./SubMenu/SubMenu";

const mapState = (state) => ({
  auth: state.auth.auth,
  header: state.header,
});



export default function Header() {
  const { auth, header } = useSelector(mapState);
  const [isShow, setIsShow] = useState(true);
  const { is_show_menu, is_show_search } = header;
  const [y, setY] = useState(0);
  const dispatch = useDispatch();
  const [isTransparentBG, setIsTransparentBG] = useState(true);

  //annimate show menu
  const [moveUpMenu, setMoveUpMenu] = useState(false);

  /**
   *  Scroll Listener
   */
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (y - 300 > window.scrollY || y <= 0) {
      setIsShow(true);
      setY(window.scrollY);
    } else if (y + 100 < window.scrollY) {
      if (!is_show_menu && !is_show_search) {
        setIsShow(false);
      }
      setY(window.scrollY);
    }

    if(window.scrollY > 0){
      setIsTransparentBG(false)
    }else{
      setIsTransparentBG(true)
    }
  };

  useEffect(() => {
    setY(window.scrollY);

    window.addEventListener("scroll", (e) => handleNavigation(e));
    return window.removeEventListener("scroll", (e) => handleNavigation(e));
  }, [y]);

  /**
   * Handle clicks icon
   */

  const handleClickMenu = (e) => {
    e.preventDefault();
    if (is_show_menu) {
      closeMenu();
    } else {
      openMenu();
    }
  };
  /**
   * Annimate menu show
   */
  const closeMenu = () => {
    setMoveUpMenu(true);
    setTimeout(() => {
      dispatch(setIsShowMenu(false));
    }, 600);
  };
  const openMenu = () => {
    setMoveUpMenu(true);
    dispatch(setIsShowMenu(true));
    setTimeout(() => {
      setMoveUpMenu(false);
    }, 100);
  };

  return (
    <div
      className={[styles.global_container, isShow ? styles.isShow : " ", isTransparentBG ? styles.transparent_bg : styles.orange_bg].join(
        " "
      )}
    >
      <div className={styles.global_content}>
        <div className={styles.logo_wrapper}>
        <img className={styles.logo} src='/logo-white.svg'
          alt= {'logo icon'}
        />
        </div>
        
        <div className={styles.subMenu_wrapper}>
          <SubMenu />
        </div>
      </div>
    </div>
  );
}
