import React from 'react';
import { StyleSheet, StatusBar} from 'react-native';

import { Container , Titulo} from './src /style';
//import { getStatusBarHeight } from 'react-native-status-bar-height'

export default function App() {
  return (
    <Container>
      <StatusBar
      backgroundColor="transparent" 
      barStyle="light-content"
      translucent={true}
      />
      <Titulo>StatusBar React Native</Titulo>
    </Container>
  )
}
const styles = StyleSheet.create({
  container: {
     
  }
})
