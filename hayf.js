import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import Question from './razvam/Question';



export default function HowAreYouFeeling() {
    const [isFristLogin, setIsFristLogin] = useState(true);
    const [selectedCircle, setSelectedCircle] = useState(null);

    React.useEffect(() => {
        if (selectedCircle !== null) {
            setIsFristLogin(false);
        }
    }, [selectedCircle]);
    return (
        isFristLogin && (
            <View style={{position:"absolute", width:"100%", height:"100%", flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <View style={{ width: '80%', height: '30%', backgroundColor: '#2c1e33', borderRadius:'10%', display:'flex', alignItems:'center', justifyContent:'center', }}>
                    <Question
                        text="Do you feel productive?"
                        selectedCircle={selectedCircle}
                        setSelectedCircle={setSelectedCircle}
                    />
                </View>
            </View>
        )
    )
}
