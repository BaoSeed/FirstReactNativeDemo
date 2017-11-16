'use strict'

/**
 * This exposes the native ToastExample module as a JS module. This has a
 * function 'show' which takes the following parameters:
 *
 * 1. String message: A string with the text to toast
 * 2. int duration: The duration of the toast. May be ToastExample.SHORT or
 *    ToastExample.LONG
 */
import { NativeModules } from 'react-native';

module.exports = NativeModules.ToastExample;




/*
<NavigatorIOS
   //此项不设置,创建的导航控制器只能看见导航条而看不到界面
   style={{flex: 1}}
   barTintColor='#ffffcc'
   renderScene={(route, navigator) =>
       <View>
           <StatusBar
               animated={true}
               hidden={route.statusBarHidden}
               barStyle='dark-content'
               showHideTransition='slide'
               backgroundColor="blue"
           />

       </View>
   }
   initialRoute={{
       statusBarHidden:false,
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
*/