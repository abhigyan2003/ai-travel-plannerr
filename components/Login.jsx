import React from 'react';
import { Image, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; 


export default function Login() {


    const router= useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('./../assets/images/login.png')}
        resizeMode="cover"
        style={{ width: 350, height: 450, marginBottom: 20 }}
      />

      <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 10, textAlign: 'center' }}>
        AI Travel Planner
      </Text>

      <Text style={{ fontSize: 14, textAlign: 'center', color: '#444', marginBottom: 20 }}>
        Discover your next adventure effortlessly. Personalized itineraries at your fingertips.
      </Text>

      <TouchableOpacity style={styles.button}
        onPress={() => 
          router.push('auth/sign-in')
        }>

            
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#007AFF', // Your primary color
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 30,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
