import React, { useState } from 'react'
import { StyleSheet, Button, TextInput, View, Text, KeyboardAvoidingView, Keyboard} from 'react-native'
import { Formik, useField } from 'formik'

const NewTaskForm = ({handleAddtask}) => {
    return (
        // <View >
        <View
            style={styles.formContainer} 
            // behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <Formik
                initialValues={{ text: '', goal: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.text) {
                      errors.text = 'Required';
                    } else if (!values.goal) {
                      errors.goal = 'Required';
                    } else if (Number.isNaN(Number(values.goal))) {
                        errors.goal = 'Goal must be a number'
                    }
                    return errors;
           
                  }}
                onSubmit={(values) => {
                    console.log(values)
                    handleAddtask(values)
                    values = {}
                    Keyboard.dismiss()
                }}
            >
                {props => (
                <View style={styles.formContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder='New Task'
                        onChangeText={props.handleChange('text')}
                        value={props.values.text}
                    />

                    <TextInput
                        style={styles.goalInput}
                        placeholder='Goal'
                        onChangeText={props.handleChange('goal')}
                        value={props.values.goal}
                    />       

                    <Button style={styles.addButton} color='maroon' title="Submit" onPress={props.handleSubmit} /> 
                </View>
                )}
            </Formik>
        </View>
    )
    
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderColor: '#c0c0c0',
        borderWidth: 1,
        borderRadius: 60,
        width: '95%',

    },
    textInput: {
        margin: 10,
        marginLeft: 20,
        width: '50%'
    },
    goalInput: {
        margin: 10,
        width: '10%'
    },
    addButton: {
        margin: 10,
        width: 50
    }

})
export default NewTaskForm