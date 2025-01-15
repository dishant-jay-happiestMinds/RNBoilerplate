import React, { useState } from 'react';
import {
    Platform,
    Pressable,
    StyleSheet,
    Text,
    useWindowDimensions,
    View
} from 'react-native';

export default function App() {
    const { height } = useWindowDimensions();
    const [number, setNumber] = useState(0);

    function handlePress() {
        setNumber(parseInt(Math.random() * 10000, 10) % 100);
    }

    return (
        <View style={[styles.container, { height }, StyleSheet.absoluteFill]}>
            <Text style={styles.welcome}>Welcome to React Native!</Text>
            <Text style={styles.info}>This App is Running on <Text style={styles.platform}>{Platform.OS} </Text></Text>
            <View style={styles.br} />
            <Text>Random number: {number}</Text>
            <Pressable
                style={({ pressed }) => [
                    {
                        opacity: pressed ? 0.7 : 1,
                    },
                    styles.btn,
                ]}
                onPress={handlePress}>
                <Text style={styles.btnText}>Generate a Number</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    br: {
        marginTop:20,
    },
    btn: {
        backgroundColor: '#222',
        padding: 10,
        marginTop:10,
    },
    btnText: {
        color: '#fff',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    info: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    platform: {
        color: 'blue',
        textTransform: 'uppercase',
    },
});
