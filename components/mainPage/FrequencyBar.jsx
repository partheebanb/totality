import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import colors from "../../assets/colors.js"

import FrequencyBarItem from "./FrequencyBarItem.jsx"

const FrequencyBar = ({currentFrequency, setCurrentFrequency}) => {

    return (
        <View style={styles.frequency}>
            <FrequencyBarItem text='Daily' currentFrequency={currentFrequency} setCurrentFrequency={setCurrentFrequency} />
            <FrequencyBarItem text='Weekly' currentFrequency={currentFrequency} setCurrentFrequency={setCurrentFrequency} />
            <FrequencyBarItem text='Monthly' currentFrequency={currentFrequency} setCurrentFrequency={setCurrentFrequency} />
            <FrequencyBarItem text='Yearly' currentFrequency={currentFrequency} setCurrentFrequency={setCurrentFrequency} />
        </View>
    )
}

const styles = StyleSheet.create({
    frequency: {
        alignItems: 'stretch',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%',
    }
})

export default FrequencyBar