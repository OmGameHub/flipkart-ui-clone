import React from "react";
import { 
    View,
    Text,
    StyleSheet
} from "react-native";
import FontAwesome  from 'react-native-vector-icons/FontAwesome';
import Ionicons  from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo  from 'react-native-vector-icons/Entypo';

export default class MyIcon extends React.Component{
    render(){
        var iconNameParts = this.props.name.split('|');
        var iconStyle = this.props.style;
        switch(iconNameParts[0]) {
            case 'fontawesome': return (<FontAwesome name={iconNameParts[1]} style={iconStyle} />);
            case 'MaterialCommunityIcons': return (<MaterialCommunityIcons name={iconNameParts[1]} style={iconStyle} />);
            case 'Entypo': return (<Entypo name={iconNameParts[1]} style={iconStyle} />);
            default: return (<Ionicons name={iconNameParts[1] || iconNameParts[0]} style={iconStyle} />);
        }
    }
}
