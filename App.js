import React from 'react';
import { ToolbarAndroid, FlatList, StyleSheet, Image, Text, View } from 'react-native';
import CollectiveTimesApiClient from './api_client';
import ArticleItem from './article_item';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.renderArticleItem = this.renderArticleItem.bind(this);
    this.onEndReached = this.onEndReached.bind(this);
    this.state = {
      page: 1,
      articles: []
    };
  }

  componentDidMount(){
    const client = new CollectiveTimesApiClient();
    client.getArticles(this.state.page, (articles) => {
      this.setState({
        page: this.state.page + 1,
        articles: articles
      });
    });
  }

  renderArticleItem(article){
    return(
        <ArticleItem
          id={article.item.key}
          title={article.item.title}
          description={article.item.description.slice(0, 60)}
          articleUrl={article.item.articleUrl}
          faviconUrl={article.item.faviconUrl}
          imageUrl={article.item.imageUrl}
          sourceUrl={article.item.sourceUrl}
          date={article.item.date}
        />
    );
  }

  onEndReached(){
    const client = new CollectiveTimesApiClient();
    client.getArticles(this.state.page, (articles) => {
      console.log(articles);
      this.setState({
        page: this.state.page + 1,
        articles: articles
      });
    });
  }

  render() {
    if(this.state.articles.length === 0){
      return (null);
    }

    return (
      <View style={styles.container}>
        <ToolbarAndroid
          style={styles.toolBar}
          logo={require('./img/logo.jpg')}>
          <Text style={styles.appTitle}>CollectiveTimes</Text>
        </ToolbarAndroid>
        <FlatList
          style={styles.container}
          data={this.state.articles}
          renderItem={this.renderArticleItem}
          keyExtractor={(item, index) => item.key.toString()}
        />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  appTitle: {
    paddingLeft: 12,
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  toolBar: {
    height: 56,
    elevation: 4,
    backgroundColor: '#c8f277de',
  },
  container: {
    flex: 1,
  },
});
