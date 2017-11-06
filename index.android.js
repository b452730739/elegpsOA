/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import "./Constants/Constants";
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
    TextInput,
  StatusBar,
    Button,
    Image,
  View
} from 'react-native';

export default class elegpsOA extends Component {
  render() {
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


        <View style={{marginTop:60,marginLeft:60,marginRight:60}}>
          <TextInput  placeholder={STRING.inputAccount}/>
        <TextInput secureTextEntry={true} placeholder={STRING.inputPassWord}/>
          <View style={{marginTop:20}}>

          <Button

          title={STRING.login}
          color={COLORS.blue}/>
        </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({

    // loginButton:{
    //     color:COLORS.blue,
    //     title:STRING.login,
    // },
    loginTitle:{
        width:150,
        height:100
    },

});

AppRegistry.registerComponent('elegpsOA', () =>elegpsOA);
