import React, { useState } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, FlatList } from 'react-native'

import formik from 'formik'
import colors from '../assets/colors'

import Option from '../components/newGoalForm/Option'
import OptionList from '../components/newGoalForm/OptionList'
import SelectDays from '../components/newGoalForm/SelectDays'

const NewGoalForm = () => {

    const [ name, setName ] = useState('')
    const [ target, setTarget ] = useState(0)
    const [ frequency, setFrequency ] = useState(0) // daily
    const [ timeOfDay, setTimeOfDay ] = useState(0) // all-day
    const [ selectedDays, setSelectedDays ] = useState([0, 1, 2, 3, 4]) // weekdays

    return (
        <ScrollView style={styles.container}>

            <View style={styles.cancelOrAddContainer}>
                <TouchableOpacity >
                    <Text style={styles.cancelButton}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addText}>ADD</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput} placeholder='What do you want to do?' placeholderTextColor={colors.darkMode.secondary}/>
                <TextInput style={styles.textInput} keyboardType='number-pad' placeholder='Set yourself a target :)'  placeholderTextColor={colors.darkMode.secondary}/>
            </View>

            <View style={styles.optionsContainer}>
                <Text style={styles.text}>How often?</Text>
                <View style={styles.optionsButtonContainer}>
                    <OptionList options={['Daily', 'Weekly', 'Monthly', 'Yearly']}/>
                </View>
            </View>

            <View style={styles.optionsContainer}>
                <Text style={styles.text}>At what time of day?</Text>
                <View style={styles.optionsButtonContainer}>
                    <OptionList options={['All-day', 'Morning', 'Afternoon', 'Evening']}/>
                </View>
            </View>

            <View style={styles.optionsContainer}>
                <Text style={styles.text}>On which days?</Text>
                <SelectDays selectedDays={selectedDays} setSelectedDays={setSelectedDays}/>
            </View>

            <View style={styles.optionsContainer}>
                <Text style={styles.text}>Set an end date?</Text>
                <View style={styles.optionsButtonContainer}>
                    <OptionList options={['Yes', 'No']}/>
                </View>

                {/* empty element at the bottom so every actual element is fully visible with scroll */}
                <View style={styles.bottomEmptyView}>
                </View>

            </View>

        </ScrollView>
    )
}

styles = StyleSheet.create({
    container: {
        padding: 25,
        backgroundColor: colors.darkMode.primary,
        // borderWidth
    },
    cancelOrAddContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cancelButton: {
        marginTop: 10,
        color: colors.pink.primary,
        fontSize: 18,
        fontWeight: 'normal'
    },
    addButton: {
        width: '22.5%',
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green.primary
    },
    addText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    textInputContainer: {
        marginTop: 20
    },
    textInput: {
        marginVertical: 10,
        // padding: 5,
        // paddingLeft: 15,
        width: '100%',
        height: 40,
        // color: colors.darkMode.secondary,
        // borderWidth: 0.3,
        borderRadius: 10,
        borderColor: colors.grey,
        paddingHorizontal: 10

    },
    optionsContainer: {
        marginTop: 30,
        alignItems: 'center'
    },
    optionsButtonContainer: {
        marginTop: 10,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    option: {
        flex: 1,
        marginHorizontal: 2.5,
        height: 40,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: colors.grey,
        color: colors.grey
    },
    bottomEmptyView: {
        height: 45
    },
    text: {
        color: colors.grey
    }
})

export default NewGoalForm