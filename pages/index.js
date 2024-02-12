import Header from "../components/header";
import UserInfo from "../components/user-info";
import Feed from "../components/feed";
import TrendingTopics from "../components/trending-topics";
import styles from "./index.module.css";

const Content = () => {
  return (
    <div className={styles.content}>
      <main className={styles.feed}>
        <Header />
        <div className={styles.contentcontainer}>
          <UserInfo />
          <Feed />
          <TrendingTopics />
        </div>
      </main>
    </div>
  );
};

export default Content;
