import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    const dummyArticles = [
      {
        "title": "PHPerKaigi 2018に参加&懇親会で飛び込みLTした",
        "description": "初開催となるPHPerKaigi PHPのカンファレンスといえば、東京・大阪・福岡で毎年1回開催されるPHPカンファレンスがPHPerに...",
        "date": "2018-03-10T23:59:59+09:00",
        "articleUrl": "http://blog.hypermkt.jp/phperkaigi-2018/",
        "sourceUrl": "http://blog.hypermkt.jp",
        "imageUrl": "https://i0.wp.com/blog.hypermkt.jp/wp-content/uploads/2018/03/phperkaigi-2018-logo.png?zoom=2&resize=150%2C150",
        "faviconUrl": "http://3.bp.blogspot.com/-SP_ugyKB1Q0/UCk8X4MIoyI/AAAAAAABFgU/EyR-vslPhCw/s640/old-google-favicon-2012.png"
      }
    ];

    this.state = { articles: dummyArticles };
  }


  render() {
    return (
        <View style={{flexDirection: 'row', alignItems: 'center', margin: 4}}>
        <Image source={{uri: this.state.articles[0].faviconUrl}} style={{width: 20, height: 20}} />
        <View style={{flex: 1}}>
        <Text style={{fontSize: 16, fontWeight: 'bold', fontFamily: 'Roboto'}}>{this.state.articles[0].title}</Text>
        <Text style={{fontSize: 12, fontWeight: 'normal', fontFamily: 'Roboto'}}>{this.state.articles[0].description}</Text>
        </View>
        <Image source={{uri: this.state.articles[0].imageUrl}} style={{width: 120, height: 90}} />
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

