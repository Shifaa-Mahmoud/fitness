/* eslint-disable prettier/prettier */
import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
const styles = StyleSheet.create({
        body: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        },
        text: {
            fontSize: '25',
            fontWeight: '300',
            color: Colors.LIGHT_GREY,
            textAlign: 'center',
            marginHorizontal: '5',
        },
        background: {
            width: '100%',
            height: '100%',
            alignItems: 'center'
        },
        loginText: {
            fontSize: '20',
            marginTop: '20',
            color: Colors.LIGHT_GREY,
            marginBottom: '50',
            textAlign: 'center',
            fontWeight: '500',
        }
    });

const home = ({ navigation }) => {

    return (
        <View style={styles.body}>
            <Image
                source={require('../Background.jpg')}
                style={styles.background}
            >
                <Text style={styles.text}>Make yourself stronger than your excuses</Text>
                <View style={styles.footer}>
                    <Button
                        title='Get Started'
                        onPress={() => navigation.navigate('signup')}
                    />
                    <Pressable onPress={() => navigation.navigate('signin')}>
                        <Text style={styles.loginText}>Or login</Text>
                    </Pressable>
                </View>
            </Image>
        </View>
    );

};
export default home;
