import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goalUpdate, goalCreate } from '../actions';
import { Card, CardSection, Input, Button } from './common';

class GoalCreate extends Component {
  onButtonPressed() {
    const { goal_name } = this.props;
    this.props.goalCreate({ goal_name });
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="I will:"
            placeholder="Type Goal Here"
            value={this.props.goal_name}
            onChangeText={text => this.props.goalUpdate({ prop: 'goal_name', value: text })}
          />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPressed.bind(this)}>
            Create Goal!
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = (state) => {
  const { goal_name } = state.goalForm;
  return { goal_name };
};

export default connect(mapStateToProps, { goalUpdate, goalCreate })(GoalCreate);
