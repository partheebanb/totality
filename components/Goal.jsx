import React, {useState} from 'react'
import { View, Text, StyleSheet, Pressable, TouchableOpacity, TextInput, Image } from 'react-native'

import colors from '../assets/colors'

const Goal = ({text, completed, target, onIncrement, onDecrement, onPressOut, index, onRemove}) => {

    // let timer = null

    // const incPress = () => {
    //     timer = setTimeout(() => onIncrement(index), 150)
    //     // onIncrement(index)

    // }

    // const decPress = () => {
    //     timer = setTimeout(() => onDecrement(index), 150)
    //     // onDecrement(index)
    // }

    // const stopPress = () => {
    //     clearTimeout(timer)
    // }



    return (
        <TouchableOpacity 
            // if completed >= goal : green
            // if completed >= target / 2 : yellow
            // else pink
            style={[completed >= target ? styles.greenBackground :(completed >= target/2 ? styles.yellowBackground : styles.pinkBackground), styles.item]}
            onLongPress={() => onRemove(index)}
            delayLongPress={1600}
        >
            <Text style={styles.goalText}>{text}</Text>
            <View style={styles.itemProgress}>
                <Text style={styles.itemProgressText}>{completed}</Text>
                <Text style={styles.itemProgressText}> / </Text>
                <Text style={styles.itemProgressText}>{target}</Text>
            </View>

            <View style={styles.buttonContainer}>
                <Pressable 
                    style={[styles.button]} 
                    onPressIn={() => onIncrement(index, completed)} 
                    onPressOut={onPressOut}
                >
                    <Image 
                        style={styles.buttonImage}
                        source={require('../assets/greenPlus.png')}
                    />
                </Pressable>
                <Pressable 
                    style={[styles.button]} 
                    onPress={() => onDecrement(index)}
                    // onPressOut={onPressOut}
                >
                    <Image 
                        style={styles.buttonImage}
                        source={require('../assets/pinkMinus.png')}
                    />
                </Pressable>
            </View>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    greenBackground: {
        backgroundColor: colors.green
    }, 
    pinkBackground: {
        backgroundColor: colors.pink
    }, 
    yellowBackground: {
        backgroundColor: colors.yellow
    },
    green: {
        color: colors.green
    }, 
    pink: {
        color: colors.pink
    }, 
    yellow: {
        color: colors.yellow
    },

    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 15,
        marginVertical: 7,
        height: 60
    },
    goalText: {
        fontSize: 24,
        fontWeight: '300',
        width: '60%'

    },
    itemProgress: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonContainer: {
        width: 85,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 10
    },
    button: {
        height: 30,
        width: 30,
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',       
        // marginHorizontal: 7,
        backgroundColor: 'white',
        fontSize: 32,
        // textAlignVertical: 'center',
        textAlign: 'center',
        // alignContent: 'center'
        
    },
    buttonImage: {
        height: 30,
        width: 30
    }
})


export default Goal