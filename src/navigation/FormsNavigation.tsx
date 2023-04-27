import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import RegisterIndex from "../screen/register/RegisterIndex";
import LoginIndex from "../screen/login/LoginIndex";
import BotttomNav from "./BottomNavigation";

const {Navigator, Screen} = createNativeStackNavigator();

const FormsNav = () => {
    return (
    <NavigationContainer>
        <Navigator initialRouteName="Login"  screenOptions={{headerShown: false}} >
            <Screen name="Login" component={LoginIndex} ></Screen>
            <Screen name="Register" component={RegisterIndex} ></Screen>
            <Screen name="MainIndexPage" component={BotttomNav}></Screen>
        </Navigator>
    </NavigationContainer>
    );
}

export default FormsNav;