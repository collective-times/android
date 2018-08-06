import axios from 'axios';

export default class CollectiveTimesApiClient {

  static get API_ENDPOINT() { return "https://collective-times-api.herokuapp.com/v1/"; };

  async getArticles(page, callback) {
    const res = await axios.get(`${CollectiveTimesApiClient.API_ENDPOINT}articles?page=${page}`);
    if (res.status !== 200) {
      callback([]);
    } else {
      callback(res.data.articles);
    }
  };
}
