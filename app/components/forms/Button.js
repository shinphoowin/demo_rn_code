import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from '../../../styles';

class Button extends Component {
  render() {
    const { onPress, text } = this.props;
    return (
      <TouchableOpacity
        onPress={onPress}>
        <Text style={styles.buttonLike}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

export default Button;
