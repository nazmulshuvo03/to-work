import React from "react";
import { View, Text, StyleSheet } from "react-native";
import * as firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyD6LK_y37jl-dbKxkBAAl5uuoGT-yBbupU",
    authDomain: "to-work-c78ce.firebaseapp.com",
    databaseURL: "https://to-work-c78ce.firebaseio.com",
    projectId: "to-work-c78ce",
    storageBucket: "to-work-c78ce.appspot.com",
    messagingSenderId: "243383915564",
    appId: "1:243383915564:web:abdaa422ee56620c476d89",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const StartupScreen = () => {
    return (
        <View style={StyleSheet.container}>
            <Text>StartupScreen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#fff",
    },
});

export default StartupScreen;
