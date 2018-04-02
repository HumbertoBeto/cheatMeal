import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button } from 'native-base';
import { CardSection } from './common';

class ListItems extends Component {


onButtonPress() {

  }

  render() {
    const { goal_name } = this.props.goal;

    return (
        <CardSection>
          <Button
          bordered dark style={styles.titleStyle}
          onPress={this.onButtonPress.bind(this)}
          >
            <Text style={styles.textStyle}>
            {goal_name}
            </Text>
          </Button>
        </CardSection>

    );
  }
}

const styles = {
  titleStyle: {
    flex: 1
  },
  textStyle: {
    textAlign: 'center',
  }
};

export default ListItems;
