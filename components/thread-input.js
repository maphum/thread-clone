import styles from "./thread-input.module.css";
import { useState } from "react";
const ThreadInput = ({ getThreads }) => {

  const [input, setInput] = useState("");

  const postThread = async () => {
    try {
      const request = await fetch("/api/threads", {
        method: "POST",
        body: JSON.stringify({ content: input, user: "Nam Le" }),
      });
      const data = await request.json();
      getThreads();
    } catch (error) {
    }
  };

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
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={async (e) => {
              if (e.key == "Enter") await postThread();
              setInput("")
            }}
          />
        </div>
        <div className={styles.actions}>
          <div className={styles.actions1}>
            <button className={styles.paperclip}>
              <img className={styles.vectorIcon} alt="" src="/vector.svg" />
            </button>
          </div>
          <button className={styles.actions2} onClick={() => postThread()}>
            <img className={styles.sendIcon} alt="" src="/send.svg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThreadInput;
