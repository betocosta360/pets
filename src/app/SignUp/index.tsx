import { Link } from "expo-router"
import React from "react"
import { View, Text } from 'react-native'
import { TextInput, TouchableOpacity } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"
import { Divider } from 'react-native-paper';
import { AntDesign, Entypo } from '@expo/vector-icons';


export default function SignUp() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ flex: 1, marginTop: 15, padding: 20 }}>
        <Text style={{ fontSize: 25, fontWeight: '600' }}>Crie sua</Text>
        <Text style={{ fontSize: 25, fontWeight: '600' }}>conta agora</Text>
        <View style={{ marginTop: 50, width: '100%', justifyContent: 'center' }}>
          <TextInput
            placeholder="Nome"
            style={{
              borderWidth: 0.5,
              borderColor: 'gray',
              padding: 10,
              fontSize: 15,
              borderRadius: 30,
              marginBottom: 20,
              
            }}
          />
          <TextInput
            placeholder="E-mail"
            style={{
              borderWidth: 0.5,
              borderColor: 'gray',
              padding: 10,
              fontSize: 15,
              borderRadius: 30,
              marginBottom: 20
            }}
          />

          <TextInput
            placeholder="Senha"
            secureTextEntry={true}
            style={{
              borderWidth: 0.5,
              borderColor: 'gray',
              padding: 10,
              fontSize: 15,
              borderRadius: 30,
              
            }}
          />
        </View>
        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 30, width: '100%' }}>

          <TouchableOpacity style={{
            backgroundColor: '#6b52c7',
            width: 300,
            height: 60,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 30
          }}>
            <Link href={"/SignIn"}>
              <Text style={{ fontSize: 18, fontWeight: '500', color: 'white' }}>Crie sua conta</Text>
            </Link>
          </TouchableOpacity>

          <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 30 }}>
            <Divider style={{ width: '20%', borderWidth: 0.5, borderColor: 'gray', marginTop: 10, marginRight: 15 }} />
            <Text style={{ fontSize: 16, fontWeight: '400' }}>Ou use suas redes.</Text>
            <Divider style={{ width: '20%', borderWidth: 0.5, borderColor: 'gray', marginTop: 10, marginLeft: 15 }} />
          </View>

          <View style={{ marginTop: 30, flexDirection: 'row', justifyContent: "space-between" }}>
            <TouchableOpacity style={{ backgroundColor: 'black', marginRight: 30, width: 50, height: 50, borderRadius: 50, alignItems: 'center', justifyContent: 'center', elevation: 10 }}>
              <AntDesign name="apple1" size={35} color="white" />
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: 'white', width: 50, height: 50, borderRadius: 50, alignItems: 'center', justifyContent: 'center', elevation: 10 }}>
              <AntDesign name="google" size={30} color="red" />
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: 'white', marginLeft: 30, width: 50, height: 50, borderRadius: 50, alignItems: 'center', justifyContent: 'center', elevation: 10 }}>
              <Entypo name="facebook" size={30} color="blue" />
            </TouchableOpacity>

          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
            <Text style={{ fontSize: 15, fontWeight: '400', marginRight: 10 }}>
              Já tem uma conta?
            </Text>
            <TouchableOpacity>
              <Link href={"/SignIn"}>
              <Text style={{ fontSize: 14, fontWeight: '500', marginLeft: 10, color: '#6b52c7' }}>
                clique aqui
              </Text>
              </Link>
              
            </TouchableOpacity>

          </View>
        </View>

      </View>
    </SafeAreaView>
  )
}