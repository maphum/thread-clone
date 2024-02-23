import ThreadInput from "./thread-input";
import Thread from "./thread";
import styles from "./feed.module.css";
import { useState, useEffect } from "react";

const Feed = () => {

  const [threads, setThreads] = useState([]);
  const getThreads = async () => {
    try {
      const request = await fetch("/api/threads");
      const data = await request.json();
      setThreads(data);
    } catch (error) {
    }
  };

  useEffect(() => {
    getThreads();
  }, []);

  return (
    <div className={styles.feed}>
      <ThreadInput getThreads={getThreads} />
      {threads &&
        threads.data?.map((thread) => {
          return (
            <Thread
              authorImage="/avatar.svg"
              threadContent={thread.content}
              likes={`${thread.likes || 0} likes`}
              username={thread.user}
              timeSpentSincePublished={timeSince(thread.timestamp)}
              getThreads={getThreads}
              id={thread._id}
              key={thread._id}
            />
          );
        })}
    </div>
  );
};

function timeSince(date) {
  const now = new Date();
  date = new Date(date);
  const secondsPast = (now.getTime() - date.getTime()) / 1000;

  if (secondsPast < 60) {
    return parseInt(secondsPast) + ' seconds ago';
  } else if (secondsPast < 3600) {
    return parseInt(secondsPast / 60) + ' minutes ago';
  } else if (secondsPast < 86400) {
    return parseInt(secondsPast / 3600) + ' hours ago';
  } else if (secondsPast < 2592000) {
    return parseInt(secondsPast / 86400) + ' days ago';
  } else if (secondsPast < 31536000) {
    return parseInt(secondsPast / 2592000) + ' months ago';
  } else {
    return parseInt(secondsPast / 31536000) + ' years ago';
  }
}

export default Feed;
