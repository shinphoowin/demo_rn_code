import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Button from '../../components/forms/Button';
import styles from '../../../styles';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Note = ({ secureNote, handleDecrypt, handleEncrypt, handleUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
 const [updatedText, setUpdatedText] = useState("");
 const [fakeKey, setFakeKey] = useState("");

  const handleSubmit = () => {
    if(updatedText == "") return;
    handleUpdate(secureNote.id, handleEncrypt(updatedText, fakeKey))
    setUpdatedText("")
    setIsEditing(false)
  }

  useEffect(() => {
    AsyncStorage.getItem("auth").then(res => setFakeKey(res))
  },[]);  

  const ViewTemplate = <View>
    <Text style={styles.colorPrimary}> {secureNote.text} </Text>
    <TouchableOpacity onPress={() => setIsEditing(true)}>
      <Text style={[styles.colorPrimary, styles.btnSmall]}>Edit</Text>
    </TouchableOpacity>
  </View>

  const EditTemplate = <View>
    {/* In real life project, this will be third party form component binding with Formik */}    
    <TextInput
      style={styles.inputStyle}
      autoCapitalize="none"
      autoCorrect={false}
      placeholder={handleDecrypt(secureNote.text, fakeKey)}
      placeholderTextColor="#6b7280"
      onChangeText={(text) => setUpdatedText(text)}
      value={updatedText || handleDecrypt(secureNote.text, fakeKey)}
      />
    <Button text="Update" onPress={handleSubmit}/>
    <TouchableOpacity onPress={() => setIsEditing(false)}>
      <Text style={[styles.colorPrimary, styles.btnSmall, styles.bgTransparent]}>Cancel</Text>
    </TouchableOpacity>
  </View>
  return (
    <View>
      {isEditing ? EditTemplate : ViewTemplate}
    </View>
  );
}
export default Note;
