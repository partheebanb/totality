import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'

import Option from './Option.jsx'

const SelectDays = ({ selectedDays, setSelectedDays }) => {
    const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']

    const switchSelected = (index) => {
        selectedDays.includes(index) ? setSelectedDays(selectedDays.filter(day => day !== index)) : setSelectedDays([...selectedDays, index])
    }

    const selectAll = () => {
        selectedDays.length === days.length ? setSelectedDays([]) : setSelectedDays(days.map((element, index) => index))
    }

    return (
        <View style={styles.container}>
            <View style={styles.daysContainer}>
                {days.map((day, index) => {
                    console.log(index)
                    return (
                        <Option text={day} index={index} key={index} selected={selectedDays.includes(index)}  onSelect={(index) => switchSelected(index)}/>
                    )
                })}
            </View>
            <View style={styles.selectAllContainer}>
                <Option text="Every Day" index={days.length} selected={selectedDays.length === days.length} onSelect={selectAll}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,

    },
    daysContainer: {
        width: '100%',
        flexDirection: 'row'

    },
    selectAllContainer: {
        marginTop: 5,
        height: 40
    }
})

export default SelectDays