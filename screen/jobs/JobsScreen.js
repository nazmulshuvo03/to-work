import React from "react";
import { View, Text, StyleSheet } from "react-native";

const JobsScreen = () => {
    return (
        <View style={StyleSheet.container}>
            <Text>JobsScreen</Text>
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

export default JobsScreen;
