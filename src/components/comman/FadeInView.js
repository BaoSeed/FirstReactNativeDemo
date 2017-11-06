import React from 'react';
import { Animated, Text, View ,Easing} from 'react-native';



export default class FadeInView extends React.Component {


    state= {

        fadeAnim:new Animated.Value(0),
        xPosition: new Animated.Value(0),

    }


    componentDidMount(){


        Animated.timing(

            this.state.fadeAnim,
            {
                toValue:1,
                duration:5000,

            },

        ).start();



        /*
        Animated.timing(

            this.state.xPosition,
            {
                toValue: 100,
                easing: Easing.back,
                duration: 2000,
            },

        ).start();
        */


    }

    render(){

        let {fadeAnim} = this.state;

        return(

            //复制自this.props.style对象。
            <Animated.View style={{
                ...this.props.style,
                opacity:fadeAnim,
            }}>
                {this.props.children}
            </Animated.View>
        );
    }

}