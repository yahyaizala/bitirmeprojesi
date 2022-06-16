import React, {Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';
import Header from '../utils/header';

export default class Okcukml extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: 'rgb(255, 208, 13)'}}>
                <View
                    style={{
                        flex: 1,
                        marginTop: 50,
                        borderColor: 'white',
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                        borderWidth: 1,

                        backgroundColor: 'white',
                    }}>
                    <View style={{position: 'relative', height: 80, marginTop: 20}}>
                        <Text
                            style={{
                                flex: 1,
                                textAlign: 'center',

                                fontWeight: 'bold',
                                fontSize: 20,
                            }}>
                            {'Okçu Kimliğim'}
                        </Text>

                        <TouchableOpacity
                            onPress={this.props.navigation.goBack}
                            style={{position: 'absolute', left: 20, top: 10}}>
                            <Image
                                source={require('../../assets/iconClose.png')}
                                style={{width: 20, height: 20, resizeMode: 'contain'}}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{alignSelf: 'center', position: 'relative'}}>
                        <Image source={require('../../assets/placeholderKadN.png')}/>
                        <TouchableOpacity
                            style={{position: 'absolute', bottom: 0, right: 10}}>
                            <Image
                                source={require('../../assets/iconEdit.png')}
                                style={{width: 20, height: 20, resizeMode: 'center'}}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{margin: 20, position: 'relative'}}>
                        <Text style={{fontWeight: 'bold'}}>{'İsim & Soyisim:'}</Text>

                        <TextInput
                            style={{
                                backgroundColor: 'rgb(247,247,247)',
                                flex: 1,
                                marginHorizontal: 10,
                                borderColor: 'rgb(247,247,247)',
                                borderRadius: 10,
                                borderWidth: 1,
                                padding: 10,
                                marginTop: 10,
                                minHeight: 50,
                            }}
                        />
                    </View>

                    <View style={{margin: 20, position: 'relative'}}>
                        <Text style={{fontWeight: 'bold'}}>{'Kulüp:'}</Text>

                        <TextInput
                            style={{
                                backgroundColor: 'rgb(247,247,247)',
                                flex: 1,
                                marginHorizontal: 10,
                                borderColor: 'rgb(247,247,247)',
                                borderRadius: 10,
                                borderWidth: 1,
                                minHeight: 50,
                                padding: 10,
                                marginTop: 10,
                            }}
                        />
                    </View>

                    <View style={{margin: 20, position: 'relative'}}>
                        <Text style={{fontWeight: 'bold'}}>{'Cinsiyet:'}</Text>

                        <TextInput
                            style={{
                                backgroundColor: 'rgb(247,247,247)',
                                flex: 1,
                                marginHorizontal: 10,
                                borderColor: 'rgb(247,247,247)',
                                borderRadius: 10,
                                borderWidth: 1,
                                padding: 10,
                                minHeight: 50,
                                marginTop: 10,
                            }}
                        />
                    </View>

                    <View style={{margin: 20, position: 'relative'}}>
                        <Text style={{fontWeight: 'bold'}}>{'Kullanılan Yay:'}</Text>

                        <TextInput
                            style={{
                                backgroundColor: 'rgb(247,247,247)',
                                flex: 1,
                                marginHorizontal: 10,
                                borderColor: 'rgb(247,247,247)',
                                borderRadius: 10,
                                borderWidth: 1,
                                padding: 10,
                                minHeight: 50,
                                marginTop: 10,
                            }}
                        />
                    </View>

                    <TouchableOpacity
                        style={{
                            marginTop: 50,
                            marginHorizontal: 20,
                            backgroundColor: 'rgb(255, 208, 13)',
                            height: 50,
                            borderWidth: 1,
                            borderColor: 'rgb(255, 208, 13)',
                            borderRadius: 20,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                        <Text style={{fontWeight: 'bold'}}>{'Kaydet'}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
