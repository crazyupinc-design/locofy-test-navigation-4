import { FunctionComponent } from "react";
import styles from "./navigation4.module.css";
const Navigation4: FunctionComponent = () => {
  return (
    <div className={styles.navigation4}>
      <div className={styles.navbarContent}>
        <img className={styles.logoIcon} alt="" src="/logo@2x.png" />
        <div className={styles.navbarMenu}>
          <div className={styles.navbarLink}>
            <div className={styles.about}>About</div>
          </div>
          <div className={styles.navbarLink}>
            <div className={styles.about}>Features</div>
          </div>
          <div className={styles.navbarLink}>
            <div className={styles.about}>Pricing</div>
          </div>
          <div className={styles.navbarButton}>
            <div className={styles.getStarted}>GET STARTED</div>
          </div>
        </div>
      </div>
      <div className={styles.about}>Footer</div>
    </div>
  );
};

export default Navigation4;
