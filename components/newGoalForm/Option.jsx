import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'

import colors from '../../assets/colors'

const Option = ({text, selected, onSelect}) => {
    // const [ selected, setSelected ] = useState(highlight)
    // const switchSelected = () => {
    //     setSelected(!selected)
    // }

    const styles = StyleSheet.create({
        option: {
            flex: 1,
            marginHorizontal: 2.5,
            height: 40,
            borderWidth: selected ? 0 : 0.5,
            borderRadius: 10,
            borderColor: colors.grey,
            backgroundColor: selected ? colors.green : 'white',
            alignItems: 'center',
            justifyContent: 'center'
        },
        text: {
            color: selected ? 'black' : colors.grey
        }
    })
    return (
            <TouchableOpacity style={styles.option} onPress={() => onSelect(text)}>
                <Text style={styles.text}>
                    {text}
                </Text>
            </TouchableOpacity>
    )
}

export default Option