/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

import {
    Platform,
    Text,
    View,
    FlatList,
    SectionList,
    NavigatorIOS,
    NativeModules,
    MaskedViewIOS,
    Modal,
    TouchableHighlight,
    StatusBar,
    Switch,
    TabBarIOS,

} from 'react-native';


import { StackNavigator}from 'react-navigation'


//导入同级目录下的src文件夹..
import MyButton       from './src/components/comman/MyButton';
import ToastExample   from './src/nativemodules/android/ToastExample';
import MainTabBar     from './src/screens/ios/MainTabBar';
import HomeScreen     from './src/screens/comman/HomeScreen';
import ProductScreen  from './src/screens/comman/ProductScreen';
import MineScreen     from './src/screens/comman/MineScreen';
import AgeScreen      from './src/screens/comman/AgeScreen';
import NameEditScreen from './src/screens/comman/NameEditScreen';
import MainScreen     from './src/screens/comman/MainScreen';
import ProfileScreen  from './src/screens/comman/ProfileScreen';


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const SimpleApp = StackNavigator({
    Main: { screen: MainScreen},
    Profile:{

        path:'t',
        screen:ProfileScreen,
        navigationOptions: ({navigation}) => ({

            title: `${navigation.state.params.name}'s Profile`,
        }),
    },
});


//export default是一个可以导出的组件
export default class App extends React.Component {

    //构造
    constructor(props){
        super(props);

        this.state = {
            status:1,
            modalVisible: false,
        };
    }

    setModalVisible(visible) {
        this.setState({
            modalVisible: visible,
        });
    }

    //网络获取数据，类似于block
    fetchData = (enableCallback)=>{
        //打印
        console.log(2);

        //先禁用按钮
        //this.refs.button.disable();
        //this.timer = setTimeout(()=>{
            //3秒后恢复原样
            //this.refs.button.enable();
           // enableCallback();
       // },3000);
    };

    //组件已经加载
    componentDidMount() {
        //ToastExample.show('Awesome', ToastExample.SHORT);
    }

    //组件将要被卸载
    componentWillUnmount() {
        // 如果存在this.timer，则使用clearTimeout清空。
        // 如果你使用多个timer，那么用多个变量，或者用个数组来保存引用，然后逐个clear
        this.timer && clearTimeout(this.timer);
    }


    render() {
     return (
         <MainTabBar/>
      );
     }
}















/*
//2、构造闪烁文字
class Blink extends React.Component {
    constructor(props) {
        super(props);

        this.state = { showText: true };

        // 每1000毫秒对showText状态做一次取反操作
         setInterval(() => {

            //这里我还看不懂！！！！
            this.setState(previousState => {
                return { showText: !previousState.showText };
            });

        }, 1000);
    }

    render() {

        // 根据当前showText的值决定是否显示text内容
        let display = this.state.showText ? this.props.text : ' ';
        return (
            <Text>{display}</Text>
        );
    }
}

//3、使用Flexbox布局
class FlexDirectionBasics extends React.Component {
    render() {
        return (
            // 尝试把`flexDirection`改为`column`看看
            <View style={{

                flex: 1,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',

            }}>
                <View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'skyblue'}} />
                <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
            </View>
        );
    }
}
*/
// 试试去掉父View中的`flex: 1`。
// 则父View不再具有尺寸，因此子组件也无法再撑开。
// 然后再用`height: 300`来代替父View的`flex: 1`试试看？
/*
<View >
    <View style={{flex: 1, backgroundColor: 'powderblue'}} />
    <View style={{flex: 2, backgroundColor: 'skyblue'}} />
    <View style={{flex: 3, backgroundColor: 'steelblue'}} />
</View>
*/
