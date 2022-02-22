import React from "react";
import styles from "./HeaderContainer.module.scss";
import search from "../../assets/icons/search_icon.svg";

export const HeaderContainer = (): React.ReactElement => {
  return (
    <>
      <div className={styles.headerWrapper}>
        <div className={styles.logoHead}>Logo Head</div>
        <div className={styles.box}>
          <div className={styles.inputIconWrap}>
            <input
              type="text"
              className={styles.inputWithIcon}
              id="form-name"
            />
            <span className={styles.inputIcon}>
              <img src={search} alt="search" />
            </span>
          </div>
        </div>
      </div>
      <div className={styles.shadowLine}></div>
    </>
  );
};
