import React, { Component, useRef } from 'react';
import { Alert, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Agenda } from 'react-native-calendars';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Platform } from 'react-native';
import { StatusBar } from 'react-native';
import { StatusBar as StatusBar2 } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import auth from '@react-native-firebase/auth';
import { Pressable } from 'react-native';
import {
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import Background from './razvam/Background';
import OpenAI from 'openai';
import Slider from '@react-native-community/slider';
const AgendaScreen = () => {
  const [items, setItems] = React.useState({});
  const currentDate = new Date().toISOString().split('T')[0];
  const bottomSheetModalRef = useRef(null);
  const baseURL = "https://api.aimlapi.com/v1";
  const apiKey = "9644a52e260844e28024692c252e6247";
  const api = new OpenAI({
    apiKey,
    baseURL,
  });

  const handlePresentModalPress = () => {
    bottomSheetModalRef.current?.present();
  };
  const handleSheetChanges = (index) => {
    console.log('handleSheetChanges', index);
  };

  const handleiaiai = () => {
    console.log("pressed");
  };

  const loadItems = (day) => {
    const newItems = items || {};

    setTimeout(() => {
      const time = day.timestamp || new Date().getTime();
      const strTime = timeToString(time);

      if (!newItems[strTime]) {
        newItems[strTime] = [];
        newItems[strTime].push({
          name: 'Event 1',
          height: 50
        });
        newItems[strTime].push({
          name: 'Event 2',
          height: 50
        });
        newItems[strTime].push({
          name: 'Event 3',
          height: 50
        });
      }
      setItems(newItems);
    }, 1000);
  };

  const renderItem = (reservation) => {
    return (
      <TouchableOpacity
        style={[styles.item, { height: reservation.height }]}
        onPress={() => Alert.alert(reservation.name)}
      >
        <Text>{reservation.name}</Text>
      </TouchableOpacity>
    );
  };

  const renderEmptyDate = () => {
    return (
      <View style={styles.emptyDate}>
        <View style={{ borderBottomColor: 'gray', borderBottomWidth: 1, marginVertical: 10 }} />
      </View>
    );
  };

  const rowHasChanged = (r1, r2) => {
    return r1.name !== r2.name;
  };

  const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#493155' }}>
      <Agenda
        items={items}
        loadItemsForMonth={loadItems}
        selected={currentDate}
        renderItem={renderItem}
        renderEmptyDate={renderEmptyDate}
        rowHasChanged={rowHasChanged}
        theme={{
          agendaDayTextColor: '#decfb4',
          agendaDayNumColor: '#decfb4',
          agendaTodayColor: '#c987e6',
          agendaKnobColor: '#decfb4',
          calendarBackground: '#493155',
          calendarDayTextColor: '#decfb4',
          reservationsBackgroundColor: "#110915",
          textSectionTitleColor: '#decfb4',
          selectedDayBackgroundColor: '#c987e6',
          textSectionTitleDisabledColor: '#d9e1e8',
          dayTextColor: '#decfb4',
          monthTextColor: "#decfb4",
        }}
      />
      <Pressable
        style={({ pressed }) => [
          {
            position: 'absolute',
            right: 20,
            bottom: 20,
            backgroundColor: '#c987e6',
            padding: 15,
            borderRadius: 50,
            transform: [{ scale: pressed ? 0.95 : 1 }],
          },
        ]}
        onPress={handlePresentModalPress}
      >
        <Ionicons name="add" size={24} color="white" />
      </Pressable>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        onChange={handleSheetChanges}
        snapPoints={['95%']}
        enableDynamicSizing={false}
        backgroundStyle={{ backgroundColor: '#200f29' }}
        handleIndicatorStyle={{ backgroundColor: '#decfb4' }}
      >
        <BottomSheetView style={{ padding: 20 }}>
            <Text style={{ color: '#decfb4', marginBottom: 10 }}>Task Description</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: '#decfb4',
                borderWidth: 1,
                borderRadius: 5,
                color: '#decfb4',
                paddingHorizontal: 10,
                marginBottom: 20,
                width: '100%',
              }}
              placeholder="Enter task description"
              placeholderTextColor="#decfb4"
            />
            <Text style={{ color: '#decfb4', marginBottom: 10 }}>Task Difficulty</Text>
            <Slider
              style={{ width: '100%', height: 40, marginBottom: 20 }}
              minimumValue={0}
              maximumValue={10}
              minimumTrackTintColor="#c987e6"
              maximumTrackTintColor="#decfb4"
            />
            <Text style={{ color: '#decfb4', marginBottom: 10 }}>Task Urgency</Text>
            <Slider
              style={{ width: '100%', height: 40, marginBottom: 20 }}
              minimumValue={0}
              maximumValue={10}
              minimumTrackTintColor="#c987e6"
              maximumTrackTintColor="#decfb4"
            />
            <Text style={{ color: '#decfb4', marginBottom: 10 }}>Task Duration (minutes)</Text>
            <TextInput
              style={{
                height: 40,
                borderColor: '#decfb4',
                borderWidth: 1,
                borderRadius: 5,
                color: '#decfb4',
                paddingHorizontal: 10,
                marginBottom: 20,
                width: '100%',
              }}
              placeholder="Enter task duration"
              placeholderTextColor="#decfb4"
              keyboardType="numeric"
            />
            <TouchableOpacity
              style={{
                backgroundColor: '#c987e6',
                padding: 15,
                borderRadius: 5,
                alignItems: 'center',
                width: '100%',
              }}
              onPress={handleiaiai}
            >
              <Text style={{ color: 'white' }}>Submit</Text>
            </TouchableOpacity>
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    flex: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
    marginTop: 17
  },
  emptyDate: {
    height: 15,
    flex: 1,
    paddingTop: 30
  }
});

const Btn = ({text}) => {
  return(
    <TouchableOpacity style={settingsStyles.btn}>
      <Text> {text} </Text>
    </TouchableOpacity>
  )
}

function SettingsTab() {
  return (
    <View style={settingsStyles.fundal}>
      <Background />
      <View style={settingsStyles.menu}>
        <Btn text={'Activities'}/>
      </View>
    </View>
  );
}

const settingsStyles = StyleSheet.create({
  fundal: {
    backgroundColor: '#2c1e33',
    position: 'relative',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  menu: {
    width: '85%',
    height: '70%',
    backgroundColor: '#200f29',
    borderRadius: 30,
  },
  btn:{
    backgroundColor: '#2c1e33',
    width: '90%',
    height: 50,
  },
});


const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar2 style="light" />
      <View style={{ flex: 1, paddingTop: StatusBar.currentHeight, backgroundColor: "#493155" }}>
        <Tab.Navigator
          initialRouteName="Agenda"
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarIcon: ({ color, size }) => {
              let iconName;
              if (route.name === 'Agenda') {
                iconName = 'calendar-clear';
              }
              else if (route.name === 'Settings') {
                iconName = 'settings';
              }
              return <Ionicons name={iconName} size={size} color={color} />;

            },
            tabBarStyle: { backgroundColor: '#493155' }
          })}
        >
          <Tab.Screen name="Agenda" component={AgendaScreen} options={{ tabBarActiveTintColor: '#c987e6' }} />
          <Tab.Screen name="Settings" component={SettingsTab} options={{ tabBarActiveTintColor: '#c987e6' }} />
        </Tab.Navigator>

      </View>
    </NavigationContainer>
  );
}

export default App;
