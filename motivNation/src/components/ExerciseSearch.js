import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';

class ExerciseSearch extends Component {

    render() {
    return (
      <Container>
          <Header searchBar rounded>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Search Exercise" />
              <Icon name="ios-people" />
            </Item>
            <Button transparent>
              <Text>Find!</Text>
            </Button>
          </Header>
        </Container>
    );
  }
}

export default ExerciseSearch;
