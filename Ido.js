import { Text, View, Pressable } from 'react-native'
import React, { useState, useRef } from 'react';
import { CountdownCircleTimer, } from 'react-native-countdown-circle-timer'
import { colors } from './Cons';



export default function Ido() {
    const [isTimerPlaying, setIsTimerPlaying] = useState(false);
    const [key, setKey] = useState(0);
    const timerRef = useRef(null)



    const start = () => {
        setIsTimerPlaying(true)
    }

    const stop = () => {
        setIsTimerPlaying(false)
    }

    const ujrakezd = () => {
        setIsTimerPlaying(false)
        setKey(prevKey => prevKey + 1)
    }
    return (
        <>
            <View>

               

                <CountdownCircleTimer
                
                    key={key}
                    isPlaying={isTimerPlaying}
                    duration={60}
                    colors={['#82b72a', '#F7B801', '#A30000', '#6b0101']}
                    colorsTime={[60, 40, 20, 0]}
                    onComplete={() => setIsTimerPlaying(false)}
                    ref={timerRef}
                >
                    {({ remainingTime }) => <Text style={{ color: colors.feher }}>{remainingTime}</Text>}
                </CountdownCircleTimer>



                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 20 }}>
                    <Pressable onPress={() => start()} style={({ pressed }) => ({
                        backgroundColor: pressed ? colors.sotetlime : colors.black,
                        
                        elevation: pressed ? 2 : 0,
                        borderRadius: 10,
                        marginRight: 10,
                        borderWidth:2,
                        borderColor:colors.sotetlime



                    })} >
                        <Text style={{ fontSize: 25, color: colors.feher, textAlign: 'center', padding: 13 }} > Start</Text>
                    </Pressable>

                    <Pressable onPress={() => stop()} style={({ pressed }) => ({
                        backgroundColor: pressed ? colors.sotetlime : colors.black,
                        elevation: pressed ? 2 : 0,
                        borderRadius: 10,
                        marginLeft: 10,
                        borderWidth:2,
                        borderColor:colors.sotetlime





                    })} >
                        <Text style={{ fontSize: 25, color: colors.feher, textAlign: 'center', padding: 13 }} > Stop</Text>
                    </Pressable>
                </View>
                <Pressable onPress={() => ujrakezd()} style={({ pressed }) => ({
                    backgroundColor: pressed ? colors.sotetlime : colors.black,
                    elevation: pressed ? 2 : 0,
                    borderRadius: 10,
                    marginTop: 20,
                    borderColor:colors.sotetlime,
                    borderWidth:2





                })} >
                    <Text style={{ fontSize: 25, color: colors.feher, textAlign: 'center', padding: 13 }} > Újrakezd</Text>
                </Pressable>
            </View>
        </>
    )
}