import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button } from './common';

class MyTools extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Button>
            Exercise Database
          </Button>
        </CardSection>

        <CardSection>
          <Button>
            HIIT (interval) Timer
          </Button>
        </CardSection>

        <CardSection>
          <Button>
            Food Database
          </Button>
        </CardSection>

        <CardSection>
          <Button>
            Calorie Calculator
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default MyTools;
