import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';

const DATA = [
  { id: 1, text: 'Card #1', uri: 'https://images.pexels.com/photos/1897417/pexels-photo-1897417.jpeg' },
  { id: 2, text: 'Card #2', uri: 'https://images.pexels.com/photos/1921190/pexels-photo-1921190.jpeg' },
  { id: 3, text: 'Card #3', uri: 'https://images.pexels.com/photos/1908062/pexels-photo-1908062.jpeg' },
  { id: 4, text: 'Card #4', uri: 'hhttps://images.pexels.com/photos/443414/pexels-photo-443414.jpeg' },
  { id: 5, text: 'Card #5', uri: 'https://images.pexels.com/photos/1904832/pexels-photo-1904832.jpeg' },
  { id: 6, text: 'Card #6', uri: 'https://images.pexels.com/photos/1899197/pexels-photo-1899197.jpeg' },
  { id: 7, text: 'Card #7', uri: 'https://images.pexels.com/photos/1886513/pexels-photo-1886513.jpeg' },
  { id: 8, text: 'Card #8', uri: 'https://images.pexels.com/photos/1897359/pexels-photo-1897359.jpeg' },
];

export default class App extends React.Component {

  renderCard(item){
    return(
      <Card
        key={item.id}
        title={item.text}
        image={{ uri: item.uri}}
      >
        <Text style={{ marginBottom: 10 }}>
          I can go futher.
        </Text>
        <Button
          icon={{ name: 'code' }}
          backgroundColor="#03A9F4"
          title="View!"
        />
      </Card>
    );
  }

  renderNoMoredCards(){
    return(
      <Card title="Done!">
        <Text style={{ marginBottom: 10}}>No More!</Text>
        <Button backgroundColor="#03A9F4" title="More"></Button>
      </Card>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoredCards={this.renderNoMoredCards}
        />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
});
