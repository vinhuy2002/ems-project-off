import React, { useState } from "react";
import { View, Text, Button, StyleSheet, TextInput, TouchableHighlight, TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SafeAreaView } from "react-native-safe-area-context";
import { Header } from '@rneui/themed';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import styles from "./styles";
import { Card } from "@rneui/base";
import DatePicker from 'react-native-date-picker';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

const TopTab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();

const CustomText = (props: any) => {
    return (
        <Text style={[styles.text, styles.padLeft]}>
            {props.children}
        </Text>
    );
}

export const Time = () => {
    const test = {
        tableHead: ['', 'Head2', 'Head3'],
        tableTitle: ['Total', 'Hig.', 'Avg.', 'Low.'],
        tableData: [
            ['41.18 kWh', '41.18 kWh'],
            ['41.18 kWh', '41.18 kWh'],
            ['41.18 kWh', '41.18 kWh'],
            ['41.18 kWh', '41.18 kWh']
        ]
    }
    const [date1, setDate1] = useState(new Date())
    const [date2, setDate2] = useState(new Date())
    const [open1, setOpen1] = useState(false)
    const [open2, setOpen2] = useState(false)
    return (
        <View>
            <Card containerStyle={{ borderRadius: 10 }}>
                <CustomText>So sánh giữa</CustomText>
                <View style={[styles.directionRow]}>
                    <View style={[styles.col]}>
                        <TouchableOpacity onPress={() => setOpen1(true)}>
                            <View style={styles.borderStyle}>
                                <CustomText>{date1.toDateString()}</CustomText>
                            </View>
                        </TouchableOpacity>
                        <DatePicker
                            modal
                            open={open1}
                            date={date1}
                            onConfirm={(date1) => {
                                setOpen1(false)
                                setDate1(date1)
                            }}
                            onCancel={() => {
                                setOpen1(false)
                            }}
                            mode="date"
                        />
                    </View>
                    <View style={[styles.col]}>
                        <TouchableOpacity onPress={() => setOpen2(true)}>
                            <View style={styles.borderStyle}>
                                <CustomText>{date2.toDateString()}</CustomText>
                            </View>
                        </TouchableOpacity>
                        <DatePicker
                            modal
                            open={open2}
                            date={date2}
                            onConfirm={(date2) => {
                                setOpen2(false)
                                setDate2(date2)
                            }}
                            onCancel={() => {
                                setOpen2(false)
                            }}
                            mode="date"
                        />
                    </View>
                </View>

                <CustomText>Biểu đồ:</CustomText>
                <Table borderStyle={{ borderWidth: 1 }} >
                    <Row data={['',date1.toDateString(), date2.toDateString()]} style={styles.head} textStyle={styles.text1} />
                    <TableWrapper style={styles.wrapper}>
                        <Col data={test.tableTitle} style={styles.title} heightArr={[28, 28]} textStyle={styles.text1} />
                        <Rows data={test.tableData} flexArr={[1, 1]} style={styles.row} textStyle={styles.text1} />
                    </TableWrapper>
                </Table>
            </Card>
        </View>
    );
}
export const Device = () => {
    return (
        <View>
            <Text>This is Home setting</Text>
        </View>
    );
}

const ReportIndex = () => {
    return (
        <TopTab.Navigator>
            <TopTab.Screen name="Thời gian" component={Time} />
            <TopTab.Screen name="Thiết bị" component={Device} />
        </TopTab.Navigator>
    );
}

export default ReportIndex;