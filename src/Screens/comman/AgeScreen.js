import React from 'react';
import PropTypes from 'prop-types';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight ,
    NavigatorIOS,
    ActivityIndicator,
    Button,
    CheckBox,
    DatePickerIOS,
    KeyboardAvoidingView,
    SegmentedControlIOS,
    TextInput,
    ProgressBarAndroid,
    Switch,

} from 'react-native';



import NameEditScreen from './NameEditScreen';
import MapView        from '../../nativecomponents/ios/MapView';


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
        this._onDateChange = this._onDateChange.bind(this);

        this.state = {

            date: new Date(),
            timeZoneOffsetInHours: (-1) * (new Date()).getTimezoneOffset() / 60,
            name:'我是年龄编辑',
            subname:'点击编辑姓名',

            behavior: 'padding',
            switchValue:false,
        };
    }


    onSegmentChange = (segment: String) => {
        this.setState({behavior: segment.toLowerCase()});
    };

    //私有方法
    _onForward(){

        this.props.navigator.push({
            component:NameEditScreen,
            title:'姓名编辑',
            passProps:{user:'爆seed'},
            barTintColor:'red'
        });
    }


    _onDateChange(date){

        this.setState({

            date:date,
            name:date.getMinutes(),
            subname:date.getHours()
        });
    }


    render() {

        var progressBar =
            <View style={styles.container}>
                <ProgressBarAndroid styleAttr="Inverse" />
            </View>;

        return (

                <KeyboardAvoidingView
                    behavior={this.state.behavior}
                    style={styles.containerAvoid}>

                    <Text style={styles.welcome}>{this.state.name}</Text>

                    <TouchableHighlight
                        onPress={this._onForward}>
                        <Text style={styles.welcome}>{this.state.subname}</Text>
                    </TouchableHighlight>

                    <ActivityIndicator
                        style ={[styles.centering, {transform: [{scale: 1.5}]}]}
                        size="large"
                    />

                    <SegmentedControlIOS
                        onValueChange={this.onSegmentChange}
                        selectedIndex={this.state.behavior === 'padding' ? 0 : 1}
                        style={styles.segment}
                        values={['Padding', 'Position']} />

                    <TextInput
                        placeholder="<TextInput />"
                        style={styles.textInput} />


                    <Button
                     onPress={this._onForward}
                     title="Learn More"
                     color="#841584"
                     backgroundColor='red'
                     accessibilityLabel="Learn more about this purple button"
                    />

                    <CheckBox
                     style={{padding: 10,margin:50}}
                     value={false}
                     disabled={false}
                     onValueChange={this._onForward}
                    />

                    <Switch
                        value={this.state.switchValue}
                        onTintColor='red'
                        thumbTintColor='blue'
                        tintColor='yellow'
                        onValueChange={(value)=> {
                            this.setState({
                                switchValue: value,
                            });
                        }}
                    />

                <DatePickerIOS
                    date={this.state.date}
                    mode="datetime"
                    timeZoneOffsetInMinutes={this.state.timeZoneOffsetInHours * 60}
                    onDateChange={this._onDateChange}
                    minuteInterval={10}
                />
                </KeyboardAvoidingView>

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