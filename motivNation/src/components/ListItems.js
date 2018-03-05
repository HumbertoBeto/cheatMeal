import React, { Component } from 'react';
import { Text } from 'react-native';
import { CheckBox } from 'native-base';
import { CardSection } from './common';

class ListItems extends Component {
  render() {
    const { goal_name } = this.props.goal;

    return (
      <CardSection>
        <CheckBox checked={false} />
        <Text style={styles.titleStyle}>
          {goal_name}
        </Text>
      </CardSection>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 25,
    paddingLeft: 25
  }
};

export default ListItems;
