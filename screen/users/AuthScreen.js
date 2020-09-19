import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import * as Facebook from "expo-facebook";
import * as firebase from "firebase";

const AuthScreen = (props) => {
    const facebook = async () => {
        await Facebook.initializeAsync("839133610162705");

        const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
        } = await Facebook.logInWithReadPermissionsAsync({
            permission: "public_profile",
        });
        if (type == "success") {
            const credential = firebase.auth.FacebookAuthProvider.credential(
                token
            );
            firebase
                .auth()
                .signInWithCredential(credential)
                .catch((error) => {
                    console.log("error", error);
                });
            props.navigation.navigate("Jobs");
        }
    };

    return (
        <View style={styles.container}>
            <Text
                style={{ fontSize: 35, textAlign: "center", paddingBottom: 8 }}
            >{`Find Jobs or \nSubmit Jobs`}</Text>
            <View style={{ paddingHorizontal: 30, marginTop: 10 }}>
                <Button title="Login with Facebook" onPress={facebook} />
            </View>
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

export default AuthScreen;
