import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
  return ( // passing props from albumDetail
    <View style={styles.containerStyle}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderWidth: 1, //give the container a border
    borderRadius: 2, // rounded corners
    borderColor: '#ddd', // color
    borderBottomWidth: 0,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, // making it see through
    shadowRadius: 2, //rounded shadow
    elevation: 1,
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10
  }
};

export { Card };
