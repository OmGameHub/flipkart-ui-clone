import React from "react";
import { 
    View,
    Text,
    TextInput,
    Image,
    StatusBar,
    StyleSheet
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Item, Input } from 'native-base';

export default class Navbar extends React.Component{
    render(){
        return (
            <View style={styles.navbar} >
                <View style={ styles.navbarTop } >
                    <View  style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Icon 
                            name='menu'
                            style={[styles.icons, { fontSize: 24, marginRight: 0 }]}
                            onPress={() => this.props.onClick()}
                        />
                        <View style={styles.logo} >
                            <Image 
                                style={{ width: null, height: null, flexGrow: 1, resizeMode: 'contain' }}
                                source={require('../assets/fk-logo.png')} />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                        <Icon 
                            name='notifications'
                            style={styles.icons}
                        />
                        <Icon 
                            name='shopping-cart'
                            style={[styles.icons, { marginRight: 0 }]}
                        />
                    </View>
                </View>
                <View style={{ marginHorizontal: 5 }} >
                    <Item style={styles.input}>
                        <Icon 
                            name='search'
                            style={{ color: '#bdc3c7' }}
                            size={24}
                        />
                        
                        <Input 
                            style={{ flex: 1,  color: '#323232', fontSize: 14 }}
                            placeholderTextColor='#bdc3c7'
                            placeholder='Search for Products, Brands and More'/>
                    </Item>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    navbar: { 
        paddingTop: StatusBar.currentHeight,
        paddingBottom: 10,
        backgroundColor: '#2874f0', 
        elevation: 3,
    },
    navbarTop: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        
        padding: 15,
    },
    logo: {
        width: 80,
        height: 27,
    },
    icons: {
        color: '#ecf0f1',
        fontSize: 18,
        padding: 5,
        marginRight: 15,
        alignItems: 'center',
    },
    input: {
        height: 40,
        flexDirection: 'row', 
        borderRadius: 3,
        backgroundColor: '#fff',
        paddingHorizontal: 10,
    }
});