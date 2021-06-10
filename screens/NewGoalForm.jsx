import React from 'react'
import { View, Text, Button, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, ScrollView, FlatList } from 'react-native'

import formik from 'formik'
import colors from '../assets/colors'

import Option from '../components/newGoalForm/Option'
import OptionList from '../components/newGoalForm/OptionList'

const NewGoalForm = () => {
    return (
        <ScrollView style={styles.container}>

            <View style={styles.cancelOrAddContainer}>
                <TouchableOpacity >
                    <Text style={styles.cancelButton}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.addButton}>
                    <Text style={styles.addText}>Add</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.bigInputContainer}>
                <TextInput style={styles.bigInput} placeholder='Give your goal a name!'/>
                <TextInput style={styles.bigInput} placeholder='Set yourself a target :)'/>
            </View>

            <View style={styles.optionsContainer}>
                <Text>How often?</Text>
                <View style={styles.optionsButtonContainer}>
                    <OptionList options={['Daily', 'Weekly', 'Monthly', 'Yearly']}/>
                </View>
            </View>

            <View style={styles.optionsContainer}>
                <Text>What time of day?</Text>
                <View style={styles.optionsButtonContainer}>
                    <OptionList options={['All-day', 'Morning', 'Afternoon', 'Evening']}/>
                </View>
            </View>

            {/* <View style={styles.optionsContainer}>
                <Text>On which days?</Text>
                <View style={styles.optionsButtonContainer}>
                    <Option style={styles.option}></Option>
                    <Option style={styles.option}></Option>
                    <Option style={styles.option}></Option>
                    <Option style={styles.option}></Option>
                    <Option style={styles.option}></Option>
                    <Option style={styles.option}></Option>
                    <Option style={styles.option}></Option>
                </View>
                <View style={[styles.optionsButtonContainer, {marginTop: 5}]}>
                    <Option style={styles.option}></Option>
                </View>
            </View> */}

        </ScrollView>
    )
}

styles = StyleSheet.create({
    container: {
        padding: 25
    },
    cancelOrAddContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    cancelButton: {
        marginTop: 10,
        color: colors.pink,
        fontSize: 18,
        fontWeight: 'bold'
    },
    addButton: {
        width: '22.5%',
        height: 40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.green
    },
    addText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    bigInputContainer: {
        marginTop: 10
    },
    bigInput: {
        marginVertical: 10,
        width: '100%',
        height: 40,
        borderWidth: 1,
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
    }
})

export default NewGoalForm