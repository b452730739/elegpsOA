/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import "./Constants/Constants";
import {
    StackNavigator,
} from 'react-navigation';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
    TextInput,
  StatusBar,
    Button,
    Alert,
    Image,
  View
} from 'react-native';


export default class Login extends Component {

    render() {
      const { navigate } =
          this.props.navigation;
    return (
      <View  >
        <StatusBar
            hidden={false}
            backgroundColor={COLORS.blue}
        />
        <View
            style={{flexDirection: 'row',height:100,marginTop:80,
            justifyContent: 'center',
            alignItems: 'flex-start',}}>
          <Image style={styles.loginTitle} source={require("./res/drawable-xxhdpi/login_title_bg.png")}/>
        </View>


        <View style={{marginTop:50,marginLeft:60,marginRight:60}}>
          <TextInput  placeholder={STRING.inputAccount}/>
        <TextInput secureTextEntry={true} placeholder={STRING.inputPassWord}/>
          <View style={{marginTop:20}}>

          <Button
            // onPress={login}
          onPress={() => {navigate('main')}}
          title={STRING.login}
          color={COLORS.blue}/>
        </View>
        </View>

      </View>
    );

      function login() {

          navigate('main');
          // Alert.alert('登录系统');
      }
    
  }
}

const elegpsOA = StackNavigator({
    login: { screen: Login },
    main: { screen: Login },
});


const styles = StyleSheet.create({

    loginTitle:{
        width:150,
        height:100
    },

});

AppRegistry.registerComponent('elegpsOA', () =>elegpsOA);
