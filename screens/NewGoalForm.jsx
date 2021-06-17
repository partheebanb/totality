import React, { useState, useEffect } from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, Modal } from 'react-native'

import formik from 'formik'
import colors from '../assets/colors'

import Option from '../components/newGoalForm/Option'
import OptionList from '../components/newGoalForm/OptionList'
import SelectDays from '../components/newGoalForm/SelectDays'

const NewGoalForm = ({onCancel, onSubmit}) => {

    const [ frequency, setFrequency ] = useState(0) // daily
    const [ timeOfDay, setTimeOfDay ] = useState(0) // all-day
    const [ selectedDays, setSelectedDays ] = useState([0, 1, 2, 3, 4]) // weekdays

    const [ goal, setGoal ] = useState({
        text: '',
        target: 0
    })

    const setName = (text) => {
        setGoal({...goal, text})
        console.log(goal)
    }

    const setTarget = (target) => {
        setGoal({...goal, target: parseInt(target)})
        console.log(goal)
    }

    const submit = () => {
        if ((goal.text !== '') && (goal.target > 0) ) {
            onSubmit(goal)
        }
    }

    return (

        <ScrollView style={styles.container}>

            <View style={styles.cancelOrAddContainer}>
                <TouchableOpacity onPress={onCancel}>
                    <Text style={styles.cancelButton}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addButton} onPress={submit}>
                    <Text style={styles.addText}>ADD</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput} placeholder='What do you want to do?' placeholderTextColor={colors.grey} onChangeText={setName}/>
                <TextInput style={styles.textInput} keyboardType='number-pad' placeholder='Set yourself a target :)'  onChangeText={setTarget} placeholderTextColor={colors.grey}/>
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
        // backgroundColor: colors.darkMode.primary,
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
        // borderRadius: 10,
        // borderColor: colors.grey,
        paddingHorizontal: 10,
        color: colors.grey

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
        color: colors.green.primary,
        fontSize: 14,
        fontWeight: '500'
    }
})

export default NewGoalForm