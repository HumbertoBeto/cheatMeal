import React, { Component } from 'react';
import { Container, Icon, Button, Text, Content, Footer, FooterTab } from 'native-base';

class FoodSearch extends Component {

    render() {
    return (
      <Container>
        <Content />
        <Footer>
          <FooterTab>
            <Button vertical>
              <Icon name="apps" />
              <Text>BreakFast</Text>
            </Button>
            <Button vertical>
              <Icon name="apps" />
              <Text>Lunch</Text>
            </Button>
            <Button vertical active>
              <Icon active name="apps" />
              <Text>Dinner</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default FoodSearch;
