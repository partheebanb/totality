import React from 'react'

import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

import colors from '../../assets/colors'

const CustomIncrementModal = ({onPress}) => {
    return (
        <View style={styles.container}>
            <View style={styles.innerView}>
                <View style={styles.cancelOrDone}>
                    <TouchableOpacity onPress={onPress}>
                        <Text style={[styles.text, styles.cancel]}>
                            Cancel
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={onPress}>
                        <Text style={[styles.text, styles.done]}>
                            Done
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputWrapper}>
                    <TextInput placeholder='0'  style={styles.input} keyboardType='number-pad' maxLength={3}/>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    innerView: {
        backgroundColor: "white",
        borderRadius: 20,
        height: 200,
        width: 200,
        padding: 12,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 5,
    },
    cancelOrDone: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
    },
    text: {
        fontSize: 16,
        fontWeight: '300'
    },
    cancel: {
        color: colors.pink.primary,
    },
    done: {
        color: colors.green.primary,
    },
    inputWrapper: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    input: {
        fontSize: 32,
        fontWeight: '300'
    }
})

export default CustomIncrementModal