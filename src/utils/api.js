import axios from "axios";

class Api {
  axios;

  constructor() {
    this.axios = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: {
        key: process.env.REACT_APP_API_KEY,
      },
    });
  }

  async search(term) {
    try {
      const { status, data } = await this.axios.get("search", {
        params: { q: term, maxResults: 25, part: "snippet" },
      });

      if (status !== 200)
        return console.warn("search request error:" + status, data);
      return data.items;
    } catch (error) {
      console.error(error);
    }
  }

  async videoDetail(videoId) {
    try {
      const { status, data } = await this.axios.get("videos", {
        params: {
          id: videoId,
          part: "snippet,contentDetails,statistics",
        },
      });

      if (status !== 200)
        return console.warn("videoDetail request error:" + status, data);
      return data.items;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new Api();
