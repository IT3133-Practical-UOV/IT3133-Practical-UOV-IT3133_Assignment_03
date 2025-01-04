import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import { TextInput } from 'react-native-paper';
import { useState } from 'react';

export default function Login({ navigation }) {

  const [form, setForm] = useState({
    username:'',
    password:''
  });
  const [showpassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>

      <View style={styles.logoContainer}>
        <Logo />
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.title}>STUDENT LOGIN</Text>
        <TextInput
            label="Email"
            style={styles.input}
            mode='outlined'
            value={form.username}
            onChangeText={(text) => setForm({
              ...form,
              username:text
            })}
        />
        <TextInput
          label="Password"
          secureTextEntry={!showpassword}
          style={styles.input}
          right={<TextInput.Icon 
            icon={showpassword? 'eye-off': 'eye'}
            onPress={() => setShowPassword(!showpassword)} />}
          mode='outlined'
          value={form.password}
          onChangeText={(text) => setForm({
            ...form,
            password:text
          })}
    />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('BottomTabs')}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footerContainer}>
        <Footer />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  footerContainer: {
    flex: 0.5,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  title: {
    marginTop:-50,
    paddingBottom:100,
    fontSize: 32,
    fontWeight: 'semibold',
    marginBottom: 50,
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#4b0150',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
