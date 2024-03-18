import React from 'react';
import {Image} from 'react-native';
import Search from '../screens/Search';
import Library from '../screens/Library';
import BookList from '../screens/BookList';
import BookDeatil from '../screens/BookDetail';
import imageConstants from '../utils/imageConstant';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const BottomTab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator screenOptions={{
      tabBarActiveTintColor : '#000000'
    }}>
      <BottomTab.Screen
        name="BookList"
        component={BookList}
        options={{
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={imageConstants.home}
                style={{height: 20, width: 20}}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={Search}
        options={{
          unmountOnBlur:true,
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={imageConstants.search}
                style={{height: 20, width: 20}}
              />
            );
          },
        }}
      />
      <BottomTab.Screen
        name="Library"
        component={Library}
        options={{
          unmountOnBlur:true,
          headerShown: false,
          tabBarIcon: () => {
            return (
              <Image
                source={imageConstants.library}
                style={{height: 20, width: 20}}
              />
            );
          },
        }}
      />
    </BottomTab.Navigator>
  );
};

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTab"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="BookDetail" component={BookDeatil}  options={{headerShown: false }}/>
    </Stack.Navigator>
  );
};

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
