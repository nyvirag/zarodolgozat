import { Text, View, Pressable, TextInput, Keyboard , Platform, KeyboardAvoidingView, TouchableWithoutFeedback} from 'react-native'
import React, { useState, useRef, useEffect } from 'react';
import { CountdownCircleTimer, } from 'react-native-countdown-circle-timer'
import { colors } from './Cons';




export default function Ido() {
    const [isTimerPlaying, setIsTimerPlaying] = useState(false);
    const [key, setKey] = useState(0);
    const timerRef = useRef(null)
    const [durationInput, setDurationInput] = useState('0');


    useEffect(() => {
        if (isTimerPlaying && timerRef.current) {
            timerRef.current.start();
        }
    }, [isTimerPlaying]);


    const start = () => {
        setIsTimerPlaying(true);
        if (timerRef.current) {
            timerRef.current.start();
        }
    }

    const stop = () => {
        setIsTimerPlaying(false);
        if (timerRef.current) {
            timerRef.current.stop()
        }
    }

    const ujrakezd = () => {
        setIsTimerPlaying(false)
        setKey(prevKey => prevKey + 1)
    }





    return (
        
            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} >
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

               


                <View style={{ alignItems: 'center', marginTop: 40, }} >
                <Text style={{color:colors.feher}}> Másodperc </Text>
                    <TextInput
                        style={{ height: 50, borderColor:colors.sotetlime, borderWidth: 1, width: 150, marginBottom: 35, marginTop: 10, backgroundColor:colors.sotetlime, borderRadius:10, textAlign:'center' }}
                        onChangeText={text => setDurationInput(text)}
                        value={durationInput}
                        keyboardType='numeric'
                    />


                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                        <Pressable onPress={() => start()} style={({ pressed }) => ({
                            backgroundColor: pressed ? colors.sotetlime : colors.black,

                            elevation: pressed ? 2 : 0,
                            borderRadius: 10,
                            marginRight: 10,
                            borderWidth: 2,
                            borderColor: colors.sotetlime



                        })} >
                            <Text style={{ fontSize: 25, color: colors.feher, textAlign: 'center', padding: 13 }} > Start</Text>
                        </Pressable>

                        <Pressable onPress={() => stop()} style={({ pressed }) => ({
                            backgroundColor: pressed ? colors.sotetlime : colors.black,
                            elevation: pressed ? 2 : 0,
                            borderRadius: 10,
                            marginLeft: 10,
                            borderWidth: 2,
                            borderColor: colors.sotetlime





                        })} >
                            <Text style={{ fontSize: 25, color: colors.feher, textAlign: 'center', padding: 13 }} > Stop</Text>
                        </Pressable>
                    </View>
                    <Pressable onPress={() => ujrakezd()} style={({ pressed }) => ({
                        backgroundColor: pressed ? colors.sotetlime : colors.black,
                        elevation: pressed ? 2 : 0,
                        borderRadius: 10,
                        marginTop: 20,
                        borderColor: colors.sotetlime,
                        borderWidth: 2,
                        marginBottom: 30





                    })} >
                        <Text style={{ fontSize: 25, color: colors.feher, textAlign: 'center', padding: 13, paddingHorizontal: 140 }} > Újrakezd</Text>
                    </Pressable>

                    <CountdownCircleTimer

                        key={key}
                        isPlaying={isTimerPlaying}
                        duration={parseInt(durationInput)}
                        colors={['#82b72a', '#F7B801', '#A30000', '#6b0101']}
                        colorsTime={[60, 40, 20, 0]}
                        onComplete={() => setIsTimerPlaying(false)}
                        ref={timerRef}
                    >
                        {({ remainingTime }) => <Text style={{ color: colors.feher }}>{remainingTime}</Text>}
                    </CountdownCircleTimer>



                </View>


                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
        
    )
}