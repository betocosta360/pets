import { Tabs } from "expo-router";

import { MaterialIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';

export default function TabRoutesLayout() {
    return (
        <Tabs screenOptions={{ 
            headerShown: false,
           tabBarActiveBackgroundColor:'transparent',
            tabBarLabelStyle: { 
                marginBottom: 12, // Adicione margem inferior ao texto
                fontSize: 13,
                fontWeight:'600',   // Tamanho da fonte do texto
                color: '#6b52c7',
                 // Cor do texto
            },
            
            tabBarIconStyle: {
                marginTop: 10,
                
            },
            tabBarStyle: {
                backgroundColor: '#ffffff',
                height: 70,
                elevation: 0,
                width: '100%',
                
                
            },  }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Inicio",
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="home" size={24} color="#6b52c7" />
                    )
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: "Explore",
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="pets" size={24} color="#6b52c7" />
                    )
                }}
            />
            <Tabs.Screen
                name="favorite"
                options={{
                    title: "Favoritos",
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="favorite" size={24} color="#6b52c7" />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="user" size={24} color="#6b52c7" />
                    )
                }}
            />
            
            
        </Tabs>
    )
}