import React,{Component} from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Header from "../utils/header"

export default class Antrenman extends Component{

render(){
  return(
    <View style={{flex:1}}>
    <Header navigation={this.props.navigation} title="Antrenmanlarım"/>
    </View>
  )
}
}
