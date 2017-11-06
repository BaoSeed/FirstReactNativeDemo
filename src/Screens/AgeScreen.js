import React from 'react';
import PropTypes from 'prop-types';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight ,
    NavigatorIOS,
} from 'react-native';
import NameEditScreen from "./NameEditScreen";


export default class  AgeScreen extends  React.Component {


    //这个作用是什么？？？？
    static propTypes = {

        route: PropTypes.shape({
            title: PropTypes.string.isRequired
        }),

        navigator: PropTypes.object.isRequired,
    }


    constructor(props, context) {
        super(props, context);

        //私有方法绑定this
        this._onForward = this._onForward.bind(this);

    }



    //私有方法
    _onForward(){

        this.props.navigator.push({

            component:NameEditScreen,
            title:'姓名编辑',
            passProps:{user:'爆seed'},
            barTintColor:'red'
        });
    }


    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>我是年龄编辑</Text>
                <TouchableHighlight
                    onPress={this._onForward}>
                    <Text style={styles.welcome}>点击编辑姓名</Text>
                </TouchableHighlight>
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