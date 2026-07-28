import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

function TweetItem({ tweet }) {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: function (id) {
      return axios
        .delete("https://6a673e90189fe5869eb73e04.mockapi.io/tweets/" + id)
        .then((res) => res.data);
    },
    onSuccess: function () {
      queryClient.invalidateQueries({ queryKey: ["tweets"] });
    },
  });

  function handleDelete() {
    mutation.mutate(tweet.id);
  }

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
            <i className="fa-regular fa-message"></i>
            {tweet.reply_count}
          </div>
          <div>
            <i className="fa-solid fa-retweet"></i>
            {tweet.retweet_count}
          </div>
          <div>
            <i className="fa-regular fa-heart"></i>
            {tweet.like_count}
          </div>
          <div>
            <i className="fa-solid fa-upload"></i>
          </div>
          <div>
            <i className="fa-solid fa-chart-simple"></i>
          </div>
        </div>
      </div>
      <i className="fa-solid fa-ellipsis" onClick={handleDelete}></i>
    </div>
  );
}

export default TweetItem;
