import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import colors from "../../assets/colors.js"

import FrequencyBarItem from "./FrequencyBarItem.jsx"

const FrequencyBar = ({currentFrequency, setCurrentFrequency}) => {

    const getColor = (frequency) => currentFrequency === frequency ? styles.currentText : styles.greyText
    
    return (
        <View style={styles.frequency}>
            <FrequencyBarItem text='Daily' currentFrequency={currentFrequency} setCurrentFrequency={setCurrentFrequency} />
            <FrequencyBarItem text='Weekly' currentFrequency={currentFrequency} setCurrentFrequency={setCurrentFrequency} />
            <FrequencyBarItem text='Monthly' currentFrequency={currentFrequency} setCurrentFrequency={setCurrentFrequency} />
            <FrequencyBarItem text='Annual' currentFrequency={currentFrequency} setCurrentFrequency={setCurrentFrequency} />
        </View>
    )
}

const styles = StyleSheet.create({
    frequency: {
        alignItems: 'stretch',
        justifyContent: 'space-around',
        flexDirection: 'row',
        width: '100%',
    },
    currentText: {
        color: colors.green.primary,
        fontWeight: '600',
        fontSize: 14
    },
    greyText: {
        color: colors.grey,
        fontWeight: '600',
        fontSize: 14
    },  
})

export default FrequencyBar