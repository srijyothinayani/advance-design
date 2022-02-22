import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={`${styles.footerWrapper} ${styles.footerContent}`}>
      <div className={styles.footerText}>
        <div className={styles.footerHead}>Left Footer Links</div>
        <div>Left Footer Link ONE</div>
        <div>Left Footer Link TWO</div>
      </div>
      <div className={styles.footerText}>
        <div className={styles.footerHead}>Left Footer Links</div>
        <div>Left Footer Link ONE</div>
        <div>Left Footer Link TWO</div>
      </div>
    </div>
  );
};
