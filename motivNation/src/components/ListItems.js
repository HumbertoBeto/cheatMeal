import React, { Component } from 'react';
import { Text } from 'react-native';
//import { Button } from 'native-base';
import { CardSection, Confirm, Card, Button } from './common';

class ListItems extends Component {
  state = { showModal: false };

onButtonPress() {

  }

  render() {
    const { goal_name } = this.props.goal;

    return (
      <Card>
        <CardSection>
          <Button>
            {goal_name}
          </Button>
        </CardSection>

        <CardSection>
          <Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
            <Text>Finished it?</Text>
          </Button>
        </CardSection>

        <Confirm
          visible={this.state.showModal}
        >
          Did you complete this goal?
        </Confirm>
      </Card>

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
