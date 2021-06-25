import React, {useState} from 'react'
import { View, Text, StyleSheet, Pressable, TouchableOpacity, TextInput, Image } from 'react-native'

import colors from '../../assets/colors.js'

const Goal = ({text, completed, target, onIncrement, onDecrement, onPressOut, index, onRemove}) => {

    const textStyles= completed >= target ? styles.greenSecondary : (completed >= target/2 ? styles.yellowSecondary : styles.pinkSecondary)
        
    return (
        <TouchableOpacity 
            // if completed >= goal : green
            // if completed >= target / 2 : yellow
            // else pink
            style={[completed >= target ? styles.greenBackground :(completed >= target/2 ? styles.yellowBackground : styles.pinkBackground), styles.item]}
            onLongPress={() => onRemove(index)}
            delayLongPress={1600}
        >
            <Text style={[textStyles, styles.goalText]}>{text}</Text>
            <View style={styles.itemProgress}>
                <View style={styles.itemProgressTextWrapper}>
                    <Text style={[textStyles, styles.itemProgressText, ]}>{completed}</Text>
                </View>
                <View style={styles.itemProgressTextWrapper}>
                    <Text style={[styles.itemProgressText, textStyles]}> / </Text>
                </View>
                <View style={styles.itemProgressTextWrapper}>
                    <Text style={[styles.itemProgressText, textStyles]}>{target}</Text>
                </View>
            </View>

            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={[styles.button]} 
                    onPress={() => onIncrement(index, completed)} 
                    // onPressOut={onPressOut}
                >
                    <Image 
                        style={styles.buttonImage}
                        source={require('../../assets/greenPlus.png')}
                    />
                </TouchableOpacity>
                <TouchableOpacity 
                    style={[styles.button]} 
                    onPress={() => onDecrement(index)}
                    // onPressOut={onPressOut}
                >
                    <Image 
                        style={styles.buttonImage}
                        source={require('../../assets/pinkMinus.png')}
                    />
                </TouchableOpacity>
            </View>
        </TouchableOpacity >
    )
}


const styles = StyleSheet.create({
    greenBackground: {
        backgroundColor: colors.green.primary
    }, 
    pinkBackground: {
        backgroundColor: colors.pink.primary
    }, 
    yellowBackground: {
        backgroundColor: colors.yellow.primary
    },
    greenSecondary: {
        color: colors.green.secondary
    }, 
    pinkSecondary: {
        color: colors.pink.secondary
    }, 
    yellowSecondary: {
        color: colors.yellow.secondary
    },

    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
        borderRadius: 15,
        marginVertical: 7,
        height: 50,
        width: '100%'
    },
    goalText: {
        fontSize: 17,
        fontWeight: '400',
        width: '50%',
    },
    itemProgress: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 68,
        marginRight: 10
    },
    itemProgressTextWrapper: {
        width: '33%'
    },
    itemProgressText: {
        fontSize: 12
    },
    buttonContainer: {
        width: 85,
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginLeft: 5
    },
    button: {
        height: 28,
        width: 28,
        borderRadius: 14,
        justifyContent: 'center',
        alignItems: 'center',       
        fontSize: 32,
        textAlign: 'center',
        
    },
    buttonImage: {
        height: 28,
        width: 28
    }
})


export default Goal