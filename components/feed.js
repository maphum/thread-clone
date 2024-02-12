import ThreadInput from "./thread-input";
import Thread from "./thread";
import styles from "./feed.module.css";

const Feed = () => {
  return (
    <div className={styles.feed}>
      <ThreadInput />
      <Thread
        threadContent="I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please"
        likes="7 Likes"
        authorImage="/avatar1.svg"
        username="aura"
        timeSpentSincePublished="2min"
      />
      <Thread
        threadContent={`guys, just see that now we have a "Save for Later" I've been waiting for this so much`}
        likes="2 Likes"
        authorImage="/avatar1.svg"
        username="aura"
        timeSpentSincePublished="2min"
      />
      <Thread
        threadContent="Hold onto your seats, folks! The new iPhone is coming in hot, ready to rock our world! Imagine the stunning photos and videos I'll capture with this beauty! 📸💥 #BringItOnNewiPhone #BeyondExcited"
        likes="16 Likes"
        authorImage="/avatar1.svg"
        username="aura"
        timeSpentSincePublished="2min"
      />
      <Thread
        threadContent="I’ve been exploring ways of setting up variables in Figma if you have two different sets of global colours for light and dark themes with multiple brands. If you want to learn more about it, DM me, please"
        likes="7 Likes"
        authorImage="/avatar1.svg"
        username="aura"
        timeSpentSincePublished="2min"
      />
    </div>
  );
};

export default Feed;
