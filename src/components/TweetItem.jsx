function TweetItem({ tweet }) {
  return (
    <div className="flex gap-4 justify-between items-start p-4 border-b border-b-gray-500">
      <img className="w-8 rounded-full" src={tweet.avatar} />
      <div className="grow">
        <p>
          {tweet.userName}{" "}
          <span className="text-gray-500">
            {" "}
            @{tweet.userName} -{tweet.createdAt}
          </span>
        </p>
        <p>{tweet.message}</p>
        <div className="flex justify-between my-4">
          <div>
            <i class="fa-regular fa-message"></i>
            {tweet.reply_count}
          </div>
          <div>
            <i class="fa-solid fa-retweet"></i>
            {tweet.retweet_count}
          </div>
          <div>
            <i class="fa-regular fa-heart"></i>
            {tweet.like_count}
          </div>
          <div>
            <i class="fa-solid fa-upload"></i>
          </div>
          <div>
            <i class="fa-solid fa-chart-simple"></i>
          </div>
        </div>
      </div>
      <i className="fa-solid fa-ellipsis"></i>
    </div>
  );
}

export default TweetItem;
