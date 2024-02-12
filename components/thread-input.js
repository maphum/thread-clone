import styles from "./thread-input.module.css";

const ThreadInput = () => {
  return (
    <div className={styles.threadinput}>
      <div className={styles.thread}>
        <img className={styles.avatarIcon} alt="" src="/avatar.svg" />
      </div>
      <div className={styles.infosActions}>
        <div className={styles.infos}>
          <input
            className={styles.shareSomethingCool}
            placeholder="Share something cool today"
            type="text"
          />
        </div>
        <div className={styles.actions}>
          <div className={styles.actions1}>
            <button className={styles.paperclip}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </button>
          </div>
          <button className={styles.actions2}>
            <img className={styles.sendIcon} alt="" src="/send.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreadInput;
