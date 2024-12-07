import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { normalizeWidth, normalizeHeight } from './utils';
import Background from './Background';
import {useNavigation} from '@react-navigation/native';
import React, { useState } from 'react';
import Toast from 'react-native-toast-message';
export default function App1() {
  const navigation = useNavigation();
  const [email, setEmaill] = useState('');
  const handleSignin = () => {
    if (email.trim() === '') {
      Toast.show({
        type: 'error',
        text1: 'You must enter an email address',
      });
    } else{
      navigation.navigate("App2", {email: email});
    }
  };
  return (
    <View style={styles.fundal}>
      <Background />


      <View style={styles.form}>
        <View style={styles.text_box}>
            <Text style={styles.title}>Sign in to FlowSpace</Text>
            <Text style={styles.enter}>Enter your account details below</Text>
            <TextInput placeholder="Email Adress" placeholderTextColor={"grey"} style={styles.text_input} onChangeText={setEmaill}/>
            <TouchableOpacity style={styles.btn}
              onPress={handleSignin} >
                <Text style={styles.btnText}>Sign in</Text>
            </TouchableOpacity>
          <View style={styles.nu_ai_cont}>
              <Text style={styles.nac_text}>Don't have an account?</Text>
              <TouchableOpacity style={styles.nac_btn}>
                  <Text style={styles.nac_btn_text}>Sign up</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>

      <StatusBar style="auto" />
      <Toast/>
    </View>
  );
}

const styles = StyleSheet.create({
  fundal: {
    backgroundColor: '#2c1e33',
    position: 'relative',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    width: '85%',
    height: normalizeHeight(550),
    backgroundColor: '#200f29',
    borderTopLeftRadius: '20%',
    borderTopRightRadius: 35,
    borderBottomRightRadius: '16%',
    borderBottomLeftRadius: 35,
  },
  text_box: {
    position: 'relative',
    top: normalizeHeight(50),
    left: normalizeWidth(20),
  },
  title: {
    color: 'grey',
    fontSize: normalizeWidth(22),
    fontWeight: 'bold',
  },
  enter: {
    top: normalizeHeight(10),
    color: 'grey',
    fontSize: normalizeWidth(10),
  },
  text_input: {
    position: 'relative',
    top: normalizeHeight(145),
    width: '90%',
    height: 40,
    left: normalizeWidth(-5),
    fontSize: normalizeWidth(15),
    borderBottomWidth: 1,
    borderBottomColor: 'grey',
    borderRadius: 10,
    paddingLeft: 10,
    paddingBottom: 7,
    color: 'grey',
  },
  btn: {
    top: normalizeHeight(160),
    width: '90%',
    height: normalizeHeight(40),
    backgroundColor: '#521c69',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'grey',
    left: normalizeWidth(-5),
  },
  btnText: {
    color: 'grey',
    fontSize: normalizeWidth(15),
    lineHeight: 40,
    fontWeight: 'bold',
  },
  nu_ai_cont: {
    top: normalizeHeight(300),
    gap: 17,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    left: normalizeWidth(-20),
  },
  nac_text: {
    color: 'grey',
    fontSize: normalizeWidth(13),
  },
  nac_btn: {
    marginLeft: 5,
    padding: 5,
    backgroundColor: '#2c1e33',
  },
  nac_btn_text: {
    color: 'grey',
    fontSize: normalizeWidth(13),
    fontWeight: 'bold',
  },
});
