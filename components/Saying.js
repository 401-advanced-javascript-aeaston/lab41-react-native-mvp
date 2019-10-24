import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

export default class Saying extends React.Component {
  
  constructor(props) {
    super(props);
    this.handleWordChange = this.handleWordChange.bind(this);
    this.state = {phrase: ''};
  }

  arrPhrase = ['I love you.','Nice shirt.','You write such elegant code.','You make good decisions.', 'You deserve to take good care of you.','You have a cute butt.','You have made the right life choices.', 'Your hair looks great today.', 'The world is a better place with you in it.', 'You have great taste in music.']

  randomIndex() {
    return Math.floor(Math.random() * this.arrPhrase.length)
  }

  handleWordChange() {
    this.setState({
      phrase: this.arrPhrase[this.randomIndex()]
    });    
  }

  render() {
      // const { phrase } = this.state
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          {this.state.phrase}
        </Text>
        <Button 
          onPress={this.handleWordChange}
          title="Generate Compliment"
          color="purple"
          accessibilityLabel='Generate Compliment'
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});