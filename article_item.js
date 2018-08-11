import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default class ArticleItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let faviconImageView = null;
    if(this.props.faviconUrl){
      faviconImageView = <Image source={ { uri: this.props.faviconUrl } } style={ styles.faviconImage } />;
    }

    let articleImageView = null;
    if(this.props.imageUrl && this.props.imageUrl.match(/\.png|\.jpg|\.jpeg|\.gif/)){
      articleImageView = <Image source={{uri: this.props.imageUrl}} style={styles.image} />;
    }

    return (
        <View style={ styles.container }>
        { faviconImageView }
          <View style={ styles.textWrap }>
            <Text style={ styles.textWrapTitle}>{ this.props.title }</Text>
            <Text style={ styles.textWrapDescription}>{ this.props.description }</Text>
          </View>
          { articleImageView }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderStyle: 'solid',
    borderColor: '#e6ecf0',
    borderBottomWidth: 1,
    paddingBottom: 8,
    paddingTop: 4
  },
  faviconImage: {
    width: 20,
    height: 20,
    marginLeft: 8,
    marginRight: 8
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
    marginRight: 8
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
};
