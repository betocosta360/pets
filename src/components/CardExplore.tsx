import * as React from 'react';
import { Image, View, Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function CardExplore() {
    return (
        <SafeAreaView style={{ backgroundColor: 'white', marginTop: -10 }}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ alignItems: 'center', width:'100%' }}>
                    <View style={{ width: 300, height: 130, marginBottom: 20, borderRadius: 10, elevation: 5, position: 'relative' }}>
                        <Image style={{ width: 300, height: 130, borderRadius: 10 }} resizeMode='stretch' source={require('../../assets/laranja.png')} />
                        <View style={{ position: 'absolute', alignItems: 'center' }}>
                            <Text style={{ fontSize: 14, fontWeight: '600', marginTop: 10, textAlign: 'center', color: "#AB3C31" }}>Quer ajudar?</Text>
                            <Text style={{ textAlign: 'center', fontSize: 10, marginLeft: 15, marginRight: 5, color: '#343a40' }}>
                                Através da sua doação para o abrigo você pode ajudar a salvar vidas de animais</Text>
                        </View>
                    </View>
                </View>

                <View style={{ alignItems: 'center', width:'100%' }}>
                    <View style={{  width: 300, height: 130, marginBottom: 20, borderRadius: 10, elevation: 5, position: 'relative' }}>
                        <Image style={{ width: 300, height: 130, borderRadius: 10 }} resizeMode='stretch' source={require('../../assets/events.png')} />
                        <View style={{ position: 'absolute', marginTop: 35 }}>
                        <Image style={{ width: 70, height: 70, borderRadius: 10 }} resizeMode='stretch' source={require('../../assets/cuidados.png')} />
                            <Text style={{ fontSize: 14, fontWeight: '400', marginTop: -55, paddingLeft: 90,  color: "#AB3C31" }}>Eventos semanais</Text>
                            <Text style={{ fontSize: 12,color: '#343a40', paddingLeft: 70, }}>Compareça a nossos eventos.</Text>
                            <Image style={{ width: 70, height: 70, marginTop: -55, marginLeft: 225 }} resizeMode='stretch' source={require('../../assets/doctor.png')} />
                        </View>
                    </View>
                </View>

                <View style={{ alignItems: 'center', width:'100%' }}>
                    <View style={{ backgroundColor: '#E8E1FF', width: 300, height: 130, marginBottom: 20, borderRadius: 10, elevation: 5, position: 'relative' }}>
                        <Image style={{ width: 130, height: 130, marginLeft: 175}} resizeMode='stretch' source={require('../../assets/potes.png')} />
                        <View style={{ position: 'absolute', marginTop: 45 }}>
                            <Text style={{marginLeft: 10, fontSize: 13, fontWeight: '600', marginTop: 2, color: "#3e4144" }}>
                            Coisas para fazer antes de 
                            </Text>
                            <Text style={{marginLeft: 10,  fontSize: 13, fontWeight: '600', color: "#3e4144" }}>
                            adotar um animal de estimação
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={{ alignItems: 'center', width:'100%' }}>
                    <View style={{ backgroundColor: '#A1C7DC', width: 300, height: 130, marginBottom: 20, borderRadius: 10, elevation: 5, position: 'relative' }}>
                        <Image style={{ width: 300, height: 130, marginLeft: 30, marginTop: -0.5 }} resizeMode='stretch' source={require('../../assets/gatos.png')} />
                        <View style={{ position: 'absolute', marginTop: 40 }}>
                            <Text style={{marginLeft: 10, fontSize: 18, fontWeight: '600', marginTop: 20, color: "white" }}>
                            Dicas para depois de adotar
                            </Text>
                            
                        </View>
                    </View>
                </View>

                <View style={{ alignItems: 'center', width:'100%' }}>
                    <View style={{ backgroundColor: '#A1C7DC', width: 300, height: 130, marginBottom: 20, borderRadius: 10, elevation: 5, position: 'relative' }}>
                        <Image style={{ width: 300, height: 130, marginLeft: 30, marginTop: -0.5 }} resizeMode='stretch' source={require('../../assets/gatos.png')} />
                        <View style={{ position: 'absolute', marginTop: 40 }}>
                            <Text style={{marginLeft: 10, fontSize: 18, fontWeight: '600', marginTop: 20, color: "white" }}>
                            Dicas para depois de adotar
                            </Text>
                            
                        </View>
                    </View>
                </View>

            </ScrollView>
        </SafeAreaView>
    )
}




