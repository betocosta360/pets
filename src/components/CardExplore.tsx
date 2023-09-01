import * as React from 'react';
import { Image, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Avatar, Button, Card, Text } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';



export default function CardExplore() {
    return (

        <SafeAreaView style={{ backgroundColor: 'white', marginTop: -5 }}>
            <ScrollView showsVerticalScrollIndicator={false}>

            <View style={{ marginBottom: 20, position: 'relative', borderRadius: 50 , borderWidth: 0.3, }}>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../../assets/patas.jpg')} resizeMode='center' style={{width: 300, height: 200, borderRadius: 30}}/>
                    </View>
                   
                    <Card.Content>
                        <View style={{ alignItems: 'center', elevation: 5, marginTop: -50 }}>
                            <Text style={{ position: 'absolute', fontSize: 20, color: 'blue', fontWeight: '500', zIndex: 1, marginTop: -130, textAlign: 'center', justifyContent: 'center' }} variant="bodyMedium">
                                Card content 1
                            </Text>
                        </View>
                    </Card.Content>
                </View>


                <View style={{ marginBottom: 20, position: 'relative', borderRadius: 50 , borderWidth: 0.3, }}>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../../assets/patas.jpg')} resizeMode='center' style={{width: 300, height: 200, borderRadius: 30}}/>
                    </View>
                   
                    <Card.Content>
                        <View style={{ alignItems: 'center', elevation: 5, marginTop: -50 }}>
                            <Text style={{ position: 'absolute', fontSize: 20, color: 'blue', fontWeight: '500', zIndex: 1, marginTop: -130, textAlign: 'center', justifyContent: 'center' }} variant="bodyMedium">
                                Card content
                            </Text>
                        </View>
                    </Card.Content>
                </View>

                <View style={{ marginBottom: 20, position: 'relative', borderRadius: 50 , borderWidth: 0.3, }}>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../../assets/patas.jpg')} resizeMode='center' style={{width: 300, height: 200, borderRadius: 30}}/>
                    </View>
                   
                    <Card.Content>
                        <View style={{ alignItems: 'center', elevation: 5, marginTop: -50 }}>
                            <Text style={{ position: 'absolute', fontSize: 20, color: 'blue', fontWeight: '500', zIndex: 1, marginTop: -130, textAlign: 'center', justifyContent: 'center' }} variant="bodyMedium">
                                Card content
                            </Text>
                        </View>
                    </Card.Content>
                </View>

                <View style={{ marginBottom: 20, position: 'relative', borderRadius: 50 , borderWidth: 0.3, }}>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../../assets/patas.jpg')} resizeMode='center' style={{width: 300, height: 200, borderRadius: 30}}/>
                    </View>
                   
                    <Card.Content>
                        <View style={{ alignItems: 'center', elevation: 5, marginTop: -50 }}>
                            <Text style={{ position: 'absolute', fontSize: 20, color: 'blue', fontWeight: '500', zIndex: 1, marginTop: -130, textAlign: 'center', justifyContent: 'center' }} variant="bodyMedium">
                                Card content
                            </Text>
                        </View>
                    </Card.Content>
                </View>

                <View style={{ marginBottom: 20, position: 'relative', borderRadius: 50 , borderWidth: 0.3, }}>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../../assets/patas.jpg')} resizeMode='center' style={{width: 300, height: 200, borderRadius: 30}}/>
                    </View>
                   
                    <Card.Content>
                        <View style={{ alignItems: 'center', elevation: 5, marginTop: -50 }}>
                            <Text style={{ position: 'absolute', fontSize: 20, color: 'blue', fontWeight: '500', zIndex: 1, marginTop: -130, textAlign: 'center', justifyContent: 'center' }} variant="bodyMedium">
                                Card content
                            </Text>
                        </View>
                    </Card.Content>
                </View>

                <View style={{ marginBottom: 20, position: 'relative', borderRadius: 50 , borderWidth: 0.3, }}>
                    <View style={{alignItems:'center'}}>
                        <Image source={require('../../assets/patas.jpg')} resizeMode='center' style={{width: 300, height: 200, borderRadius: 30}}/>
                    </View>
                   
                    <Card.Content>
                        <View style={{ alignItems: 'center', elevation: 5, marginTop: -50 }}>
                            <Text style={{ position: 'absolute', fontSize: 20, color: 'blue', fontWeight: '500', zIndex: 1, marginTop: -130, textAlign: 'center', justifyContent: 'center' }} variant="bodyMedium">
                                Card content
                            </Text>
                        </View>
                    </Card.Content>
                </View>


            </ScrollView>
        </SafeAreaView>

    )
}



