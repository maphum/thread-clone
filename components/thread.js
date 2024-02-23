import styles from "./thread.module.css";

const Thread = ({
  threadContent,
  likes,
  authorImage,
  username,
  timeSpentSincePublished,
  id,
  getThreads,
}) => {

  const addLike = async () => {
    try {
      const request = await fetch(`/api/threads/${id}`, {
        method: "PUT",
        body: JSON.stringify({ type: "addLike", id }),
      });
      const data = await request.json();
      getThreads();
    } catch (error) {
    }
  };

  const deleteThread = async () => {
    try {
      const request = await fetch(`/api/threads/${id}`, {
        method: "DELETE",
      });
      const data = await request.json();
      getThreads();
    } catch (error) {
    }
  };

  return (
    <div className={styles.thread}>
      <div className={styles.thread1}>
        <div className={styles.thread2}>
          <img className={styles.avatarIcon} alt="" src={authorImage} />
        </div>
        <div className={styles.infosActions}>
          <div className={styles.info}>
            <div className={styles.headingInfos}>
              <div className={styles.username}>{username}</div>
              <div className={styles.rightInfos}>
                <div className={styles.min}>{timeSpentSincePublished}</div>
                <div className={styles.dots} onClick={deleteThread}>
                  <div className={styles.dotsChild} />
                  <div className={styles.dotsChild} />
                  <div className={styles.dotsChild} />
                </div>
              </div>
            </div>
            <div className={styles.iveBeenExploring}>{threadContent}</div>
          </div>
          <div className={styles.actions}>
            <button className={styles.like} onClick={addLike}>
              <img className={styles.likesIcon} alt="" src="/likes.svg" />
            </button>
            <img className={styles.commentIcon} alt="" src="/comment1.svg" />
            <img className={styles.commentIcon} alt="" src="/repost.svg" />
            <img className={styles.commentIcon} alt="" src="/send1.svg" />
          </div>
          <div className={styles.reactions}>
            <div className={styles.likes}>{likes}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Thread;
