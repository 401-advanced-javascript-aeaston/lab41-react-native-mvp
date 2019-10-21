import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Animated } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{color:'white'}}>I love you.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// this.state = {
//   slide: mew Animated.ValueXY()
// }

// this.slideRight = Animated.spring()
//   this.state.slide, {
//     toValue: { x: 20, y: 0}
//   }

// <Animated.View
//   style={
//     this.slideRight.getLayout()
//   } />

// this.slideRight.start()
