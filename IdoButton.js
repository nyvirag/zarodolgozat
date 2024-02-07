import { Text, View, Pressable } from 'react-native'
import React, { useState, useRef } from 'react';
import { CountdownCircleTimer, } from 'react-native-countdown-circle-timer'
import { colors } from './Cons';
import Ido from './Ido'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';



function IdoButton() {
    const [isTimerPlaying, setIsTimerPlaying] = useState(false);
    const navigation = useNavigation();





    return (
        <>
            <View style={{ alignItems: 'center' }}>



                <CountdownCircleTimer


                    isPlaying
                    duration={25}
                    
                    colors={['#dee2e6', '#82b72a', '#dee2e6', '#82b72a', '#dee2e6']}
                    colorsTime={[25, 20, 15, 10, 5]}
                    onComplete={() => {

                        return { shouldRepeat: true, delay: 0.1 }
                    }}

                >
                    {({ }) => <Pressable onPress={() => navigation.navigate('Stopper')} >
                        <Text style={{ fontSize: 30, color: colors.sotetlime }} > Stopper</Text>
                    </Pressable>}
                </CountdownCircleTimer>




            </View>
        </>
    )
}


export default IdoButton;