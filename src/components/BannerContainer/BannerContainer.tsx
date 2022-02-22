import Banner from "../../assets/images/B&W_bg.jpg";
import PeakImage from "../../assets/images/PEAK_PNG.png";
import styles from "./BannerContainer.module.scss";

export const BannerContainer = () => {
  return (
    <div className={styles.bannerContainer}>
      <img className={styles.bannerSection} src={Banner} alt="banner" />
      <div className={styles.textOnBanner}>
        <div className={styles.title}>Save 10%</div>
        <div className={styles.subTitle}>Ipsum delicata sed ex.</div>
        <div className={styles.description}>
          Lorem ipsum dolor sit amet, ea est noster accumsan, vim elit aeque an.
          Eu duo quod elit posse facer minimum pri eu, ea sit virus ceteros.{" "}
          <span className={styles.isSmallDevice}>
            Ea has consul omnesque, an vel reque graeco. Eum ne mundi nobis
            quando, an atqui dolor per. Ut modo elit malis sea. Nibh consetetur
            mei ea.
          </span>
        </div>
      </div>
      <img className={styles.peakImage} src={PeakImage} alt="peak_img" />
    </div>
  );
};
