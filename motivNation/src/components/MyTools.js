import React, { Component } from 'react';
import { Button, Icon, Text, Container, Content, View } from 'native-base';

class MyTools extends Component {
  render() {
    return (
      <Container>
        <Content>
          <View>
            <Button
              block
              large
              iconLeft
              success
              style={{ marginTop: 10 }}
            >
              <Icon name='clipboard' />
              <Text> Exercise Database </Text>
            </Button>

            <Button
            block
            large
            iconLeft
            style={{ marginTop: 10 }}
            >
              <Icon name='construct' />
              <Text>HIIT Timer</Text>
            </Button>

            <Button
              block
              large
              iconLeft
              warning
              style={{ marginTop: 10 }}
            >
              <Icon name='construct' />
              <Text>Food Database</Text>
            </Button>

            <Button
              block
              large
              iconLeft
              danger
              style={{ marginTop: 10 }}
            >
              <Icon name='construct' />
              <Text>Food Database</Text>
            </Button>

          </View>
        </Content>
      </Container>
    );
  }
}

export default MyTools;
