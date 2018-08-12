import React from 'react';
import { WebView } from 'react-native';
import PropTypes from 'prop-types';

export default class ArticleScreen extends React.Component {

  constructor(props) {
    super(props);
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