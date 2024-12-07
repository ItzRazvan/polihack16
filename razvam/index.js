import { View, StyleSheet } from 'react-native';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default AuthFlow = () => {
    return (
        <View style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="App1" component={App1} />
                    <Stack.Screen name="App2" component={App2} />
                    <Stack.Screen name="App3" component={App3} />
                    <Stack.Screen name="App4" component={App4} />
                </Stack.Navigator>
            </NavigationContainer>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
});
