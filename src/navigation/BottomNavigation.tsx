import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import AlertIndex from "../screen/main-screen/alert/AlertIndex";
import DashboardIndex from "../screen/main-screen/dashboard/DashboardIndex";
import ReportIndex from "../screen/main-screen/report/ReportIndex";
import SettingIndex from "../screen/main-screen/setting/SettingIndex";
import Icon from "react-native-vector-icons/AntDesign";
import MaterialDesign from "react-native-vector-icons/MaterialCommunityIcons"


const Tab = createBottomTabNavigator();

const BotttomNav = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false, tabBarActiveTintColor: '#43A047', tabBarInactiveTintColor: '#d5bdaf' }}>
      <Tab.Screen name="Home" component={DashboardIndex} options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
          <Icon name="home" color={color} size={size} />
        ),
      }} />
      <Tab.Screen name="Report" component={ReportIndex}
        options={{
          tabBarLabel: 'Report',
          tabBarIcon: ({ color, size }) => (
            <Icon name="profile" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Alert" component={AlertIndex}
        options={{
          tabBarLabel: 'Alert',
          tabBarIcon: ({ color, size }) => (
            <MaterialDesign name="alarm" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="Setting" component={SettingIndex}
        options={{
          tabBarLabel: 'Setting',
          tabBarIcon: ({ color, size }) => (
            <Icon name="setting" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}

export default BotttomNav;