import React from 'react'
import { TouchableOpacity, StyleSheet } from 'react-native'

const CircleButton = (props) => {
    return (
        <TouchableOpacity style={styles.circleButton} onPress={props.onPress}>
        </TouchableOpacity>
    )  
}

const styles = StyleSheet.create({

    circleButton: {
        margin: 10,
        height: 25,
        width: 25,
        borderRadius: 12,
        // backgroundColor: '#37D099',
        justifyContent: 'center',
        alignItems: 'center',
    }

})
export default CircleButton