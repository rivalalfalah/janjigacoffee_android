import {View, Text, ScrollView, ToastAndroid} from 'react-native';
import React from 'react';
import styles from '../style/Dashboard';
import Menu from 'react-native-vector-icons/MaterialCommunityIcons';
import {Dimensions} from 'react-native';
import ButtonOpacity from '../components/ButtonOpacity';

import {
  ProgressChart,
  StackedBarChart,
} from 'react-native-chart-kit';

const Dashboard = () => {
  const chartConfig = {
    backgroundGradientFrom: "#fff",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#fff",
    backgroundGradientToOpacity: 0.5,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    color: (opacity = 1) => `rgba(245, 161, 39, ${opacity})`,
    strokeWidth: 3, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
  };
  
  const screenWidth = Dimensions.get('window').width;
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    legend: ['In', 'Out'],
    data: [
      [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
      [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
      [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
      [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
      [Math.floor(Math.random() * 100), Math.floor(Math.random() * 100)],
    ],
    barColors: ['#FFBA33', '#6A4029'],
  };
  const dataSecond = {
    labels: ['M', 'T', 'M', 'T', 'F', 'S', 'S'],
    data: [
      [Math.floor(Math.random() * 100)],
      [Math.floor(Math.random() * 100)],
      [Math.floor(Math.random() * 100)],
      [Math.floor(Math.random() * 100)],
      [Math.floor(Math.random() * 100)],
      [Math.floor(Math.random() * 100)],
      [Math.floor(Math.random() * 100)],
    ],
    barColors: ['#FFBA33'],
  };
  const dataGoals = {
    data: [0.76]
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.month_bar}>
          <View style={styles.title_month}>
            <Text style={styles.label_month}>Monthly Report</Text>
            <Menu
              color={'#000'}
              size={25}
              name={'dots-vertical'}
              brand={'MaterialCommunityIcons'}
              type="material"
              onPress={() =>
                ToastAndroid.showWithGravity(
                  'Coming Soon',
                  ToastAndroid.LONG,
                  ToastAndroid.TOP,
                )
              }
            />
          </View>
          <Text style={styles.lastmonth}>Last 6 months</Text>
          <StackedBarChart
            showLegend={false}
            data={data}
            width={screenWidth}
            height={300}
            yAxisLabel="$"
            yAxisSuffix="k"
            chartConfig={{
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 1, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
                marginVertical: 8,
              },
            }}
          />
        </View>
        {/* year */}
        <View style={styles.month_bar}>
          <View style={styles.title_month}>
            <Text style={styles.label_month}>IDR 2.5M</Text>
            <Menu
              color={'#000'}
              size={25}
              name={'dots-vertical'}
              brand={'MaterialCommunityIcons'}
              type="material"
              onPress={() =>
                ToastAndroid.showWithGravity(
                  'Coming Soon',
                  ToastAndroid.LONG,
                  ToastAndroid.TOP,
                )
              }
            />
          </View>
          <Text style={styles.lastmonth}>Daily average</Text>
          <StackedBarChart 
            showLegend={false}
            data={dataSecond}
            width={350}
            height={220}
            yAxisLabel="$"
            yAxisSuffix="k"
            chartConfig={{
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 1, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              style: {
                borderRadius: 16,
                marginVertical: 8,
              },
            }}
          />
        </View>
        <View style={styles.month_bar}>
          <View style={styles.title_goals}>
            <Text style={styles.goals}>Goals</Text>
            <Text style={styles.goalsDesc}>Your goals is still on 76%. Keep up the good work!</Text>
          </View>
          <View style={styles.progress_chart}>
          <ProgressChart
          data={dataGoals}
          width={screenWidth}
          height={220}
          strokeWidth={15}
          radius={32}
          chartConfig={chartConfig}
          hideLegend={false}
        />
        </View>
        </View>
        <ButtonOpacity
            color={'#6A4029'}
            text="Print Report"
            radius={20}
            colorText="white"
            height={60}
            width={`90%`}
            marginBottom={30}
            marginTop={40}
            onPressHandler={{
              onPress: () =>   ToastAndroid.showWithGravity(
                'coming soon',
                ToastAndroid.LONG,
                ToastAndroid.TOP,
              ),
            }}
          />
      </View>
    </ScrollView>
  );
};

export default Dashboard;
