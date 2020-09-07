import 'react-native-gesture-handler';
import * as React from 'react';
import { Provider } from "react-redux";
import { store } from '../Store/storeConfig';
import Routes from './Navigation'
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </Provider>
    )

}
export default App
