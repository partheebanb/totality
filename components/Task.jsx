import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        marginVertical: 7,
        height: 50
    },
    itemText: {
        fontSize: 32,
        fontWeight: '300'

    },
    itemProgress: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    itemLeft: {
        flexDirection: 'row',
        // alignItems: 'center',
        flexWrap: 'wrap'

    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55bcf6',
        // opacity: 0.4,
        marginRight: 15,
        borderRadius: 5
    },
    itemText: {
        maxWidth: '80%'
    },
    circular: {
        height: 12,
        width: 12,
        borderColor: '#55bcf6',
        borderWidth: 2,
        borderRadius: 5
    }
})

const Task = ({text, done, goal}) => {
    return (
    <View style={styles.item}>
        <Text style={styles.itemText}>{text}</Text>
        <View style={styles.itemProgress}>
            <Text style={styles.itemProgressText}>{done}</Text>
            <Text style={styles.itemProgressText}> / </Text>
            <Text style={styles.itemProgressText}>{goal}</Text>
        </View>
        <TouchableOpacity>

        </TouchableOpacity>
    </View>
    )
}

export default Task