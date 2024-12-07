import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase/app';
import 'firebase/auth';
import LoginScreen from './razvam/index';
import CalendarScreen from './inApp';
import auth from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {BottomSheetModalProvider} from '@gorhom/bottom-sheet';
const App = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((user) => {
            setUser(user);
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <View>
                <Text>Loading...</Text>
            </View>
        );
    }

    if(user){
        return( 
        <GestureHandlerRootView>
        <BottomSheetModalProvider>
        <CalendarScreen />
        </BottomSheetModalProvider>
        </GestureHandlerRootView>
    )
    }else{
        return( 
            <GestureHandlerRootView>
        <LoginScreen />
        </GestureHandlerRootView>
    )
    }

};

export default App;
