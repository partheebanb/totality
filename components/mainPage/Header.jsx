import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

import colors from '../../assets/colors.js'

const Header = ({finishedGoals, totalGoals}) => {

    let color = styles.greenText

    if (finishedGoals < totalGoals) {
        if (finishedGoals >= totalGoals /2) {
            color = styles.yellowText
        } else {
            color = styles.pinkText
        }
    }
    return (
        <View style={styles.container}>
            <Text style={[styles.headerText, color]}>{finishedGoals}/{totalGoals}</Text>
            {/* <Text style={[styles.titleText, getColor()]}>GOALS COMPLETED TODAY</Text> */}
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
        padding: 20,
        paddingBottom: 10,
    },
    headerText: {
        fontSize: 72,
        fontWeight: '600'
    },
})

export default Header