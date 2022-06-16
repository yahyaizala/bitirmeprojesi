import * as React from 'react';
import {
    Button,
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native';

export default function HomeScreen({navigation}) {
    return (
        <View style={{backgroundColor: 'rgba(242,242,246,0.86)', flex: 1}}>
            <View style={[stil.box, {marginTop: 40}]}>
                <Image
                    source={require('../../assets/placeholderErkek.png')}
                    style={{height: 60, width: 60,marginHorizontal:10,}}
                />

                <View style={{marginHorizontal: 24}}>
                    <Text style={stil.textStil}>{'Y.Emre Akar'}</Text>

                    <Text style={[stil.textStil, stil.desText]}>
                        {'Kocaeli Okçuluk Kurumu'}
                    </Text>
                </View>
            </View>

            <TouchableOpacity onPress={() => navigation.navigate('Antrenman')}>
                <View style={[stil.box, stil.desBox]}>
                    <Image
                        source={require('../../assets/iconAntrenman.png')}
                        style={{marginLeft: 15}}
                    />
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>
                        {'Antrenman'}
                    </Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('Takvim')}>
                <View style={[stil.box, stil.desBox]}>
                    <Image
                        source={require('../../assets/iconTakvim.png')}
                        style={{marginLeft: 15}}
                    />
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>
                        {'Takvim'}
                    </Text>
                </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('Okcukimlik')}>
                <View style={[stil.box, stil.desBox]}>
                    <Image
                        source={require('../../assets/iconOkcuKimlik.png')}
                        style={{marginLeft: 15}}
                    />
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>
                        {'Okçu Kimliğim'}
                    </Text>
                </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Ayarlar')}>
                <View style={[stil.box, stil.desBox]}>
                    <Image
                        source={require('../../assets/iconAyarlar.png')}
                        style={{marginLeft: 15}}
                    />
                    <Text style={{fontSize: 20, fontWeight: 'bold', marginLeft: 20}}>
                        {'Ayarlar'}
                    </Text>
                </View>
            </TouchableOpacity>


        </View>
    );
}

const stil = StyleSheet.create({
    desText: {fontSize: 16, fontWeight: '200'},

    textStil: {fontSize: 20, fontWeight: 'bold', textAlign: 'left'}, //ismimi yazdığım yazı stili

    desBox: {
        backgroundColor: 'white',
        justifyContent: 'flex-start',
        borderColor: 'white',

    }, //pembe kutunun rengi
    box: {
        marginHorizontal: 20,
        backgroundColor: 'rgb(254,171,219)',
        borderColor: 'rgb(254,171,219)',
        marginTop: 20,
        height: 114,
        borderWidth: 1,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
});
