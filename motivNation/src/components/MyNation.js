import React, { Component } from 'react';
import { GoogleSignin } from 'react-native-google-signin';
import { Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right
  } from 'native-base';

class MyNation extends Component {

  render() {
    const user = GoogleSignin.currentUser();
    return (
      <Container>
       <Content>
         <Card>
           <CardItem>
             <Left>
               <Thumbnail source={{ uri: user.photo }} />
               <Body>
                 <Text>Beto Hernandez</Text>
                 <Text note>Exercised Today!</Text>
               </Body>
             </Left>
           </CardItem>
           <CardItem cardBody>
             <Image source={{ uri: 'https://cdn10.bostonmagazine.com/wp-content/uploads/2013/07/treadmilllarge.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
           </CardItem>
           <CardItem>
             <Left>
               <Button transparent>
                 <Icon active name="thumbs-up" />
                 <Text>12 Likes</Text>
               </Button>
             </Left>
             <Body>
               <Button transparent>
                 <Icon active name="chatbubbles" />
                 <Text>4 Comments</Text>
               </Button>
             </Body>
             <Right>
               <Text>11h ago</Text>
             </Right>
           </CardItem>
         </Card>
       </Content>
     </Container>
    );
  }
}

export default MyNation;
