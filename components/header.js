import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.nav}>
      <div className={styles.logo}>
        <img
          className={styles.threadsLogoIcon}
          alt=""
          src="/threads-logo.svg"
        />
        <h2 className={styles.threads}>threads</h2>
      </div>
      <div className={styles.avatar}>
        <div className={styles.righInfos}>
          <img className={styles.logo2Icon} alt="" src="/logo-2.svg" />
          <img className={styles.hamburgerIcon} alt="" src="/hamburger.svg" />
        </div>
      </div>
    </header>
  );
};

export default Header;
