import { useNavigation } from '@react-navigation/native';
import Constants from 'expo-constants';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Colors from './../../constants/Colors';

const googleMapsApiKey = Constants.expoConfig.extra?.EXPO_PUBLIC_GOOGLE_MAP_KEY;
console.log("Google Maps Key (Constants):", googleMapsApiKey);

export default function SearchPlace() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerShown: true,
      headerTransparent: true,
      headerTitle: 'Search',
    });
  }, []);

  if (!googleMapsApiKey) {
    console.error('Google Maps API key is missing. Please set EXPO_PUBLIC_GOOGLE_MAP_KEY in .env or app.config.js');
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Missing Google Maps API Key</Text>
      </View>
    );
  }

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 75,
        backgroundColor: Colors.WHITE,
        height: '100%',
      }}
    >
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={(data, details = null) => {
          console.log(data, details);
        }}
        query={{
          key: googleMapsApiKey,
          language: 'en',
        }}
      />
    </View>
  );
}