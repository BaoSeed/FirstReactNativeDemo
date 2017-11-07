
import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';



export default class  MainScreen extends  React.Component{

    static navigationOptions = {

        title:'主页',
    }

    render(){

        const { navigate } = this.props.navigation;

      return(

          <View style={styles.container}>
              <Text style={styles.welcome}>我是主页</Text>

              <Button
                  onPress={() => navigate('Profile',{user:'爆seed'})}
                  title="Go to Profile"
              />
          </View>
      );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        top:64,
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});