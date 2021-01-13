import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import Home from './Home';
import Orders from './Orders';
import OrderDetail from './OrderDetail';

const Stack = createStackNavigator();

function Routes() {
return (
        <NavigationContainer>
            <Stack.Navigator
                headerMode="none"
                screenOptions={{
                    cardStyle:{
                        backgroundColor:'#FFF'
                    }
                }}
            >
            <Stack.Screen name ="Home" component={Home}></Stack.Screen>
            <Stack.Screen name ="Orders" component={Orders}></Stack.Screen>
            <Stack.Screen name ="OrderDetail" component={OrderDetail}></Stack.Screen>
            </Stack.Navigator>

        </NavigationContainer>
    );
}

const styles = StyleSheet.create({});

export default Routes;