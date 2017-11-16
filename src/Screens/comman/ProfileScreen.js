import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';


export default class  ProfileScreen extends  React.Component{

    static navigationOptions = ({ navigation }) => ({
        //注意符号  是 `` 不是 ''
        title: `我是 ${navigation.state.params.user}`,
    });

    render(){
        const { params } = this.props.navigation.state;
        return(
            <View style={styles.container}>
                <Text style={styles.welcome}>我是 {params.user}</Text>
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