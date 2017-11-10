import {

    requireNativeComponent,


} from 'react-native';



// requireNativeComponent 自动把 "RNTMap" 解析成 "RNTMapManager"
// requireNativeComponent automatically resolves 'RNTMap' to 'RNTMapManager'
module.exports = requireNativeComponent('RNTMap', null);