import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

export default function Header({navigation, title, viz = false, onClicked}) {
    return (
        <>
            <View
                style={{
                    height: 80,
                    width: '100%',
                    justifyContent: 'center',
                    backgroundColor: 'rgb(255, 208,13)',
                    alignItems: 'center',
                    paddingTop: 40,
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
                    {title}
                </Text>
            </View>
            <View style={{position: 'absolute', top: 45, left: 20}}>
                <TouchableOpacity onPress={navigation.goBack}>
                    <Image
                        source={require('../../assets/iconBack.png')}
                        style={{width: 30, height: 30, resizeMode: 'contain'}}
                    />
                </TouchableOpacity>
            </View>

            {viz && (
                <View style={{position: 'absolute', top: 45, right: 10}}>
                    <TouchableOpacity onPress={onClicked}>
                        <Image
                            source={require('../../assets/plusicon.png')}
                            style={{width: 50, height: 30, resizeMode: 'center'}}
                        />
                    </TouchableOpacity>
                </View>
            )}
        </>
    );
}
