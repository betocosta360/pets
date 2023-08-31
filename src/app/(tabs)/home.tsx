import React, { SafeAreaView, View, Text } from 'react-native'
import AppBar from '../../components/AppBar'
import { MaterialCommunityIcons, FontAwesome5 } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import CardHome from '../../components/Card';
import { Link } from 'expo-router';


export default function Home() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <AppBar />
            <View style={{ marginTop: -370, padding: 30, }}>
                <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 15 }}>Categorias</Text>
            </View>
            <View style={{  flexDirection: 'row', width: '100%', justifyContent: 'space-between',  marginTop: 10 }}>

                <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#F3F0FB', width: 110, height: 40, marginLeft: 20, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <Link href={'/filter'}>
                    <MaterialCommunityIcons name="not-equal-variant" size={20} color="black" style={{marginRight:10}} />
                    <Text style={{ fontSize: 14, fontWeight: '600' }}>Filtro</Text>s
                    </Link>
                    
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#F3F0FB', width: 110, height: 40, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <Link href={'/dog'}>
                    <FontAwesome5 name="cat" size={20} color="black" style={{marginRight:10}}/>
                    <Text style={{ fontSize: 14, fontWeight: '600' }}>Gato</Text>
                    </Link>
                    
                </TouchableOpacity>

                <TouchableOpacity style={{ flexDirection: 'row', backgroundColor: '#F3F0FB', width: 130, height: 40, marginRight: 20, borderRadius: 20, alignItems: 'center', justifyContent: 'center' }}>
                    <FontAwesome5 name="dog" size={20} color="black" style={{marginRight:10}} />
                    <Text style={{ fontSize: 14, fontWeight: '600' }}>Cachorro</Text>
                </TouchableOpacity>
            </View>
            <View style={{flex:1,marginTop: -10, padding:15}}>
            <CardHome />
            </View>

        </SafeAreaView>
    )
}