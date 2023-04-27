import React, { useState } from 'react';
import { Button, View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card, Image, ButtonGroup } from '@rneui/themed';
import { Divider } from '@rneui/base';
import styles from './styles';
import Icon from "react-native-vector-icons/AntDesign";

interface itemName {
  imageId: number,
};

interface strName {
  name: string,
}

const CardGigaChart = (props: strName) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <Card containerStyle={{ borderRadius: 10 }}>
      <View style={styles.directionRow}>
        <View style={[styles.smallDirRow]}>
          <Icon name='linechart' size={20} color={'black'} />
          <CustomText> Giga Chart</CustomText>
        </View>
        <View style={{ alignItems: 'flex-end', width: '50%' }}>
          <CustomText>{props.name}</CustomText>
        </View>
      </View>
      <View style={[styles.directionRow, { alignItems: 'center', marginTop: 20 }]}>
        <CustomText>Sắp xếp theo: </CustomText>
        <ButtonGroup
          buttons={['Ngày', 'Tháng', 'Năm']}
          selectedIndex={selectedIndex}
          onPress={(value) => {
            console.log(value);
            setSelectedIndex(value);
          }}
          buttonStyle= {{ padding: 5, height: 10, }}
          containerStyle={{ marginBottom: 20, width: '60%', height: '100%', alignItems: 'center'}}
        />
      </View>
      
    </Card>

  );
}

const CustomText = (props: any) => {
  return (
    <Text style={styles.text}>
      {props.children}
    </Text>
  );
}

const CardDisplayTotal = (props: itemName) => {
  const selectImg = [
    require('../../../assets/images/day.png'),
    require('../../../assets/images/month.png'),
    require('../../../assets/images/year.png'),
  ]
  const selectText = [
    "Ngày hôm nay",
    "Tháng này",
    "Năm này"
  ]
  return (
    <Card containerStyle={{ borderRadius: 10 }}>
      <View style={styles.directionRow}>
        <View style={styles.first}>
          <Image source={selectImg[props.imageId]} style={styles.largeImg} />
        </View>
        <View style={styles.second}>
          <CustomText>{selectText[props.imageId]}</CustomText>
          <Divider style={styles.divider} color='#000000' width={2} />
          <View style={styles.centerRow}>
            <Image source={require('../../../assets/images/flash.png')} style={styles.smallImg} />
            <CustomText>Tiêu thụ: </CustomText>
          </View>
          <View style={styles.centerRow}>
            <Image source={require('../../../assets/images/money.png')} style={styles.smallImg} />
            <CustomText>Tiền điện: </CustomText>
          </View>
        </View>
      </View>
    </Card>

  );

}

const Home1 = ({ navigation }: any) => {
  return (
    <View>
      <ScrollView style={{paddingBottom: 20}}>
        <CardDisplayTotal imageId={0} />
        <CardDisplayTotal imageId={1} />
        <CardDisplayTotal imageId={2} />
        <CardGigaChart name='Tải'/>
        <CardGigaChart name='Tiêu thụ'/>
      </ScrollView>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function DashboardIndex() {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Home1} />
    </Stack.Navigator>
  );
}

export default DashboardIndex;