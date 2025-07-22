import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, TouchableOpacity, View } from 'react-native';
import { Colors } from './../../constants/Colors';
import { useRouter } from 'expo-router';

export default function StartNewTripCard() {

    const router = useRouter();
  return (
    <View
    style={{
        marginTop: 50,
        padding: 20,
        display: 'flex',
        alignItems: 'center',
    gap: 25,}}
        >
      <Ionicons name="location-sharp" size={24} color="black" />
      <Text style={{
        fontSize: 25,
        fontFamily: 'outfit-medium',
        marginTop: 10,}}>
        No Trips planned yet.
      </Text>

      <Text style={{
        fontSize: 20,
        fontFamily: 'outfit',
        marginTop: 10,
        textAlign: 'center',
        color: Colors.gray500,}}>
            
        Looks like its time to plan a new travel experience !! Get started Below.
      </Text>


      <TouchableOpacity
      onPress={() => router.push('/create-trip/search-place')}
      style={{
        padding: 15,
        backgroundColor: Colors.primary,
        borderRadius: 15,
        paddingHorizontal: 30,}}
        >
        <Text style={{
            color: Colors.white,
            fontFamily: 'outfit-medium',
            fontSize: 17,}}>
            Start a new trip.
        </Text>
      </TouchableOpacity>
    </View>
  )
}