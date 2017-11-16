import React from 'react';
import PropTypes from 'prop-types';

import {
    StyleSheet,
    View,
    Text,
    TouchableHighlight,
    FlatList,
    Navigator,
    NavigatorIOS,
} from 'react-native';

import ProductDetailScreen  from './ProductDetailScreen';
import ProductListCell      from '../../components/comman/ProductListCell';

export default class  ProductScreen extends  React.Component {

    /*
    constructor(props) {
        super(props);
        this.state = {refreshing:false,data:this._flatListData};
    }
    */

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

    state={refreshing:false,data:this._flatListData}

    _keyExtractor = (item, index) => index;

    _onPressItem = (item,index)=>{

        this.props.navigator.push({
            component:ProductDetailScreen,
            title:'姓名编辑',
            passProps:{index:index},
            barTintColor:'red'
        });
    };

    _onPress = (item,index)=>{

        this.props.navigator.push({
            component:ProductDetailScreen,
            title:'姓名编辑',
            passProps:{index:index},
            barTintColor:'red'
        });
    };

    _renderItem = ({item,index}) => {

        return (
        /*
        <ProductListCell
            id={item.id}
            onPressItem={this._onPressItem}
            title={item.title}
        />
        */

        <View style={{flex: 1}}>
            <TouchableHighlight
                onPress={this._onPress(item,index)}>
                <Text style={{fontWeight: 'bold', fontSize: 20, height: 50}}>我是你</Text>
            </TouchableHighlight>
        </View>
        );
    };

    _header = ()=>(
        <View style={{flex:1}}>
        <Text style={{fontWeight:'bold',fontSize:20,height:50}}>热门电影</Text>
        </View>
     );

    _footer = () => (

        <Text style={{fontSize: 14, alignSelf: 'center'}}>到底啦，没有啦！</Text>
    );

    _createEmptyView=()=> (

       <Text style={{fontSize: 40, alignSelf: 'center'}}>还没有数据哦！</Text>
    );

    _ItemDivideComponent=()=>(

        <View style={{height: 1, backgroundColor: 'skyblue'}}/>
    );

    render() {

        return (
                <View style={{flex:1}}>
                <FlatList
                    data={this.state.data}
                    extraData={this.state}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    refreshing={this.state.refreshing}
                    ItemSeparatorComponent={this._ItemDivideComponent}
                    ListEmptyComponent={this._createEmptyView()}
                    ListFooterComponent={this._footer}
                    ListHeaderComponent={this._header}
                    getItemLayout={(data, index) => ( {length: 44, offset: (44 + 1) * index, index} )}
                    onRefresh={()=>{
                        this.setState({refreshing: true});
                        setTimeout(()=>{
                            this.setState({refreshing: false});
                        },1000);
                    }}
                    onEndReachedThreshold={0.1}
                    onEndReached={({distanceFromEnd}) => (
                        setTimeout(() => {
                            this.setState((state) => ({

                            }));
                        }, 3000)
                    )}
                />
                </View>
            /*
            <View style={styles.SectionListcontainer}>
            <SectionList
            sections={[
            {title: 'D', data: ['Devin']},
            {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
             ]}
             renderItem={({item}) => <Text style={styles.SectionListitem}> {item} </Text>}
            renderSectionHeader={({section}) => <Text style={styles.sectionHeader}> {section.title} </Text>}
             />
           </View>
           */
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
