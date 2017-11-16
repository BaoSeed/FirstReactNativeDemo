
import React from 'react';

import {
    TabBarIOS,
    NavigatorIOS
} from 'react-native';


import HomeScreen     from '../comman/HomeScreen';
import ProductScreen  from '../comman/ProductScreen';
import MineScreen     from '../comman/MineScreen';



export default class  AgeScreen extends  React.Component {


    //构造
    constructor(props){
        super(props);

        this.state = {
            selectedTab:'Home'
        };
    }

     render() {

         return (
             <TabBarIOS
                 unselectedTintColor='gray'
                 tintColor='aqua'
                 barTintColor='white'>
                 <TabBarIOS.Item
                     title='Home'
                     systemIcon='bookmarks'
                     selected={this.state.selectedTab === 'Home'}
                     onPress={()=>{this.setState({selectedTab: 'Home',})}}
                 >
                     <NavigatorIOS
                         //此项不设置,创建的导航控制器只能看见导航条而看不到界面
                         style={{flex: 1}}
                         barTintColor='#ffffcc'
                         initialRoute={{
                             component: HomeScreen,
                             title: 'HomeScreen',
                             leftButtonTitle:'左边',
                             onLeftButtonPress:() => {alert('左边')},
                             rightButtonTitle:'右边',
                             onRightButtonPress:() => {alert('右边')}
                         }}
                     />
                 </TabBarIOS.Item>
                 <TabBarIOS.Item
                     systemIcon='history'
                     badge='1'
                     selected={this.state.selectedTab === 'Product'}
                     onPress={()=>{this.setState({selectedTab:'Product'})}}
                 >
                     <NavigatorIOS
                         //此项不设置,创建的导航控制器只能看见导航条而看不到界面
                         style={{flex: 1}}
                         barTintColor='#ffffcc'
                         initialRoute={{
                             component: ProductScreen,
                             title: 'ProductScreen',
                             leftButtonTitle:'左边',
                             onLeftButtonPress:() => {alert('左边')},
                             rightButtonTitle:'右边',
                             onRightButtonPress:() => {alert('右边')}
                         }}
                     />
                 </TabBarIOS.Item>
                 <TabBarIOS.Item
                     systemIcon='more'
                     title='Mine'
                     selected={this.state.selectedTab === 'Mine'}
                     onPress={()=>{this.setState({selectedTab: 'Mine',})}}
                 >
                     <NavigatorIOS
                         //此项不设置,创建的导航控制器只能看见导航条而看不到界面
                         style={{flex: 1}}
                         barTintColor='#ffffcc'
                         initialRoute={{
                             component: MineScreen,
                             title: 'MineScreen',
                             leftButtonTitle:'左边',
                             onLeftButtonPress:() => {alert('左边')},
                             rightButtonTitle:'右边',
                             onRightButtonPress:() => {alert('右边')}
                         }}
                     />
                 </TabBarIOS.Item>
             </TabBarIOS>
         );
     }
}