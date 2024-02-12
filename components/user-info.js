import styles from "./user-info.module.css";

const UserInfo = () => {
  return (
    <div className={styles.userinfo}>
      <div className={styles.infos}>
        <img className={styles.avatarBigIcon} alt="" src="/avatar-big.svg" />
        <div className={styles.infos1}>
          <div className={styles.infos2}>
            <h2 className={styles.namLe}>Nam Le</h2>
            <div className={styles.infos3}>
              <div className={styles.maphum}>maphum</div>
              <div className={styles.threadsnetWrapper}>
                <div className={styles.threadsnet}>threads.net</div>
              </div>
            </div>
          </div>
          <div className={styles.fullStackDeveloperContainer}>
            <p className={styles.fullStackDeveloper}>
              Full stack developer | Typescript, React
            </p>
            <p className={styles.fullStackDeveloper}>namlnk1909@gmail.com</p>
          </div>
        </div>
      </div>
      <div className={styles.infos4}>
        <div className={styles.respostasECurtidas}>
          <div className={styles.followers}>2957 followers</div>
          <div className={styles.respostasECurtidasChild} />
          <div className={styles.followers}>locofy.ai</div>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
