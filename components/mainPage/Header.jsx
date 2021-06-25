import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

import colors from '../../assets/colors.js'

const Header = ({goals, frequency}) => {

    const frequencyMap = {
        'Daily': 'today',
        'Weekly': 'this week',
        'Monthly': 'this month',
        'Yearly': 'this year'
    }

    const currentGoals = goals.filter(item => item.frequency === frequency)

    const finishedGoals = currentGoals.filter(item => item.completed >= item.target).length

    const totalGoals = currentGoals.length

    let color = styles.greenText

    if (finishedGoals < totalGoals) {
        if (finishedGoals >= totalGoals / 2) {
            color = styles.yellowText
        } else {
            color = styles.pinkText
        }
    }

    return (
        <View style={styles.container}>
            <Text style={[styles.headerText, color]}>
                {finishedGoals}/{totalGoals}
            </Text>
            <Text style={[styles.smallerText, color]}>
                achieved {frequencyMap[frequency]}
            </Text>            
        </View> 
    )
}

const styles = StyleSheet.create({
    greenText: {
        color: colors.green.primary
    },
    yellowText: {
        color: colors.yellow.primary
    },
    pinkText: {
        color: colors.pink.primary
    },
    container: {
        width: '95%',
        paddingVertical: 8,
        paddingLeft: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline'
    },
    headerText: {
        fontSize: 72,
        fontWeight: '600'
    },
    smallerText: {
        fontSize: 24,
        fontWeight: '300'
    }
})

export default Header