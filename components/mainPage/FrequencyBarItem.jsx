import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import colors from "../../assets/colors.js"

const FrequencyBarItem = ({text, currentFrequency, setCurrentFrequency}) => {
    const getColor = (frequency) => currentFrequency === frequency ? styles.currentText : styles.greyText

    return (
        <TouchableOpacity onPress={() => setCurrentFrequency(text)}>
             <Text style={getColor(text)}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
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

export default FrequencyBarItem