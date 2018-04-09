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
  import { CardSection } from './common';

class PostItems extends Component {


onButtonPress() {

  }

  render() {
    const { goal_name } = this.props.goal;
    const user = GoogleSignin.currentUser();

    return (
        //<CardSection>
        <Container>
         <Content>
           <Card>
             <CardItem>
               <Left>
                 <Thumbnail source={{ uri: user.photo }} />
                 <Body>
                   <Text>{ user.name }</Text>
                   <Text note>{goal_name}</Text>
                 </Body>
               </Left>
             </CardItem>
             <CardItem cardBody>
               <Image source={{ uri: 'https://cdn10.bostonmagazine.com/wp-content/uploads/2013/07/treadmilllarge.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
             </CardItem>
             <CardItem listItemPadding={0}>
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
    //  </CardSection>

    );
  }
}

export default PostItems;
