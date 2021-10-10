import React, {useState} from 'react';
import {TextInput, View} from 'react-native';

const Input = ({placeholder, value}) => {
  const [onChangText, set] = useState();
  const [isFocused, sefFocus] = useState(0.6);
  return (
    <View>
      <TextInput
        value={value}
        placeholder={placeholder}
        onFocus={() => sefFocus(1)}
        onBlur={() => sefFocus(0.6)}
        style={{
          color: '#fff',
          opacity: isFocused,
          borderBottomWidth: 4,
          borderBottomColor: '#fff',
        }}
        placeholderTextColor={'#fff'}></TextInput>
    </View>
  );
};

export default Input;
