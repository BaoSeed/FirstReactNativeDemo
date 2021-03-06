import React from 'react';
import PropTypes from 'prop-types';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight ,
    NavigatorIOS,
    ProgressBarAndroid,
    Button,
} from 'react-native';


import NameEditScreen from './NameEditScreen';

export default class  MineScreen extends  React.Component {


    //这个作用是什么？？？？
    static propTypes = {
        route: PropTypes.shape({
            title: PropTypes.string.isRequired
        }),
        navigator: PropTypes.object.isRequired,
    };

    constructor(props, context) {
        super(props, context);
        //私有方法绑定this
        this._onForward = this._onForward.bind(this);
        this.state = {
            date: new Date(),
            timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
            name:'我是年龄编辑',
            subname:'点击编辑姓名',
            behavior: 'padding',
            switchValue:false,
        };
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

        var progressBar =
            <View style={styles.container}>
                <ProgressBarAndroid styleAttr="Inverse" />
            </View>;

        return (
            <View style={styles.container}>
                <Button
                    onPress={this._onForward}
                    title="Learn More"
                    color="#841584"
                    backgroundColor='red'
                    accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }
}

//<MapView style={{ flex: 1 }} />

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

    centering: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    outerContainer: {
        flex: 1,
    },
    containerAvoid: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    textInput: {
        borderRadius: 5,
        borderWidth: 1,
        height: 44,
        paddingHorizontal: 10,
    },
    segment: {
        marginBottom: 10,
    },
    closeButton: {
        position: 'absolute',
        top: 30,
        left: 10,
    }
});