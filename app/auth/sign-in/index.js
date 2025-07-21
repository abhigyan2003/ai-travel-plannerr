import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Colors from '../../../constants/Colors';
import { auth } from './../../../configs/FirebaseConfig';



export default function SignIn() {

    const navigation = useNavigation();
    const router = useRouter();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    useEffect(() => {
        navigation.setOptions({
            headerShown: false,

})
    },[])

  const onSignIn = () => {

    if(!email || !password) {
        Alert.alert('Please enter all details');
        return;
    }

    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    router.replace('/mytrip');
    console.log(user);
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage, error.code)
    if (errorCode === 'auth/invalid-credential') {
      Alert.alert('Invalid credentials.');
     
    }
  });
  }

  return (
    <View style={{
        padding: 25,
        backgroundColor: Colors.white,
        height: '100%',
        paddingTop: 40,
        
    }}><TouchableOpacity onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>


      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        marginTop: 30,
      }}> Let Sign you in</Text>
       <Text style={{
        fontFamily: 'outfit',
        fontSize: 30,
        color: Colors.gray500 ,
        marginTop: 20,
      }}> Welcome back</Text>
       <Text style={{
        fontFamily: 'outfit',
        fontSize: 30,
        marginTop: 10,
        color: Colors.gray500,
      }}> You have been missed.</Text>

      <View
      style={{
        marginTop: 50,}}
        >
        <Text style={{
        fontFamily: 'outfit',
        }}>Email</Text>

        <TextInput style={styles.input} 
        onChangeText={(value)=> setEmail(value)}
        placeholder='Enter Email'/>
      </View>

      
      <View
      style={{
        marginTop: 20,}}
        >
        <Text style={{
        fontFamily: 'outfit',
        }}>PassWord</Text>

        <TextInput secureTextEntry={true} style={styles.input} 
         onChangeText={(value)=> setPassword(value)}
        placeholder='Enter Password'/>
      </View>

      <TouchableOpacity onPress={onSignIn} style={{
        padding: 20,
        backgroundColor: Colors.primary,
        borderRadius: 15,
        marginTop: 50,
         borderWidth: 1}}>
        <Text style={{
            color: Colors.white,
            textAlign: 'center'
        }}>
        Sign in </Text>
      </TouchableOpacity>

       <TouchableOpacity 
       onPress={() => router.replace('auth/sign-up')}
       style={{
        padding: 20,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        marginTop: 20,
        borderWidth: 1,}}>
        <Text style={{
            color: Colors.primary,
            textAlign: 'center'
        }}>
        Create Account </Text>
      </TouchableOpacity>
    </View>

    
  )
}

const styles = StyleSheet.create({
    input: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.gray500,
    }
})