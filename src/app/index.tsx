import { Link } from "expo-router"
import React from "react"
import { View, Text, Image } from 'react-native'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { Divider } from 'react-native-paper';
import { AntDesign, Entypo } from '@expo/vector-icons';


export default function Welcome() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white', marginTop: 20 }}>
      <View style={{ width: '100%', padding: 15 }}>
        <Image source={require('../../assets/banner.jpg')} resizeMode="center" style={{ width: 360, height: 300 }} />
      </View>
      <View style={{ flex: 1, width: '100%', alignItems: 'center' }}>
        <Text style={{ fontSize: 30, fontWeight: '800' }}>Bem vindo ao</Text>
        <Text style={{ fontSize: 30, fontWeight: '800', marginBottom: 10 }}>patinhas</Text>
        <Text style={{ padding: 10, textAlign: 'center', fontSize: 12, fontWeight: '400', marginLeft: 20, marginRight: 20 }}>
          Encontre o seu cachorro ou gato favorito
          em um dos nossos abrigos mais fácil do que você imagina.
        </Text>
        <View style={{ flex: 1, marginVertical: 40, width: '100%', alignItems: 'center' }}>
          <TouchableOpacity style={{
            backgroundColor: '#6b52c7',
            width: 300,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30,
            elevation: 7
          }}>
            <Link href={"/SignUp"}>
              <Text style={{ fontSize: 18, fontWeight: '500', color: 'white' }}>Vamos Começar</Text>
            </Link>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 85 }}>
            <Text style={{ fontSize: 15, fontWeight: '400' }}>
              Já tem uma conta?
            </Text>
            <TouchableOpacity>
              <Link href={"/SignIn"}>
              <Text style={{ fontSize: 14, fontWeight: '500', marginLeft: 5, color: '#6b52c7' }}>
                clique aqui
              </Text>
              </Link>
              
            </TouchableOpacity>

          </View>

      </View>


    </SafeAreaView>
  )
}