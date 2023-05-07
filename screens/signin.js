import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    body: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        fontSize: '25',
        fontWeight: '300',
        color: Colors.BLACK
    }
});

const signin = ({ navigation }) => {

    return (
        <View style={styles.body}>
            <Text style={styles.text}>SigninScreen</Text>
        </View>
    );

};
export default signin;