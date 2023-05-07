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

const signup = ({ navigation }) => {

    return (
        <View style={styles.body}>
            <Text style={styles.text}>SignupScreen</Text>
        </View>
    );

};
export default signup;