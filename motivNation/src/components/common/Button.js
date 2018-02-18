import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: 'center', //center in button
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600', // boldness or thinness
    paddingTop: 10, //space above and below button
    paddingBottom: 10
  },
  buttonStyle: {
    flex: 1, //expand to fill as much content as it can
    alignSelf: 'stretch', // stretch to fill limits of container
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5
  }
};

export { Button };
