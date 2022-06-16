import React, { Component } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Header from '../utils/header';

function Circle({ color }) {
  return <TouchableOpacity><View style={{ width: 50, height: 50, backgroundColor: color,borderRadius:25,
  borderColor:color, }} /></TouchableOpacity>;
}

export default class Ayarlar extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
          <Header navigation={this.props.navigation} title="Antrenmanlarım"/>

          <Text style={{ marginLeft: 30,marginTop:50, fontWeight: 'bold' }}>
          {'Tema Seçimi'}
        </Text>

        <View
          style={{
            marginTop:30,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}>

          <Circle color={"black"}/>
          <Circle color={"purple"}/>
          <Circle color={"blue"}/>
          <Circle color={"yellow"}/>

          </View>
      </View>
    );
  }
}
