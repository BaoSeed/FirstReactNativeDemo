/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
} from 'react-native';

//导入上层目录下的src文件夹..
//import Button from './src/Button';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


//export default是一个可以导出的组件
export default class App extends Component<{}> {

    //构造
    constructor(props){
        super(props);
        this.state = {status:1};
    }

    /*
    //网络获取数据，类似于block
    fetchData = (enableCallback)=>{

        //打印
        console.log(2);

        //先禁用按钮
        this.refs.button.disable();
        this.timer = setTimeout(()=>{
            //3秒后恢复原样
            //this.refs.button.enable();
            enableCallback();
        },3000);
    };
    */

    render() {
     return (

      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!哈哈
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>

          <!--哈-->
          <!--ref就相当于html中的id-->
          /*<Button ref="confirmBtn" text="确定" bgColor="red"   object:{{a:'b'}} handler={this.fetchData()}/>
          <Button ref="cancelBtn"  text="取消" bgColor="green" object:{{a:'b'}} handler={()=>{alert('你点击了取消')}}/>
          */
      </View>
    );
  }
}




const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});
