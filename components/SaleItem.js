import React from "react";
import { 
    View,
    Text,
    Image,
    Dimensions,
    StyleSheet
} from "react-native";

let SCREEN_WIDTH = Dimensions.get('window').width;

export default class SaleItem extends React.Component{
    render(){
        return (
            <View style={styles.container} >
                <Image 
                    source={this.props.imageUri} 
                    style={styles.image} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: SCREEN_WIDTH / 3,
    },
    image: { 
        width: null, 
        height: null, 
        flexGrow: 1, 
        resizeMode: 'contain',
    },
});