import {StyleSheet, Text, View} from 'react-native';
import React, { useState } from "react";
import { alarmcustomize } from "../../../models/alarms";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment';

interface alarmCardPropd {
    data: alarmcustomize;
  }
  const AlarmCard = ({data}: alarmCardPropd) => {
    const [checkedState, setCheckedState] = useState(false);
    return (
      <View style={styles.root}>
        <View style={styles.timeContent}>
          <Icon size={36} name="clock-outline" />
          <Text style={[styles.textTime, {fontWeight: '700'}]}>
            {moment(data?.start_ts).format('HH:mm')}
          </Text>
          <Text style={styles.textTime}>{moment(data?.start_ts).format('DD-MM-YYYY')}</Text>
        </View>
        <View style={styles.textZone}>
          <View style={styles.textField}>
            <Text style={styles.lable}>Type:</Text>
            <Text style={styles.inf}>{data?.type}</Text>
          </View>
          <View style={styles.textField}>
            <Text style={styles.lable}>Originator:</Text>
            <Text style={styles.inf}>{data?.originator.entity_name}</Text>
          </View>
        </View>
        <View style={styles.textZone}>
          <View style={styles.textField}>
            <Text style={styles.lable}>Status:</Text>
            {data?.active ? (
              <Text style={[styles.inf]}>ACTIVE</Text>
            ):(
              <Text style={[styles.inf]}>CLEARED</Text>
            )}
          </View>
          <View style={styles.textField}>
            <Text style={styles.lable}>Serverity:</Text>
            {data?.severity === "WARNING" && (
              <Text style={[styles.inf]}>
                WARNING
              </Text>
            )}
            {data?.severity === "CRITICAL" && (
              <Text style={[styles.inf]}>
                CRITICAL
              </Text>
            )}
          </View>
        </View>
      </View>
    );
  };
  const styles = StyleSheet.create({
    root: {
      width: '100%',
      height: 100,
      paddingHorizontal: 8,
      paddingVertical: 8,
      borderRadius: 4,
      flexDirection: 'row',
      backgroundColor: 'white',
      justifyContent: 'space-between',
      alignContent: 'center',
      alignItems: 'center',
      marginBottom: 8,
    },
    timeContent: {
      width: '20%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      alignItems: 'center',
    },
    textZone: {
      height: '100%',
      flexDirection: 'column',
      flex: 1,
    },
    textField: {
      flex: 1,
      flexDirection: 'row',
      justifyContent:'center',
      alignContent:'center',
      alignItems:'center',
    },
    lable: {
      flex: 2,
      fontFamily: 'Segoe UI',
      fontSize: 11,
      fontWeight: '300',
      textAlign: 'center',
    },
    inf: {
      flex: 3,
      fontFamily: 'Segoe UI',
      fontSize: 12,
      fontWeight: '700',
      textAlign: 'center',
    },
    textTime: {
      fontSize:12,
    },
  });
  export default AlarmCard;
  