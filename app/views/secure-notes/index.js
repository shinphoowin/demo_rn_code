import React, { useEffect, useState } from 'react';
import { View, TextInput, Alert, Text, TouchableOpacity } from 'react-native';
import styles from '../../../styles';
import Button from '../../components/forms/Button';
import { handleEncrypt } from '../../helpers';
import AsyncStorage from '@react-native-async-storage/async-storage';

const NotesEncrypted = ({ navigation }) => {
  const [secureNotes, setSecureNotes] = useState([]);
  const [inputText, setInputText] = useState("");
  const [fakeKey, setFakeKey] = useState("");

  const handleAddNotes = () => {
    if (inputText == "") {
      Alert.alert("add your important note");
      return;
    };
    const secureNote = { id: Date.now(), text: handleEncrypt(inputText, fakeKey) }
    setSecureNotes([...secureNotes, secureNote]);
    setInputText("");
    navigation.navigate("NotesencryptedList", {
      secureNotes: secureNotes
    })
  }

  useEffect(() => {
    AsyncStorage.getItem("auth").then(res => {
      setFakeKey(res);
    })
  })

  const handleLogout = () => {
    AsyncStorage.removeItem("auth");
    navigation.navigate("LoginBiometric");
  }

  return (
    <View style={[styles.container_nocenterCnt]}>
      <Text style={styles.textColorBlack}>Create Secure Note</Text>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={[styles.textColorBlack, { fontSize: 17, textAlign: "right" }]}>Logout</Text>
      </TouchableOpacity>

      <View style={styles.spacerLarge} />
      <TextInput
        style={styles.inputStyle}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setInputText(text)}
        placeholder="Create Secure Notes"
        placeholderTextColor="#6b7280"
        value={inputText} />
      <View style={styles.spacerLarge} />
      <Button onPress={handleAddNotes} text={"Submit"} />
    </View>
  );
}

export default NotesEncrypted;
