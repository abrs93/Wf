import React from 'react';
import {  Text, View } from "react-native";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Product from '../components/product';
import Checkout from '../components/checkout';


const AppNavigator = createStackNavigator({
    Home: {
      screen: Product,
    },
    Checkout : {
        screen: Checkout
    }
  },{
      initialRouteName:'Home'
  });

export default createAppContainer(AppNavigator);