import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container,
        Content,
        Form, Item,
        Input,
        Label,
        Button,
        Icon,
        Text,
        View
      } from 'native-base';
import { emailChanged, passwordChanged, loginUser } from '../actions';
import { Spinner } from './common';

class LoginForm extends Component {
  onEmailChange(text) {
    this.props.emailChanged(text);
  }

  onPasswordChange(text) {
    this.props.passwordChanged(text);
  }

  onButtonPress() {
    const { email, password } = this.props;

    this.props.loginUser({ email, password });
  }

  renderButton() {
    if (this.props.loading) {
      return <Spinner size="large" />;
    }

    return (
      <Button
      onPress={this.onButtonPress.bind(this)}
      block
      large
      iconLeft
      >
      <Icon name='construct' />
      <Text>Sign In</Text>
      </Button>
    );
  }

  render() {
    return (
      <Container>
       <Content>
         <Form>

           <Item floatingLabel >
             <Label>Email</Label>
             <Input
             onChangeText={this.onEmailChange.bind(this)}
             value={this.props.email}
             />
           </Item>

           <Item floatingLabel last>
             <Label>Password</Label>
             <Input
             secureTextEntry
             onChangeText={this.onPasswordChange.bind(this)}
             value={this.props.password}
             />
           </Item>

         </Form>

         <Text style={styles.errorTextStyle}>
          {this.props.error}
        </Text>

         <View style={{ marginTop: 30 }}>
          {this.renderButton()}
         </View>

       </Content>
     </Container>
    );
  }
}

const styles = {
  errorTextStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red'
  }
};

const mapStateToProps = ({ auth }) => {
  const { email, password, error, loading } = auth;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  emailChanged, passwordChanged, loginUser
})(LoginForm);
