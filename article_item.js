import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default class ArticleItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center', margin: 4}}>
        <Image source={{uri: this.props.faviconUrl}} style={{width: 20, height: 20}} />
        <View style={{flex: 1}}>
          <Text style={{fontSize: 16, fontWeight: 'bold', fontFamily: 'Roboto'}}>{this.props.title}</Text>
          <Text style={{fontSize: 12, fontWeight: 'normal', fontFamily: 'Roboto'}}>{this.props.description}</Text>
        </View>
        <Image source={{uri: this.props.imageUrl}} style={{width: 120, height: 90}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
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
