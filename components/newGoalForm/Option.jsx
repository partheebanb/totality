import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

import colors from '../../assets/colors'

const Option = ({text, selected, onSelect, index}) => {

    const styles = StyleSheet.create({
        option: {
            flex: 1,
            marginHorizontal: 2.5,
            height: 40,
            // borderWidth: selected ? 0 : 0.5,
            // borderWidth: 0.3,
            borderRadius: 10,
            borderColor: colors.grey,
            backgroundColor: selected ? colors.green.primary : colors.darkMode.primary,
            alignItems: 'center',
            justifyContent: 'center'
        },
        text: {
            color: selected ? colors.green.secondary : colors.darkMode.secondary
        }
    })
    return (
            <TouchableOpacity style={styles.option} onPress={() => onSelect(index)}>
                <Text style={styles.text}>
                    {text}
                </Text>
            </TouchableOpacity>
    )
}

export default Option