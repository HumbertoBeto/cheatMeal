import React, { Component } from 'react';
import { GoogleSignin } from 'react-native-google-signin';
import { View, Image, Text } from 'react-native';
import { Card, ListItem, Button, Icon, Avatar } from 'react-native-elements'


class PostItems extends Component {


onButtonPress() {

  }

  render() {
    const myName = this.props.goal.userName;
    const myPic = this.props.goal.userPic;
  //  const myPostName = this.props.goal.name.goal_name;
    const myLikes = this.props.goal.likes;
    //console.log(this.props.goal_name);
    //const user = GoogleSignin.currentUser();

  return (
    <Card
    title={myName}
    image={{ uri: 'https://cdn10.bostonmagazine.com/wp-content/uploads/2013/07/treadmilllarge.jpg' }}
    >
    <Text style={{ marginBottom: 5, alignSelf: 'center' }}>
    Created a Goal! Motivate Them!
    </Text>
    <View style={{ alignSelf: 'center' }}>
    <Avatar
      rounded
      medium
      source={{ uri: myPic }}
      activeOpacity={0.7}
      style={{ marginBottom: 2, alignSelf: 'center' }}
    />
    </View>
    <Text style={{ marginBottom: 10, alignSelf: 'center' }}>
    Motivated {myLikes} times!
    </Text>
    <Button
      icon={{ name: 'envira', type: 'font-awesome' }}
      backgroundColor='#03A9F4'
      buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
      title='Motivate'
    />
  </Card>

);
}
}
//onPress={this.motivatePressed.bind(this)}

export default PostItems;
