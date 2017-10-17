/**
 * 2017.10.17 Ivan
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';


//export default是一个可以导出的组件
export default class Button extends Component<{}> {

    //构造
    constructor(props){
        super(props);
        this.state = {
          disable:false,
        };
    }

    //没有public 和 private之分
    onPress = ()=>{
        //自定义的方法，使用属性来定义
        //alert('你按下了按钮，当初的状态是' + this.state.status);
        const {handler} = this.props;
        this.disable();
        handler(this.enable());
    };

    enable = ()=>{

        this.setState({

           disable:false,
        });
    };

    disable = ()=>{

      this.setState({

          disable:true,
      });
    };

    render() {
        //const text = this.props.text;
        //这种写法可以取出多个
        const {text,bgColor} = this.props;
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    //disable自动覆盖背景色
                    style={[styles.button,this.state && styles.disable,{backgroundColor:{bgColor}}]}
                    onPress={this.onPress()}>
                    <Text style={styles.buttonText}>
                        {text}
                    </Text>
                </TouchableOpacity>>
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

    button:{

        top:40,
        height: 40,
        width:150,
        borderRadius:20,
        backgroundColor:'green',
        justifyContent:'center',
        overflow:'hidden',
    },

    buttonText:{

        textAlign:'center',
        color:'red',
        fontSize:22.0,
    },

    disable:{

      backgroundColor:'gray',

    },

});
