import * as React from 'react';
import { Button, View, Text, ScrollView  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Card, Image } from '@rneui/themed';
import { Divider } from '@rneui/base';

interface itemName{
  imageId: number,
};

const CardGigaChart = () => {
  return (
    <Card containerStyle={{ borderRadius: 10 }}>

      <Text> Giga Chart</Text>

    </Card>

  );
}

const CardDisplayTotal = (props: itemName) => {
  const selectImg = [
    require('../../../assets/images/day.png'),
    require('../../../assets/images/month.png'),
    require('../../../assets/images/year.png')
  ]
  const selectText = [
    "Ngày hôm nay",
    "Tháng này",
    "Năm này"
  ]
  return (
      <Card containerStyle={{ borderRadius: 10 }}>
        <View style={{flexDirection: 'row'}}>
          <View style={{justifyContent: 'center', paddingRight: 20}}>
            <Image source={selectImg[props.imageId]} style={{width: 50, height: 50}} />
          </View>
          <View style={{flexDirection: 'column', width: '80%'}}>
              <Text>{selectText[props.imageId]}</Text>
            <Divider style={{width: '100%'}} />
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../../../assets/images/Flash-On.png')} style={{width: 20, height: 20}} />
                <Text>Tiêu thụ: </Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image source={require('../../../assets/images/Stack-of-Money.png')} style={{width: 20, height: 20}} />
                <Text>Tiền điện: </Text>
              </View>
          </View>
        </View>
      </Card>

  );

}

const Home1 = ({ navigation }: any) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView>
      <CardDisplayTotal imageId={0} />
      <CardDisplayTotal imageId={1} />
      <CardDisplayTotal imageId={2} />
      <CardGigaChart />
      <CardGigaChart />
      <CardGigaChart />
      <CardGigaChart />
      <CardGigaChart />
      <CardGigaChart />
      <CardGigaChart />
      <CardGigaChart />
      </ScrollView>
      

    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function DashboardIndex() {
  return (
    <Stack.Navigator initialRouteName="Dashboard">
      <Stack.Screen name="Dashboard" component={Home1} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default DashboardIndex;