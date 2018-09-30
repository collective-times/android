import React from 'react';
import { WebView } from 'react-native';
import PropTypes from 'prop-types';
import CollectiveTimesApiClient from '../CollectiveTimesApiClient';
import Authenticator from '../data';

export default class ArticleScreen extends React.Component {

  constructor(props) {
    super(props);
    this.saveArticleId = this.saveArticleId.bind(this);
  }

  componentDidMount(){
    const articleId = this.props.navigation.getParam('id');
    if(!articleId){
      return;
    }

    this.saveArticleId(articleId);
  }

  async saveArticleId(articleId){
    const client = new CollectiveTimesApiClient();
    try {
      const token = await Authenticator.getAccessToken();

      if(token) {
        client.saveVisitedArticleBy(token.access_token, articleId);
      } else {
        client.saveVisitedArticleBy(null, articleId);
      }
    } catch(error) {
      console.log(error);
      client.saveVisitedArticleBy(null, articleId);
    }
  }

  render() {
    return(
        <WebView
          userAgent={ 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_0 like Mac OS X) AppleWebKit/534.46 (KHTML like Gecko) Mobile/9A334 Safari/7534.48.3' }
          source={{uri: this.props.navigation.getParam('url')}}
          javaScriptEnabled={true}
      />
    );
  }
}
