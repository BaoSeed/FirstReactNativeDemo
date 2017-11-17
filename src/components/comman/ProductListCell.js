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
    }

    _onPress = () => {
        const {onPressItem,item,index} = this.props;
        onPressItem(item,index);
    };

    render(){

        const {item} = this.props;

        return(
            <View style={{flex: 1, backgroundColor: 'powderblue',height:50}}>
                <TouchableHighlight
                    onPress={this._onPress}>
                    <Text> {item.title} </Text>
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