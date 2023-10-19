import React, { useState } from 'react';
import { View, TextInput, Alert, Platform } from 'react-native';
import Button from '../../components/forms/Button';
import styles from '../../../styles';
import ReactNativeBiometrics, { BiometryTypes } from 'react-native-biometrics';

const LoginBiometric = ({ navigation }) => {
  const [password, setPassword] = useState("")

  const handlesimplePromptShow = (rnBiometrics) => {
    rnBiometrics.simplePrompt({ promptMessage: 'Confirm fingerprint' })
      .then((resultObject) => {
        const { success } = resultObject;
        if (success) {
          rnBiometrics.createKeys()
            .then(async (resultObject) => {
              const { publicKey } = resultObject
              //await AsyncStorage.setItem("userId", credentialId);

              // call api to save key to server, that will use to extract userId
              // sendPublicKeyToServer(publicKey)
              navigation.navigate('Notesencrypt');
            })
        } else {
          console.log('user cancelled biometric prompt')
        }
      })
      .catch(() => {
        console.log('biometrics failed')
      })
  }

  const handleAddBiometricLogin = async () => {
    /* 
     * In real life project, this credentialId will be accesed from redux rtk store
     */
    // let credentialId = "";

    /* 
    * ANDROID Biometrics
    */
    if (Platform.OS == "android") {
      const rnBiometrics = new ReactNativeBiometrics({ allowDeviceCredentials: true });
      rnBiometrics.isSensorAvailable()
        .then(async (resultObject) => {
          const { available, biometryType } = resultObject;
          if (available && biometryType === BiometryTypes.Biometrics) {
            handlesimplePromptShow(rnBiometrics);
          } else {
            console.log('Biometrics not supported')
            Alert.alert("password login popup will show");
            return;
          }
        })
    }

    /* 
     * IOS Biometrics
     */
    if (Platform.OS == "ios") {
      const rnBiometrics = new ReactNativeBiometrics();
      const { available, biometryType } = await rnBiometrics.isSensorAvailable();
      if (available && biometryType === BiometryTypes.FaceID) {
        //FaceId and fallback
      } else {
        console.log('Biometrics not supported');
        Alert.alert("Password Login form will show");
      }
      
      //TouchId and fallback
      if (biometryType === BiometryTypes.TouchID) {
        handlesimplePromptShow(rnBiometrics);
      } else {
        console.log('Biometrics not supported')
        Alert.alert("Biometrics not support!", "Password Login form will show");
        return;
      }
    }
  }

  const handlePasswordLogin = async () => {
    if (password === "12345678") {
      navigation.navigate("Notesencrypt");
      //save data to localStorage to persist login state or dispatch redux auth fun in real life project
    }else{
        Alert.alert("12345678 is pwd :D")
    }
  }
  return (
    <View style={[styles.container, styles.mainContainer]}>
      <TextInput
        style={styles.inputStyle}
        autoCorrect={false}
        onChangeText={password => setPassword(password)}
        placeholder="Enter Password"
        placeholderTextColor="#6b7280"
        secureTextEntry={true}
        value={password}
      />
      <View style={styles.spacerLarge} />
      <Button onPress={handlePasswordLogin} text={"Login"} />
      <View style={styles.spacerSmall} />
      <Button onPress={handleAddBiometricLogin} text={"Finger Print"} />
    </View>
  );
}
export default LoginBiometric;
