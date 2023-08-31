import * as React from 'react';
import { View, Image, Text } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import { Card } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Foundation, AntDesign, Entypo } from '@expo/vector-icons';

export default function CardHome() {
    return (
        <SafeAreaView >
            <ScrollView showsVerticalScrollIndicator={false}
                         contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom: 10, elevation: 5, shadowColor: 'black', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 5  }}>
                    <View style={{ backgroundColor: '#F0EFF4', width: 170, height: 200, borderRadius: 20, flexDirection: 'row', marginLeft:5 }}>
                        <Image source={require('../../assets/collie.jpg')} resizeMode='contain' style={{ width: 170, height: 150, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                        <View style={{ flexDirection: 'row', position: 'absolute', marginTop: 155 ,}}>
                            <Text style={{ fontWeight: '400', marginLeft: 10 }}>Coco</Text>
                            <Foundation name="female-symbol" size={20} color="#DC00FF" style={{ marginLeft: 9 }} />
                            <AntDesign name="hearto" size={18} color="#6B52C7" style={{ marginLeft: 65 }} />
                            <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 11, marginTop: 20, marginLeft: 10 }}>Jovem | Border Collie</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ backgroundColor: '#F0EFF4', width: 170, height: 200, borderRadius: 20, flexDirection: 'row', marginLeft:5 }}>
                        <Image source={require('../../assets/samoieda.jpg')} resizeMode='contain' style={{ width: 170, height: 150, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                        <View style={{ flexDirection: 'row', position: 'absolute', marginTop: 155 ,}}>
                            <Text style={{ fontWeight: '400', marginLeft: 10 }}>Coco</Text>
                            <Foundation name="female-symbol" size={20} color="#DC00FF" style={{ marginLeft: 9 }} />
                            <Entypo name="heart" size={18} color="#6B52C7" style={{ marginLeft: 65 }} />
                            <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 11, marginTop: 20, marginLeft: 10 }}>Jovem | Border Collie</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom: 10  }}>
                    <View style={{ backgroundColor: '#F0EFF4', width: 170, height: 200, borderRadius: 20, flexDirection: 'row', marginLeft:5 }}>
                        <Image source={require('../../assets/golden.jpg')} resizeMode='contain' style={{ width: 170, height: 150, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                        <View style={{ flexDirection: 'row', position: 'absolute', marginTop: 155 ,}}>
                            <Text style={{ fontWeight: '400', marginLeft: 10 }}>Coco</Text>
                            <Foundation name="female-symbol" size={20} color="#DC00FF" style={{ marginLeft: 9 }} />
                            <AntDesign name="hearto" size={18} color="#6B52C7" style={{ marginLeft: 65 }} />
                            <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 11, marginTop: 20, marginLeft: 10 }}>Jovem | Border Collie</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ backgroundColor: '#F0EFF4', width: 170, height: 200, borderRadius: 20, flexDirection: 'row', marginLeft:5 }}>
                        <Image source={require('../../assets/splitz.jpg')} resizeMode='contain' style={{ width: 170, height: 150, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                        <View style={{ flexDirection: 'row', position: 'absolute', marginTop: 155 ,}}>
                            <Text style={{ fontWeight: '400', marginLeft: 10 }}>Coco</Text>
                            <Foundation name="female-symbol" size={20} color="#DC00FF" style={{ marginLeft: 9 }} />
                            <AntDesign name="hearto" size={18} color="#6B52C7" style={{ marginLeft: 65 }} />
                            <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 11, marginTop: 20, marginLeft: 10 }}>Jovem | Border Collie</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom: 10  }}>
                    <View style={{ backgroundColor: '#F0EFF4', width: 170, height: 200, borderRadius: 20, flexDirection: 'row', marginLeft:5 }}>
                        <Image source={require('../../assets/duck.jpg')} resizeMode='contain' style={{ width: 170, height: 150, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                        <View style={{ flexDirection: 'row', position: 'absolute', marginTop: 155 ,}}>
                            <Text style={{ fontWeight: '400', marginLeft: 10 }}>Coco</Text>
                            <Foundation name="female-symbol" size={20} color="#DC00FF" style={{ marginLeft: 9 }} />
                            <AntDesign name="hearto" size={18} color="#6B52C7" style={{ marginLeft: 65 }} />
                            <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 11, marginTop: 20, marginLeft: 10 }}>Jovem | Border Collie</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ backgroundColor: '#F0EFF4', width: 170, height: 200, borderRadius: 20, flexDirection: 'row', marginLeft:5  }}>
                        <Image source={require('../../assets/siames.jpg')} resizeMode='contain' style={{ width: 170, height: 150, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                        <View style={{ flexDirection: 'row', position: 'absolute', marginTop: 155 ,}}>
                            <Text style={{ fontWeight: '400', marginLeft: 10 }}>Coco</Text>
                            <Foundation name="female-symbol" size={20} color="#DC00FF" style={{ marginLeft: 9 }} />
                            <AntDesign name="hearto" size={18} color="#6B52C7" style={{ marginLeft: 65 }} />
                            <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 11, marginTop: 20, marginLeft: 10 }}>Jovem | Border Collie</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', marginBottom: 10  }}>
                    <View style={{ backgroundColor: '#F0EFF4', width: 170, height: 200, borderRadius: 20, flexDirection: 'row', marginLeft:5 }}>
                        <Image source={require('../../assets/persa.jpg')} resizeMode='contain' style={{ width: 170, height: 150, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                        <View style={{ flexDirection: 'row', position: 'absolute', marginTop: 155 ,}}>
                            <Text style={{ fontWeight: '400', marginLeft: 10 }}>Coco</Text>
                            <Foundation name="female-symbol" size={20} color="#DC00FF" style={{ marginLeft: 9 }} />
                            <Entypo name="heart" size={18} color="#6B52C7" style={{ marginLeft: 65 }} />
                            <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 11, marginTop: 20, marginLeft: 10 }}>Jovem | Border Collie</Text>
                            </View>
                        </View>
                    </View>

                    <View style={{ backgroundColor: '#F0EFF4', width: 170, height: 200, borderRadius: 20, flexDirection: 'row', marginLeft:5  }}>
                        <Image source={require('../../assets/angora.jpg')} resizeMode='contain' style={{ width: 170, height: 150, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
                        <View style={{ flexDirection: 'row', position: 'absolute', marginTop: 155 ,}}>
                            <Text style={{ fontWeight: '400', marginLeft: 10 }}>Coco</Text>
                            <Foundation name="female-symbol" size={20} color="#DC00FF" style={{ marginLeft: 9 }} />
                            <AntDesign name="hearto" size={18} color="#6B52C7" style={{ marginLeft: 65 }} />
                            <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontSize: 11, marginTop: 20, marginLeft: 10 }}>Jovem | Border Collie</Text>
                            </View>
                        </View>
                    </View>
                </View>




            </ScrollView>

        </SafeAreaView>

    )
}


