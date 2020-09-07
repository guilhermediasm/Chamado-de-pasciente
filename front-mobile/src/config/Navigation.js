import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

import ListPage from '../pages/listPage/listPage'
import DetailsPage from '../pages/edit/index'

export default function Routes() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={ListPage}
            />
            <Stack.Screen
                name='Editar'
                component={DetailsPage}
            />
        </Stack.Navigator>
    )
}
