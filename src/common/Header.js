import React from 'react';
import {Text, View, StyleSheet} from 'react-native' ;

const Header = () => (
    <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Albums!</Text>
    </View>
);

const styles = StyleSheet.create({
    viewStyle: {
        backgroundColor: '#F2F3F4',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
});

export default Header;