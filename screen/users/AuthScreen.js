import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AuthScreen = () => {
    return (
        <View style={StyleSheet.container}>
            <Text>AuthScreen</Text>
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
