import TweetItem from "./TweetItem";
import { useTweets } from "../services/queries";

function TweetList() {
  const { data: tweets, error, isLoading } = useTweets();

  if (isLoading) return <p>Loading</p>;

  if (error) return <p>{error.message}</p>;

  return tweets.map((t) => <TweetItem tweet={t} key={t.id} />);
}

export default TweetList;
