import React, { Component } from 'react';
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base';

class CalorieForm extends Component {

    render() {
    return (
      <Container>
     <Content>
       <Form>
         <Item floatingLabel>
           <Label>Age</Label>
           <Input />
         </Item>
         <Item floatingLabel last>
           <Label>Current Weight</Label>
           <Input />
         </Item>
         <Item floatingLabel last>
           <Label>Gender</Label>
           <Input />
         </Item>
         <Item floatingLabel last>
           <Label>Height</Label>
           <Input />
         </Item>
       </Form>
       <Button block success>
           <Text>Calculate</Text>
         </Button>
     </Content>
      </Container>
    );
  }
}

export default CalorieForm;
