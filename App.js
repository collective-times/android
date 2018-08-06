import React from 'react';
import { FlatList, StyleSheet, Image, Text, View } from 'react-native';
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
          description={article.item.description}
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
        <FlatList
          style={styles.container}
          data={this.state.articles}
          renderItem={this.renderArticleItem}
          keyExtractor={(item, index) => item.key.toString()}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
