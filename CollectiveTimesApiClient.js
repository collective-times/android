import axios from 'axios';

export default class CollectiveTimesApiClient {

  static get API_ENDPOINT() { return "https://collective-times-api.herokuapp.com/v1"; };

  async login(username, password, callback) {
    const res = await axios.post(`${CollectiveTimesApiClient.API_ENDPOINT}/login`,
                                 {
                                   username: username,
                                   password: password
                                 });
    if (res.status === 201) {
      callback(res.data);
    } else {
      callback([]);
    }
  }

  async getArticles(page, callback) {
    const res = await axios.get(`${CollectiveTimesApiClient.API_ENDPOINT}/articles?page=${page}`);
    if (res.status === 200) {
      callback(res.data.articles);
    } else {
      callback([]);
    }
  };

  async saveVisitedArticleBy(token, articleId) {
    const res = await axios.post(`${CollectiveTimesApiClient.API_ENDPOINT}/histories`,
                                 {
                                   article_id: articleId
                                 });
    if (res.status === 200) {
      console.log('success');
    } else {
      console.log('fail');
    }
  };
}
