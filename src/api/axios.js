import axios from "axios";

const myKey = "AIzaSyDYQHxyOCHQTX_TSkeP59td4JHxOt9M73Y";
axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3/search",
  params: {
    part: "snippet",
    maxResults: 5,
    key: myKey,
    type: "video",
  },
});
export default axios;
