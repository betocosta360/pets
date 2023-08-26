import { Link } from "expo-router"
import React from "react"
import {View, Text} from 'react-native'
import { TouchableOpacity } from "react-native-gesture-handler"
import { SafeAreaView } from "react-native-safe-area-context"


export default function Welcome(){
    return(
        <SafeAreaView>
            <View>
            <TouchableOpacity style={{backgroundColor: 'black',width: '100%', marginLeft: 200,
            marginBottom: 30, borderRadius: 10}}>

          <View style={{
            padding:15,
            marginLeft: 30
            
          }}>

            <Link href={"/home"}>
              <Text style={{ fontSize: 20, fontWeight: '600', marginLeft: 20, color: 'white' }}>ENTRAR</Text>
              
            </Link>

          </View>
        </TouchableOpacity>
                
            </View>
        </SafeAreaView>
    )
}