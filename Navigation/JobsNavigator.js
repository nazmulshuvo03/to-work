import { createSwitchNavigator, createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createStackNavigator } from "react-navigation-stack";

import StartupScreen from "../screen/StartupScreen";
import WelcomeScreen from "../screen/WelcomeScreen";
import AuthScreen from "../screen/users/AuthScreen";
import JobsScreen from "../screen/jobs/JobsScreen";
import PostJobsScreen from "../screen/users/PostJobsScreen";

const JobsNavigator = createStackNavigator(
    {
        Jobs: {
            screen: JobsScreen,
        },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "red",
            },
            headerTintColor: "white",
        },
    }
);

const PostJobsNavigator = createStackNavigator(
    {
        Jobs: {
            screen: PostJobsScreen,
        },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "red",
            },
            headerTintColor: "white",
        },
    }
);

const DrawerNavigator = createDrawerNavigator({
    LatestJobs: {
        screen: JobsNavigator,
    },
    PostNewJobs: {
        screen: PostJobsNavigator,
    },
});

const MainNavigator = createSwitchNavigator({
    StartupScreen: StartupScreen,
    Jobs: DrawerNavigator,
    Auth: AuthScreen,
});

export default createAppContainer(MainNavigator);
