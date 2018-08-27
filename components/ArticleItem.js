import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';

export default class ArticleItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let faviconImageView = null;
    // remove favicon
    // if(this.props.faviconUrl){
    //   faviconImageView = <Image source={ { uri: this.props.faviconUrl } } style={ styles.headerFaviconImage } />;
    // }

    let articleImageView = null;
    if(this.props.imageUrl && this.props.imageUrl.match(/\.png|\.jpg|\.jpeg|\.gif/)){
      articleImageView = <Image source={{uri: this.props.imageUrl}} style={styles.image} />;
    }

    let containerColor = styles.container;
    if(this.props.sourceTitle.match(/.*はてな.*/)){
      containerColor = styles.hatenaContainer;
    }

    return (
        <TouchableOpacity onPress={ ()=> { this.props.handleSelectedArticleUrl(this.props.title, this.props.articleUrl); } }>
          <View style={ containerColor }>

            <View style={ styles.header }>
              { faviconImageView }
              <Text style={ styles.headerTextSourceTitle }>{ this.props.sourceTitle }</Text>
            </View>

            <View style={ styles.contents }>
              <View style={ styles.textWrap }>
                <Text style={ styles.textWrapTitle}>{ this.props.title }</Text>
                <Text style={ styles.textWrapDescription}>{ this.props.description }</Text>
              </View>
              { articleImageView }
            </View>

          </View>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#d5f9b6',
    flexDirection: 'column',
  },
  hatenaContainer: {
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8,
  },
  headerFaviconImage: {
    width: 20,
    height: 20,
    marginRight: 8
  },
  headerTextSourceTitle: {
    fontSize: 12,
    fontWeight: 'normal',
    fontFamily: 'Roboto',
    color: '#000',
  },
  contents: {
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#e6ecf0',
    borderBottomWidth: 1,
    padding: 8,
  },
  textWrap: {
    flex: 1
  },
  textWrapTitle: {
    paddingBottom: 2,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    textAlign: 'justify',
    lineHeight: 20,
  },
  textWrapDescription: {
    paddingTop: 2,
    fontSize: 12,
    fontWeight: 'normal',
    fontFamily: 'Roboto',
    color: '#777',
    textAlign: 'justify',
    lineHeight: 16,
  },
  image: {
    width: 120,
    height: 90,
    marginLeft: 8,
  }
});

ArticleItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  articleUrl: PropTypes.string,
  faviconUrl: PropTypes.string,
  imageUrl: PropTypes.string,
  sourceUrl: PropTypes.string,
  date: PropTypes.string,
  sourceTitle: PropTypes.string,
  handleSelectedArticleUrl: PropTypes.func.isRequired,
};
