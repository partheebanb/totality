import React, { useState } from 'react'
import { StyleSheet, Button, TextInput, View, Text} from 'react-native'
import { Formik, useField } from 'formik'

const NewTaskForm = ({handleAddtask}) => {
    return (
        <View >
        <Formik
            initialValues={{ text: '', goal: ''}}
            onSubmit={(values) => {
                console.log(values)
                handleAddtask(values)
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

                {/* <TextInput 
                                    style={styles.formInput}

                placeholder='Rating (1 - 5)'
                onChangeText={props.handleChange('rating')}
                value={props.values.rating}
                keyboardType='numeric'
                /> */}
                
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
        justifyContent: 'space-between'
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