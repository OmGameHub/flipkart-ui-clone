import React from "react";
import { 
    View,
    Text,
    Image,
    StyleSheet
} from "react-native";

export default class componentName extends React.Component{
    render(){
        return (
            <View style={styles.container} >
                <View style={styles.imageContainer} >
                    <Image 
                        source={this.props.imageUri} 
                        style={styles.image}
                        />
                </View>

                <Text style={styles.headingText} >{this.props.heading}</Text>
                <Text style={styles.priceText} >{this.props.price}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        padding: 20,
        alignItems:'center',
        justifyContent:'center'
    },
    imageContainer: { 
        width: 110, 
        height: 110 
    },
    image: { 
        width: null, 
        height: null, 
        flexGrow: 1, 
        resizeMode: 'contain' 
    },
    headingText: { 
        fontSize: 12, 
        color: '#262626', 
    },
    priceText: { 
        fontSize: 14, 
        color: '#388e3c', 
        marginTop: 8 
    }
});