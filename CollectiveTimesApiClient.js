import axios from 'axios';

export default class CollectiveTimesApiClient {

  static get API_ENDPOINT() { return "https://collective-times-api.herokuapp.com"; };


  async login(username, password, callback) {
    const res = await axios.post(`${CollectiveTimesApiClient.API_ENDPOINT}/oauth/token`,
                                 {
                                   grant_type: 'password',
                                   client_id: 1,
                                   client_secret: 'your_secret',
                                   username: username,
                                   password: password
                                 });

    if (res.status === 200) {
      callback(res.data);
    } else {
      callback({});
    }
  }

  async getArticles(page, callback) {
    const res = await axios.get(`${CollectiveTimesApiClient.API_ENDPOINT}/v1/articles?page=${page}`);
    if (res.status === 200) {
      callback(res.data.articles);
    } else {
      callback([]);
    }
  };

  async saveVisitedArticleBy(token, articleId) {
    let headers = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    };

    if(token){
      headers['headers']['Authorization'] = `Bearer ${token}`;
    }

    const res = await axios.post(`${CollectiveTimesApiClient.API_ENDPOINT}/v1/histories`,
                                 {
                                   article_id: articleId
                                 },
                                 headers);
    if (res.status === 200) {
      console.log('success');
    } else {
      console.log('fail');
    }
  };
}
