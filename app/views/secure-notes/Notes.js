import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../../styles';
import Note from './Note';
import { handleDecrypt, handleEncrypt } from '../../helpers';

const NotesEncryptedList = ({ route, navigation }) => {

  const handleUpdate = (id, updateText) => {
    route?.params?.secureNotes?.map(secureNote => {
      if (secureNote.id === id) {
        secureNote.text = updateText;
      }
      return secureNote;
    })
  }

  const NotesList = route?.params?.secureNotes?.map(secureNote =>
    <Note key={secureNote.id}
      style={{ color: '#000' }}
      secureNote={secureNote}
      handleDecrypt={handleDecrypt}
      handleEncrypt={handleEncrypt}
      handleUpdate={handleUpdate}
    />)

  return (
    <View style={[styles.container_nocenterCnt]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.textColorBlack}>Back</Text></TouchableOpacity>
      <View style={{ marginTop: 0 }}>
        <Text style={styles.textColorBlack}>Your Secure Notes</Text>
        {NotesList}
      </View>
    </View>
  );
}

export default NotesEncryptedList;
