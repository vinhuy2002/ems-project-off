import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableHighlight } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { alarmcustomize } from "../../../models/alarms";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';
import { getAlarmList } from "../../../api/AlertApi";
import { statusAlarm, alarmInfo, } from "../../../models/alarms";
import { ListResponse } from "../../../models/common";
import { Card } from "@rneui/base";
import styles from "./styles";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Foundation from 'react-native-vector-icons/Foundation'

const CustomText = (props: any) => {
  return (
    <Text style={[styles.text, styles.padLeft]}>
      {props.children}
    </Text>
  );
}

interface alertName{
  name: string
}

const SmallAlert = (params: alertName) => {
  return (
    <View style={[{ borderWidth: 1, borderColor: '#EBD5D5', marginTop: 10 }]}>
      <View style={[styles.directionRow]}>
        <View style={styles.first}>
          <MaterialIcons name="alarm" size={30} />
        </View>

        <View style={[styles.second]}>
          <CustomText>Originator: {params.name}</CustomText>
          <View style={[styles.directionRow, {paddingTop: 8}]}>
            <View style={styles.colEqual}>
              <View style={styles.centerRow}>
                <CustomText>Type: </CustomText>
                <CustomText>Fault</CustomText>
              </View>
            </View>
            <View style={styles.colEqual}>
              <View style={styles.centerRow}>
                <CustomText>Serverity: </CustomText>
                <CustomText>Critical</CustomText>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

interface alarmCardPropd {
  data: alarmcustomize;
}

const Stack = createNativeStackNavigator();
const HomeAlert = () => {
  return (
    <Card containerStyle={{ borderRadius: 10 }}>
      <View style={styles.directionRow}>
        <View style={styles.first}>
          <Foundation name="alert" size={40} />
        </View>
        <View style={styles.second}>
          <CustomText>Danh sách báo động</CustomText>
        </View>
      </View>
      <SmallAlert name={'ABPX48691'} />
      <SmallAlert name={'ABPX48692'}/>
      <SmallAlert name={'ABPX48693'}/>
      <SmallAlert name={'ABPX48694'}/>
    </Card>

  );
}
const AlertIndex = () => {
  return (
    <Stack.Navigator initialRouteName="Alert">
      <Stack.Screen name="Alert" component={HomeAlert} />
    </Stack.Navigator>
  );
}


export default AlertIndex;