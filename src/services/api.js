import axios from "axios";

export function getTweets() {
  return axios
    .get("https://6a673e90189fe5869eb73e04.mockapi.io/tweets")
    .then((res) => {
      return res.data;
    });
}
