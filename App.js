import * as React from 'react';
import {Button, View, Text, SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Antrenman from './src/screens/Anternman';
import Takvim from './src/screens/Takvim';
import Ayarlar from './src/screens/Ayarlar';
import Okcukml from './src/screens/Okcukml';
import HomeScreen from './src/screens/Homescreen';

function DetailsScreen({navigation}) {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details')}
            />
        </View>
    );
}

const Stack = createNativeStackNavigator();

function App() {
    return (


        <NavigationContainer>
            <StatusBar hidden={true}/>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{headerShown: false}}>
                <Stack.Screen name="Home" component={HomeScreen}/>
                <Stack.Screen name="Details" component={DetailsScreen}/>
                <Stack.Screen name="Antrenman" component={Antrenman}/>
                <Stack.Screen name="Takvim" component={Takvim}/>
                <Stack.Screen name="Ayarlar" component={Ayarlar}/>
                <Stack.Screen name="Okcukimlik" component={Okcukml}/>

            </Stack.Navigator>


        </NavigationContainer>

    );
}

export default App;
