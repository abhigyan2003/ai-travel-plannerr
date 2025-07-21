import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import { useRouter } from 'expo-router';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from '../../../constants/Colors';
import { auth } from './../../../configs/FirebaseConfig';



export default function SignUp() {
    const navigation = useNavigation();
    const router = useRouter();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [fullName, setFullName] = useState(); 


    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const OnCreateAccount = () => {

        if(!email || !password || !fullName) {
            Alert.alert('Please enter all details');
            return;
        }
           console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);

        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user);
    router.replace('/mytrip');

    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log("--",errorMessage,error.code);
    // ..
  });
    };

  return (
    <View
    style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.white,
        height: '100%',
        }}>
        <TouchableOpacity onPress={() => router.back()}>
        <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>

      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        marginTop: 30,
      }}>Create new account</Text>



      <View
            style={{
              marginTop: 50,}}
              >
              <Text style={{
              fontFamily: 'outfit',
              }}>Full Name</Text>
      
              <TextInput
                style={styles.input}
                placeholder='Enter Full Name'
                onChangeText={setFullName}
                value={fullName}
              />
            </View>
      
           < View
            style={{
              marginTop: 20,}}
              >
              <Text style={{
              fontFamily: 'outfit',
              }}>Email</Text>
      
              <TextInput
                style={styles.input}
                placeholder='Enter Email'
                onChangeText={setEmail}
                value={email}
              />
            </View>
      
            <View
            style={{
              marginTop: 20,}}
              >
              <Text style={{
              fontFamily: 'outfit',
              }}>Password</Text>
      
              <TextInput
                secureTextEntry={true}
                style={styles.input}
                placeholder='Enter Password'
                onChangeText={setPassword}
                value={password}
              />
            </View>


        <TouchableOpacity onPress={ OnCreateAccount } style={{
        padding: 20,
        backgroundColor: Colors.primary,
        borderRadius: 15,
        marginTop: 15,
         borderWidth: 1}}>
        <Text style={{
            color: Colors.white,
            textAlign: 'center'
        }}>
        Create Account </Text>
      </TouchableOpacity>

                
   
    <TouchableOpacity 
       onPress={() => router.replace('auth/sign-in')}
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
        Sign in </Text>
      </TouchableOpacity>



    </View>
  )
};

const styles = StyleSheet.create({
      input: {
        padding: 15,
        borderWidth: 1,
        borderRadius: 15,
        borderColor: Colors.gray500,
      }})