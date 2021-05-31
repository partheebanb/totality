import React, {useState} from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native'



const Task = ({text, goal}) => {

    const [completed, setCompleted] = useState(0)

    const incrementCompleted = () => {
        setCompleted(completed + 1)
    }

    const decrementCompleted = () => {
        if (completed > 0) {
            setCompleted(completed - 1)
        }
    }


    return (
    <View style={styles.item}>
        <Text style={styles.taskText}>{text}</Text>
        <View style={styles.itemProgress}>
            <Text style={styles.itemProgressText}>{completed}</Text>
            <Text style={styles.itemProgressText}> / </Text>
            <Text style={styles.itemProgressText}>{goal}</Text>
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.addButton} onPress={incrementCompleted}>
                <Text>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.subtractButton} onPress={decrementCompleted}>
                <Text>-</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 5,
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
    addButton: {
        backgroundColor: 'green',
        height: 25,
        width: 25,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5
    },
    subtractButton: {
        backgroundColor: 'red',
        height: 25,
        width: 25,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5

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
    circular: {
        height: 12,
        width: 12,
        borderColor: '#55bcf6',
        borderWidth: 2,
        borderRadius: 5
    }
})


export default Task