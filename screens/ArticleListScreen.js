import React from 'react';
import { StyleSheet, View, ToolbarAndroid, Text, FlatList } from 'react-native';
import CollectiveTimesApiClient from '../CollectiveTimesApiClient';
import ArticleItem from '../components/ArticleItem';
import ProgressDialog from '../components/ProgressDialog';

export default class ArticleListScreen extends React.Component {

  constructor(props) {
    super(props);
    this.renderArticleItem = this.renderArticleItem.bind(this);
    this.onEndReached = this.onEndReached.bind(this);
    this.handleReloadArticles = this.handleReloadArticles.bind(this);
    this.handleSelectedArticleUrl = this.handleSelectedArticleUrl.bind(this);
    this.state = {
      refreshing: false,
      page: 1,
      articles: []
    };
  }

  componentDidMount(){
    const client = new CollectiveTimesApiClient();
    client.getArticles(this.state.page, (articles) => {
      this.setState({
        refreshing: false,
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
          sourceTitle={article.item.sourceTitle}
          date={article.item.date}
          handleSelectedArticleUrl={this.handleSelectedArticleUrl}
        />
    );
  }

  onEndReached(){
    const client = new CollectiveTimesApiClient();
    client.getArticles(this.state.page, (articles) => {
      this.setState(
        {
          refreshing: false,
          page: this.state.page + 1,
          articles: this.state.articles.concat(articles)
        }
      );
    });
  }

  handleReloadArticles(){
    this.setState({
      refreshing: true,
      page: 1,
      articles: []
    });

    const client = new CollectiveTimesApiClient();
    client.getArticles(1, (articles) => {
      this.setState(
        {
          refreshing: false,
          page: this.state.page + 1,
          articles: this.state.articles.concat(articles)
        }
      );
    });
  }

  handleSelectedArticleUrl(id, articleTitle, articleUrl){
    this.props.navigation.navigate('Detail', { id: id, title: articleTitle, url: articleUrl });
  }

  render() {
    if(this.state.page === 1 && !this.state.refreshing){
      return(
          <ProgressDialog />
      );
    }

    let articleListView = null;
    if(this.state.articles.length !== 0){
      articleListView =
        <FlatList
          data={this.state.articles}
          renderItem={this.renderArticleItem}
          keyExtractor={(item, index) => item.key.toString()}
          onEndReachedThreshold={1}
          onEndReached={this.onEndReached}
          refreshing={this.state.refreshing}
          onRefresh={this.handleReloadArticles}
        />;
    }

    return (
      <View style={styles.container}>
        { articleListView }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
