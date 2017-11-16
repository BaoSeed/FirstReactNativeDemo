import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';



export default class  ProductDetailScreen extends  React.Component {

      render() {
          const {index} = this.props;
          return (
              <View style={styles.container}>
                  <Text style={styles.welcome}>我是第{index}个产品详情</Text>
              </View>
          );
      }
}


const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white',
        top: 64,
    },
});