import { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Pedometer } from 'expo-sensors';
import {colors} from './Cons'

export default function App() {
    const [PedometerAvailability, setPedometerAvailability] = useState("");
    const [StepCount, updateStepCount]=useState(0)
   
useEffect(()=>{
    subscribe();
}, []);


const subscribe = () => {

const subscription = Pedometer.watchStepCount((result)=>{
   
    updateStepCount(result.steps)
})

Pedometer.isAvailableAsync().then(
 (result)=> {setPedometerAvailability(String(result))},
 (error)=>{setPedometerAvailability(error)}
);
};





   {/*
    useEffect(() => {
        const subscription = subscribe();
        return () => subscription ;
    }, []);
*/}

    return (
        <View>
            <Text style={{textAlign:'center', color:colors.feher, marginTop:30, fontSize:40, justifyContent:'center'}}>
                {StepCount} 
          </Text>

         {/*} <Text>
                {PedometerAvailability}
    </Text>*/}
            
        </View>
    );
}


