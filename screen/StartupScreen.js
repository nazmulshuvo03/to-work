import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
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
// firebase.initializeApp(firebaseConfig);
if (firebase.apps.length === 0) firebase.initializeApp(firebaseConfig);

const StartupScreen = (props) => {
    const tryLogin = async () => {
        try {
            await firebase.auth().onAuthStateChanged((user) => {
                if (user != null) {
                    console.log("user is logged in");
                    props.navigation.navigate("Jobs");
                } else {
                    console.log("user is not logged in");
                    props.navigation.navigate("Auth");
                }
            });
        } catch {
            console.log("errors");
        }
    };

    React.useEffect(() => {
        tryLogin();
    }, []);

    return (
        <View style={styles.container}>
            <ActivityIndicator size="large" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignContent: "center",
        backgroundColor: "#fff",
        color: "#000",
    },
});

export default StartupScreen;
