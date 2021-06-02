import React from 'react'
import { StyleSheet, Button, TextInput, View, Keyboard, TouchableOpacity, Text} from 'react-native'
import { Formik } from 'formik'

import CircleButton from './CircleButton'
// import ''

const NewGoalForm = ({handleAddGoal}) => {
    return (
        <View>
            <Formik
                initialValues={{ text: '', target: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.text) {
                      errors.text = 'Required';
                    } else if (!values.target) {
                      errors.target = 'Required';
                    } else if (Number.isNaN(Number(values.target))) {
                        errors.target = 'Target must be a number'
                    }
                    return errors;
           
                  }}
                onSubmit={(values) => {
                    console.log(values)
                    handleAddGoal(values)
                    values = {}
                    Keyboard.dismiss()
                }}
            >
                {props => (
                <View style={styles.formContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder='Create a new goal!'
                            onChangeText={props.handleChange('text')}
                            value={props.values.text}
                        />

                        <TextInput
                            style={styles.goalInput}
                            placeholder='Target'
                            onChangeText={props.handleChange('target')}
                            value={props.values.target}
                        />       
                    </View>

                    <TouchableOpacity style={styles.addButton} onPress={props.handleSubmit}>
                        <Text>
                            +
                        </Text>
                    </TouchableOpacity>
                </View>
                )}
            </Formik>
        </View>
    )
    
}

const styles = StyleSheet.create({
    formContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginHorizontal: '5%'

    },
    inputContainer: {
        width: '80%',
        borderColor: '#c0c0c0',
        borderWidth: 1,
        borderRadius: 10,        
        flexDirection: 'row'
    },  
    textInput: {
        margin: 10,
        // marginLeft: 20,
        width: '70%'
    },
    goalInput: {
        margin: 10,
        width: '30%'
    },
    addButton: {
        margin: 10,
        height: 25,
        width: 25,
        borderRadius: 12,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    }

})
export default NewGoalForm