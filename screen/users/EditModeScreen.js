import React from "react";
import { View, Text, StyleSheet } from "react-native";

const EditModeScreen = () => {
    return (
        <View style={StyleSheet.container}>
            <Text>EditModeScreen</Text>
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

export default EditModeScreen;
