import React from 'react';
import PropTypes from 'prop-types';

import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    FlatList,
    NavigatorIOS,
} from 'react-native';

import ProductDetailScreen  from './ProductDetailScreen';
import ProductListCell      from '../../components/comman/ProductListCell';

export default class  ProductScreen extends  React.Component {


    constructor(props) {
        super(props);
        this.state = {
            data:this._flatListData,
            refreshing:false,
        };
    }

    _flatListData =
        [
            {title: 'Devin'},
            {title: 'Jackson'},
            {title: 'James'},
            {title: 'Joel'},
            {title: 'John'},
            {title: 'Jillian'},
            {title: 'Jimmy'},
            {title: 'Julie'},
        ];


    _keyExtractor = (item, index) => index;

    _onPressItem = (item,index)=>{
        this.props.navigator.push({
            component:ProductDetailScreen,
            title:'产品详情',
            passProps:{index:index},
            barTintColor:'red',

        });
    };

    _renderItem=({item,index})=> (
        <ProductListCell
            onPressItem={this._onPressItem}
            item={item}
            index={index}
            title={item.title}/>
    );

    _onRefresh=()=>{
        this.setState({refreshing: true});
        setTimeout(()=>{
            this.setState({refreshing: false});
        },1000);
    };

    _onReloadMore=({distanceFromEnd}) => (
        setTimeout(() => {
          this.setState((state) => ({}));
        }, 3000)
    );

    //点击按钮跳转到指定行
    onButtonPress() {
        //viewPosition参数：0表示顶部，0.5表示中部，1表示底部
        this._flatList.scrollToIndex({viewPosition: 0, index: this.state.text});
        //this._flatList.scrollToOffset({ animated: true, offset: 2000 });
    };

    _header=()=>(
        <View style={{flex:1,flexDirection:'row',justifyContent:'center',backgroundColor:'red',height:50}}>
        <Text style={{fontWeight:'bold',fontSize:20,alignSelf:'center',backgroundColor:'blue'}}>热门电影</Text>
        </View>
     );

    _footer=()=>(
        <View style={{flex:1,flexDirection:'row',justifyContent:'center',backgroundColor:'blue',height:40}}>
        <Text style={{fontSize: 14, alignSelf: 'center',backgroundColor:'red'}}>到底啦，没有啦！</Text>
        </View>
    );

    _createEmptyView=()=> (
        <View style={{flex:1,flexDirection:'row',justifyContent:'center',backgroundColor:'yellow',height:200}}>
        <Text style={{fontSize: 40,alignSelf: 'center'}}>还没有数据哦！</Text>
        </View>
    );

    _ItemDivideComponent=()=>(
        <View style={{height:0.5, backgroundColor: 'white'}}/>
    );

    render() {

        return (
                <View style={{flex:1}}>
                <FlatList
                    data={this.state.data}
                    //使用 ref 可以获取到相应的组件
                    ref={(flatList) => this._flatList = flatList}
                    extraData={this.state}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    refreshing={this.state.refreshing}
                    ItemSeparatorComponent={this._ItemDivideComponent}
                    ListEmptyComponent={this._createEmptyView}
                    ListFooterComponent={this._footer}
                    ListHeaderComponent={this._header}
                    getItemLayout={(data, index) => ( {length: 44, offset: (44 + 1) * index, index} )}
                    onRefresh={this._onRefresh}
                    onEndReachedThreshold={0.1}
                    onEndReached={this._onReloadMore}
                />
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
        textAlign: 'left',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    FlatContainer: {
        flex: 1,
        top:16,
        paddingTop:0,
        backgroundColor:'white'
    },
    FlatItem: {
        fontSize: 18,
        height: 44,
        marginLeft:20
    },
    SectionListcontainer: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    SectionListitem: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});


/*
fetch('https://facebook.github.io/react-native/movies.json')
    .then((response)=>response.json())
    .then((responseJson)=>{

        return responseJson.movies;
    })
    .catch((error)=>{

        console.error(error);
    })
 */
