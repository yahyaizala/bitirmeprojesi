import React, { Component, Fragment } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Calendar, CalendarList, Agenda } from 'react-native-calendars';

import Header from '../utils/header';

export default class Takvim extends Component {
  click(day) {
    console.log(JSON.stringify(day));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header navigation={this.props.navigation} title="Takvim" viz={true}
        
        onClicked={()=>console.log("artı basıldı")}
         />

        <View style={{  flex: 1 }}>
          <Fragment>
            <Calendar
              markingType={'custom'}
              onDayPress={this.click}
              hideArrows={false}
              theme={{
                arrowColor: '#319e8e',
              }}
            />
          </Fragment>
        </View>
      </View>
    );
  }
}
