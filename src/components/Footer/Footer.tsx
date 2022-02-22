import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <div className={`${styles.footerWrapper} ${styles.footerContent}`}>
      <div className={styles.footerText}>
        <div>Left Footer Links</div>
        <div>Left Footer One</div>
        <div>Left Footer Two</div>
      </div>
      <div className={styles.footerText}>
        <div>Left Footer Links</div>
        <div>Left Footer One</div>
        <div>Left Footer Two</div>
      </div>
    </div>
  );
};
