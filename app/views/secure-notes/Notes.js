import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from '../../../styles';
import Note from './Note';
import { handleDecrypt, handleEncrypt } from '../../helpers';

const NotesEncryptedList = ({ route, navigation }) => {
  const {secureNotes} = route.params;

  const handleUpdate = (id, updateText) => {
    secureNotes.map(secureNote => {
      if (secureNote.id === id) {
        secureNote.text = updateText;
      }
      return secureNote;
    })
  }

  const NotesList = secureNotes.map(secureNote =>
    <Note key={secureNote.id}
      style={{ color: '#000' }}
      secureNote={secureNote}
      handleDecrypt={handleDecrypt}
      handleEncrypt={handleEncrypt}
      handleUpdate={handleUpdate}
    />)

  return (
    <View style={[styles.container_nocenterCnt]}>
      <View>
        <Text style={styles.textColorBlack}>Your Secure Notes</Text>
        {NotesList}
      </View>
    </View>
  );
}

export default NotesEncryptedList;
