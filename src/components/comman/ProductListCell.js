import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableHighlight,

} from 'react-native';


export default class ProductListCell extends React.Component {

    //构造
    constructor(props) {
        super(props);
        this.state = {
            disable: false,
        };
    }

    _onPress=()=>{
        const {onPressItem,id} = this.props;

        onPressItem(id);
    };

    render(){

        const {title} = this.props;

        return(
            <View style={{flex: 1, backgroundColor: 'powderblue'}}>
                <TouchableHighlight
                    onPress={this._onPress()}>
                    <Text> {title} </Text>
                </TouchableHighlight>
            </View>
        );
    }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});