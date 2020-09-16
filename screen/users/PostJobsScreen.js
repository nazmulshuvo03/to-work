import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PostJobsScreen = () => {
    return (
        <View style={StyleSheet.container}>
            <Text>PostJobsScreen</Text>
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

export default PostJobsScreen;
