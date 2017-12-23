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
    },
    textStyle: {
        fontSize: 20
    }
});

export default Header;