import React, { SafeAreaView, View, Text } from 'react-native'
import { ScrollView, TextInput } from 'react-native-gesture-handler'
import { EvilIcons } from '@expo/vector-icons';
import CardExplore from '../../components/CardExplore';

export default function Explore() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ width: "100%", marginTop: 30, alignItems: 'center' }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}>
                    <TextInput
                        placeholder='Pesquisar'
                        style={{
                            borderWidth: 0.3,
                            borderColor: 'gray',
                            fontSize: 16,
                            textAlign:'left',
                            color: 'gray',
                            padding: 10,
                            width: '90%',
                            borderRadius: 10, 
                            paddingLeft: 50,
                        }} />
                    <EvilIcons name="search" size={30} color="gray" style={{
                        position:'absolute',
                        paddingLeft:25,
                        marginTop: 20
                    }} />
                </View>
                <View style={{width: '90%'}}>
                <CardExplore/>
                </View>
               
            </View>
        </SafeAreaView>
    )
}