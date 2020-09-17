import React from "react";
import { View, Text, StyleSheet } from "react-native";

const WelcomeScreen = () => {
    return (
        <View style={styles.container}>
            <Text>WelcomeScreen authorized users</Text>
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

export default WelcomeScreen;
