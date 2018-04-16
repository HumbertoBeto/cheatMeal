import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Item, Input, Icon, Button, Text, Content, Footer, FooterTab } from 'native-base';
import { fetchExercise } from '../actions';

class ExerciseSearch extends Component {

  onExerciseSearchButtonPressed() {
  this.props.fetchExercise();
  }

    render() {
    return (
      <Container>
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical onPress={this.onExerciseSearchButtonPressed.bind(this)}>
              <Icon name="apps" />
              <Text>Arms</Text>
            </Button>
            <Button vertical>
              <Icon name="apps" />
              <Text>Chest</Text>
            </Button>
            <Button vertical active>
              <Icon active name="apps" />
              <Text>Delts</Text>
            </Button>
            <Button vertical>
              <Icon name="apps" />
              <Text>Back</Text>
            </Button>
            <Button vertical>
              <Icon name="apps" />
              <Text>Legs</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default connect(null, { fetchExercise })(ExerciseSearch);
