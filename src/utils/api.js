import axios from "axios";

class Api {
  axios;

  constructor() {
    this.axios = axios.create({
      baseURL: "https://www.googleapis.com/youtube/v3",
      params: {
        part: "snippet",
        key: process.env.REACT_APP_API_KEY,
      },
    });
  }

  async search(term) {
    try {
      const { status, data } = await this.axios.get("search", {
        params: { q: term, maxResults: 25 },
      });

      if (status !== 200)
        return console.warn("search request error:" + status, data);
      return data.items;
    } catch (error) {
      console.error(error);
    }
  }
}

export default new Api();
