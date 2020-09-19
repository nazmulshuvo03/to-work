import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import { HeaderButtons, Items } from "react-navigation-header-buttons";

const PostJobsScreen = () => {
    return (
        <View style={styles.container}>
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

PostJobsScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "Post New Jobs",
        headerRight: () => (
            <Button
                title="menu"
                onPress={() => navData.navigation.toggleDrawer()}
            />
        ),
    };
};

export default PostJobsScreen;
