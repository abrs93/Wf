import React from 'react';
import { Provider } from 'react-redux';
import {  Text, View } from "react-native";
import store from './store';
import Navigator from './navigator';

const App = () => {

    return (
        <Provider store={store}>
            <Navigator></Navigator>
        </Provider>
        
      
    )
};

export default App;
