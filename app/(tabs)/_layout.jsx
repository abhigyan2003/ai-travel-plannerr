import { Tabs } from 'expo-router';
import Login from "../../components/Login";
import { auth } from "../../configs/FirebaseConfig";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Colors } from './../../constants/Colors';



export default function TabLayout() {
  
  return (
   <Tabs screenOptions={{
    headerShown: false,
    tabBarActiveTintColor: Colors.primary,
   }} >
    
    <Tabs.Screen name="mytrip" 
    options={{
        tabBarLabel: 'My Trip',
        tabBarIcon: ({ color }) =><Ionicons name="location-sharp" size={24} color="black" />,

    }}
    
    /> 
    <Tabs.Screen name="discover" 
    options={{
        tabBarLabel: 'Discover',
        tabBarIcon: ({ color }) =><Ionicons name="globe-sharp" size={24} color="black" />,

    }}/>   
    <Tabs.Screen name="profile" 
    options={{
        tabBarLabel: 'Profile',
        tabBarIcon: ({ color }) =><Ionicons name="people-circle" size={24} color="black" />,

    }}/>
   </Tabs>
  )
}