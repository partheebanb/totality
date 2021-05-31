import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'



const Task = ({text, completed, goal, onIncrement, onDecrement, index, onRemove}) => {

    let timer = null

    const incPress = () => {
        timer = setTimeout(() => onIncrement(index), 150)
        // onIncrement(index)

    }

    const decPress = () => {
        timer = setTimeout(() => onDecrement(index), 150)
        // onDecrement(index)
    }

    const stopPress = () => {
        clearTimeout(timer)
    }



    return (
        <TouchableOpacity 
            // if completed >= goal : green
            // if completed >= goal / 2 : yellow
            // else red
            style={[completed >= goal ? styles.green :(completed >= goal/2 ? styles.yellow : styles.red), styles.item]}
            onLongPress={() => onRemove(index)}
            delayLongPress={1600}
        >
            <Text style={styles.taskText}>{text}</Text>
            <View style={styles.itemProgress}>
                <Text style={styles.itemProgressText}>{completed}</Text>
                <Text style={styles.itemProgressText}> / </Text>
                <Text style={styles.itemProgressText}>{goal}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={[styles.button, styles.addButton]} 
                    onPress={() => onIncrement(index)} 
                    onPressIn={incPress} 
                    onPressOut={stopPress}
                >
                    <Text>+</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.button, styles.subtractButton]} 
                    onPress={() => onDecrement(index)}
                    onPressIn={decPress} 
                    onPressOut={stopPress}
                >
                    <Text>-</Text>
                </TouchableOpacity>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    green: {
        backgroundColor: '#41FFBA'
    }, 
    red: {
        backgroundColor: '#FF9595'
    }, 
    yellow: {
        backgroundColor: '#FFE974'
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 10,
        marginVertical: 7,
        height: 60
    },
    taskText: {
        fontSize: 24,
        fontWeight: '300',
        width: '60%'

    },
    itemProgress: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        height: 25,
        width: 25,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    addButton: {
        backgroundColor: '#37D099',  
    },
    subtractButton: {
        backgroundColor: '#FF3636',
    },
})


export default Task