import React, { useState } from 'react';
import { View, TextInput, Alert } from 'react-native';
import styles from '../../../styles';
import Button from '../../components/forms/Button';
import { handleEncrypt } from '../../helpers';

const NotesEncrypted = ({ navigation }) => {
  const [secureNotes, setSecureNotes] = useState([]);
  const [inputText, setInputText] = useState(""); 
   
  const handleAddNotes = () => {
    if (inputText == "") {
      Alert.alert("add your important note");
      return;
    };
    const secureNote = { id: Date.now(), text: handleEncrypt(inputText) }    
    setSecureNotes([...secureNotes, secureNote]);
    setInputText("")
    navigation.navigate("NotesencryptedList", {
      secureNotes: secureNotes
    })
  }
  
  return (
    <View style={[styles.container_nocenterCnt]}>
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
