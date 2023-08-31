import React, { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar } from 'react-native-paper';
import { Entypo, Ionicons, Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function AppBar() {
    return (
        <SafeAreaView style={{ flex: 1, width: '100%' }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start', margin: 20 }}>
                <Avatar.Image size={50} source={require('../../assets/avatar.png')} />
                <TouchableOpacity
                    style={{
                        marginLeft: 200,
                        width: 40,
                        height: 40,
                        borderRadius: 50,
                        backgroundColor: '#F3F0FB',
                        alignItems: 'center',
                        justifyContent: 'center',
                        elevation: 5
                    }}>
                    <Feather name="search" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    marginLeft: 20, width: 40,
                    height: 40,
                    borderRadius: 50,
                    backgroundColor: '#F3F0FB',
                    alignItems: 'center',
                    justifyContent: 'center',
                    elevation: 5
                }}>
                    <Ionicons name="notifications" size={30} color="black" />
                </TouchableOpacity>
                <View style={{ position: 'absolute', marginLeft: 55 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={{ fontSize: 15, fontWeight: '400', color: 'gray' }}>Localização</Text>
                        <Feather name="chevron-down" size={24} color="#6b52c7" />
                    </View>
                    <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Salvador, BA</Text>
                </View>
            </View>

        </SafeAreaView>
    )
}