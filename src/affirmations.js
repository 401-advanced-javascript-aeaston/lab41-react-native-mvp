import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View,Button} from 'react-native';
import { DeviceMotion} from 'expo-sensors';
import {When} from './accelormoter.js'
import { CodedError } from '@unimodules/core';

export default function RandomStr(){  
   const [random,setRandom]=useState(0)

    let listOfAffirm=['I love you.','Nice shirt.','You write such elegant code.','You make good decisions.', 'You deserve to take good care of you.','You have a cute butt.','You have made the right choices in life.', 'Your hair looks great today.', 'The world is a better place with you in it.', ];

    let randomMaker = listOfAffirm[Math.floor(Math.random()*listOfStr.length)];
  console.log(randomMaker,'line 8')
   
  const _handlePress=()=>{
      setRandom(randomMaker)
      console.log('I got in!')
    }
 useEffect(()=>{
  let acceleration={ x:5,y:5,z:5}
  DeviceMotion.addListener(({acceleration})=> {
    if(acceleration.x >.5 && acceleration.z >.4){
      _handlePress()
      console.log("cool");
      DeviceMotion.removeAllListeners()
    }
  }
 )})
    return (
     <View>
        <When condition={true}>
          <Button title='Click for a compliment!' onPress={_handlePress}/>
        </When>
        <Text>
          {random}
        </Text>
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