/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList,
    SectionList,
    NavigatorIOS,
    NativeModules,

} from 'react-native';


import { StackNavigator}from 'react-navigation'

//导入同级目录下的src文件夹..
import MyButton       from "./src/components/comman/MyButton";
import MainScreen     from "./src/Screens/MainScreen";
import ProfileScreen  from "./src/Screens/ProfileScreen";
import NameEditScreen from "./src/Screens/NameEditScreen";
import AgeScreen      from "./src/Screens/AgeScreen";
import ToastExample   from './src/Native Modules/android/ToastExample';



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

        this.state = {status:1};

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
         /*
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

          <View>
              <Blink text='I love to blink' />
              <Blink text='Yes blinking is so great' />
              <Blink text='Why did they ever take this out of HTML' />
              <Blink text='Look at me look at me look at me' />
          </View>

      </View>
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

         //使用Flexbox布局
         //<FlexDirectionBasics />

         //FlatList
         //<FlatListBasics/>

        //<SectionListBasics/>

         /*
         fetch('https://facebook.github.io/react-native/movies.json')
             .then((response)=>response.json())
             .then((responseJson)=>{

                 return responseJson.movies;
             })
             .catch((error)=>{

                 console.error(error);
             })
*/
         //<Button ref="confirmBtn" text="Go to Jane`s profile" bgColor="red"  object:{{a:'b'}} handler={this.fetchData()} />

         //<SimpleApp/>



         <NavigatorIOS
             //此项不设置,创建的导航控制器只能看见导航条而看不到界面
             style={{flex: 1}}
             barTintColor='#ffffcc'
             initialRoute={{
                 component: AgeScreen,
                 title: 'AgeScreen',
                 leftButtonTitle:'左边',
                 onLeftButtonPress:() => {

                     var calendarManager = NativeModules.CalendarManager;

                     //calendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey',date.toISOString());


                     calendarManager.findEvents((error, events) => {

                         if (error) {

                             console.error(error);
                             alert('查找失败');

                         } else {

                             this.setState({events: events});

                             alert('查找成功');
                         }
                     });

                    //导出常量
                     console.log(calendarManager.firstDayOfTheWeek);
                 },
                 rightButtonTitle:'右边',
                 onRightButtonPress:() => {alert('右边')}
             }}
         />


     );

     }
}

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
//3.1 Flex Direction
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
//4、ListView
//4.1 FlatList
class FlatListBasics extends React.Component {
    render() {
        return (
            <View style={styles.FlatContainer}>

                <FlatList
    data={[

        {key: 'Devin'},
        {key: 'Jackson'},
        {key: 'James'},
        {key: 'Joel'},
        {key: 'John'},
        {key: 'Jillian'},
        {key: 'Jimmy'},
        {key: 'Julie'},
    ]}

    renderItem={({item}) => <Text style={styles.item}> {item.key} </Text>}

    />

            </View>
        );
    }
}
class SectionListBasics extends React.Component {
    render() {
        return (
            <View style={styles.SectionListcontainer}>

                <SectionList

                    sections={[

                        {title: 'D', data: ['Devin']},

                        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
                    ]}

                    renderItem={({item}) => <Text style={styles.SectionListitem}> {item} </Text>}

                    renderSectionHeader={({section}) => <Text style={styles.sectionHeader}> {section.title} </Text>}
                />
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

    FlatContainer: {
        flex: 1,
        top:50,
        paddingTop: 80,
        backgroundColor:'red'
    },

    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },


    SectionListcontainer: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },

    SectionListitem: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },

});
