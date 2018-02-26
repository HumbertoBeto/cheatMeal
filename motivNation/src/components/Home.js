import React, { Component } from 'react';
import { connect } from 'react-redux';
import { myGoalsPressed, myToolsPressed, myNationPressed } from '../actions';
import { Card, CardSection, Button } from './common';

class Home extends Component {

  onToolsButtonPressed() {
  this.props.myToolsPressed();
  }

  onNationButtonPressed() {
  this.props.myNationPressed();
  }

onGoalsButtonPressed() {
this.props.myGoalsPressed();
}

renderButtonC() {
  return (
    <Button onPress={this.onNationButtonPressed.bind(this)}>
      My Nation
    </Button>
  );
}

renderButtonB() {
  return (
    <Button onPress={this.onToolsButtonPressed.bind(this)}>
      My Tools
    </Button>
  );
}

  renderButtonA() {
   return (
     <Button onPress={this.onGoalsButtonPressed.bind(this)}>
       My Goals
     </Button>
   );
 }

    render() {
    return (
      <Card>
        <CardSection>
            {this.renderButtonA()}
        </CardSection>

        <CardSection>
          {this.renderButtonB()}
        </CardSection>

        <CardSection>
          {this.renderButtonC()}
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps,
  { myGoalsPressed, myNationPressed, myToolsPressed })(Home);
