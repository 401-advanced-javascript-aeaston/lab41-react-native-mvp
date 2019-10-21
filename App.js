import React, { useState, useEffect } from 'react';
import { StyleSheet, Animated, Text, View } from 'react-native';

const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0))  

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 5000,
      }
    ).start();
  }, [])

  return (
    <Animated.View       
      style={{
        ...props.style,
        opacity: fadeAnim,
      }}
    >
      {props.children}
    </Animated.View>
  );
}

export default () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <FadeInView style={{width: 250, height: 50, backgroundColor: 'red'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>I love you.</Text>
      </FadeInView>
    </View>
  )
}


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text style={{color:'white'}}>I love you.</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'black',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// import React, { useState, useEffect } from 'react';
// import { Animated, Text, View } from 'react-native';
// /**
//  *
//  *
//  * @param {*} props
//  * @returns
//  */

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
