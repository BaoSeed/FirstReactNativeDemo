import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight ,
    TouchableOpacity,
    NativeModules,
    LayoutAnimation,

} from 'react-native';


import FadeInView  from '../../components/comman/FadeInView';
//这么写，渲染不出来
//var FadeInView = require('../../components/comman/FadeInView');
//这么写不行啊，路径问题
//var {FadeInView} = require('/main.js');


const { UIManager } = NativeModules;
UIManager.setLayoutAnimationEnabledExperimental &&
UIManager.setLayoutAnimationEnabledExperimental(true);

export default class  NameEditScreen extends  React.Component{

    constructor(props, context) {
        super(props, context);

        this._onBack = this._onBack.bind(this);
    }

    state = {
        w: 100,
        h: 100,
    };


    //私有方法
    _onBack(){
        this.props.navigator.pop();
    }

    //一般来说，你需要在constructor中初始化state
    //（译注：这是ES6的写法，早期的很多ES5的例子使用的是getInitialState方法来初始化state，这一做法会逐渐被淘汰），
    //然后在需要修改时调用setState方法。
    _onPress = () => {
        // Animate the update
        LayoutAnimation.spring();
        this.setState({w: this.state.w + 15, h: this.state.h + 15})
    }

    render(){
       const {user} = this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>我是-{user}</Text>
                <TouchableHighlight
                    onPress={this._onBack}>
                    <Text style={styles.welcome} >点击我返回</Text>
                </TouchableHighlight>
                <FadeInView style={{width:200,height: 50, backgroundColor: 'powderblue'}}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Fading in</Text>
                </FadeInView>
                <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
                <TouchableOpacity onPress={this._onPress}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Press me!</Text>
                    </View>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        top:64,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },

    container1: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    box: {
        margin: 10,
        width: 200,
        height: 200,
        backgroundColor: 'red',
    },
    button: {
        backgroundColor: 'black',
        paddingHorizontal: 20,
        paddingVertical: 15,
        marginTop: 15,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});