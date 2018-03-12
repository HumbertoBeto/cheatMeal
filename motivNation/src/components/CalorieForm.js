import React, { Component } from 'react';
import { Text, Container, Content, View } from 'native-base';

class CalorieForm extends Component {

    render() {
    return (
      <Container>
        <Content>
          <View style={{ marginTop: 30 }}>
            <Text>This is the Calorie Calculator view! </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default CalorieForm;
