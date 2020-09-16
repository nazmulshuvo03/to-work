import React from "react";
import { View, Text, StyleSheet } from "react-native";

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
