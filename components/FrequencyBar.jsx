import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"

const FrequencyBar = ({currentFrequency}) => {
    return (
        <View style={styles.frequency}>
            <Text style={styles.frequencyText}>Daily</Text>
            <Text style={styles.frequencyText}>Weekly</Text>
            <Text style={styles.frequencyText}>Monthly</Text>
            <Text style={styles.frequencyText}>Annual</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    frequency: {
        alignItems: 'stretch',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '92%',
        paddingLeft: '5%'
        // alignContent: 'center'
    },
    frequencyText: {
        color: colors.grey
    },  
})

export default FrequencyBar