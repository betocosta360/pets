import { Tabs } from "expo-router";

//import "../global.css";
import { MaterialIcons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';

export default function TabRoutesLayout() {
    return (
        <Tabs screenOptions={{ headerShown: false,  }}>
            <Tabs.Screen
                name="home"
                options={{
                    title: "Inicio",
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="home" size={24} color="black" />
                    )
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: "Explore",
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="pets" size={24} color="black" />
                    )
                }}
            />
            <Tabs.Screen
                name="favorite"
                options={{
                    title: "Favoritos",
                    tabBarIcon: ({ size, color }) => (
                        <MaterialIcons name="favorite" size={24} color="black" />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Perfil",
                    tabBarIcon: ({ size, color }) => (
                        <Entypo name="user" size={24} color="black" />
                    )
                }}
            />


           
           

        </Tabs>
    )
}