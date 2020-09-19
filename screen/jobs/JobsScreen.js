import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import CustomHeaderButton from "../../components/UI/HeaderButton";
import { HeaderButtons, Items } from "react-navigation-header-buttons";

const JobsScreen = (props) => {
    return (
        <View style={styles.container}>
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

JobsScreen.navigationOptions = (navData) => {
    return {
        headerTitle: "Latest Available Jobs",
        headerRight: () => (
            <Button
                title="menu"
                onPress={() => navData.navigation.toggleDrawer()}
            />
        ),
    };
};

{
    /* <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
    <Items
        title="menu"
        iconName="md-menu"
        onPress={() => navData.navigation.toggleDrawer()}
    />
</HeaderButtons>; */
}

export default JobsScreen;
