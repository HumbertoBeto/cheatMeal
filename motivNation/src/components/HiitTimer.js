import React, { Component } from 'react';
import { Text, Container, Content, View } from 'native-base';

class HiitTimer extends Component {

    render() {
    return (
      <Container>
        <Content>
          <View style={{ marginTop: 30 }}>
            <Text>This is the Hiit Timer view! </Text>
          </View>
        </Content>
      </Container>
    );
  }
}

export default HiitTimer;
