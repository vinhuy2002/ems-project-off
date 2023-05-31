import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AlertIndex from "../screen/main-screen/alert/AlertIndex";
import DashboardIndex from "../screen/main-screen/dashboard/DashboardIndex";
import ReportIndex from "../screen/main-screen/report/ReportIndex";
import SettingIndex from "../screen/main-screen/setting/SettingIndex";
import Icon from "react-native-vector-icons/AntDesign";
import MaterialDesign from "react-native-vector-icons/MaterialCommunityIcons"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from "react-native";


const BottomTab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

export const A2 = () => {
  return (
  <View>
      <Text>This is report setting</Text>
  </View>
  );
}
export const A1 = () => {
  return (
  <View>
      <Text>This is Home report setting</Text>
  </View>
  );
}

const HestTest = () => {
  return(
      <TopTab.Navigator>
        <TopTab.Screen name="Thời gian" component={A1} />
        <TopTab.Screen name="Thiết bị" component={A2} />
      </TopTab.Navigator>
  );
}

const BotttomNav = () => {
  return (
    <BottomTab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#43A047', tabBarInactiveTintColor: '#d5bdaf' }}>
      <BottomTab.Screen name="Home" component={DashboardIndex} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
      }} />
      <BottomTab.Screen name="ReportIndex" component={ReportIndex}
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({ color, size }) => (
            <Icon name="profile" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen name="AlertIndex" component={AlertIndex}
        options={{
          tabBarLabel: 'Alert',
          tabBarIcon: ({ color, size }) => (
            <MaterialDesign name="alarm" color={color} size={size} />
          ),
        }}
      />
      <BottomTab.Screen name="SettingIndex" component={SettingIndex}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => (
            <Icon name="setting" color={color} size={size} />
          ),
        }}
      />
    </BottomTab.Navigator>
  )
}

export default BotttomNav;