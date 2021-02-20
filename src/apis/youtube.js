import axios from "axios";

const KEY = "AIzaSyC1ReLaEB3KXIUmevQbfhbbHG1e_WcWEwg";

export default axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
