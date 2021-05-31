import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

import Task from './components/Task'

export default function App() {

  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])

  const handleAddTask = () => {
    Keyboard.dismiss()
    setTaskItems([...taskItems, task])
    setTask(null)
  }

  const completeTask = (index) => {
    let tempItems = [...taskItems]
    tempItems.splice(index, 1)
    setTaskItems(tempItems)
  }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.completedTaskCount}>1/3</Text>
          <Text style={styles.titleText}>TASKS COMPLETED TODAY</Text>
        </View>

        {/* <View style={styles.items}>
          {
            taskItems.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)}>
                  <Task text={item}/>fif
                </TouchableOpacity>
              )
            })

          }
          
        {/* </View> */}

      <View style={styles.tasksWrapper}>
          <Task text='Read' goal='30'/>
          <Task text='Bike' goal='10'/>
      </View>


    {/* New Task */}

    {/* <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.writeTaskWrapper}  
    >
      
      <TextInput style={styles.input} placeholder={'New Task'} value={task} onChangeText={text => setTask(text)}/>
      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>
        </View>
      </TouchableOpacity>
    </KeyboardAvoidingView>  */}
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  tasksWrapper: {
    paddingTop: 20,
    paddingHorizontal: 20
  },
  header: {
    padding: 20,
    paddingBottom: 10,
    backgroundColor: '#41FFBA'
  },
  completedTaskCount: {
    fontSize: 72,
    fontWeight: '900'
  },
  titleText: {
    fontSize: 24,
    fontWeight: '400'
  },
  items: {
    marginTop: 30
  },
  writeTaskWrapper: {
    position: 'absolute',
    bottom: 35,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input : {
    paddingVertical: 15,
    paddingHorizontal: 15,
    width: 250,
    backgroundColor: 'white',
    borderColor: '#c0c0c0',
    borderWidth: 1,
    borderRadius: 60
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#c0c0c0',
    borderWidth: 1,
    borderRadius: 60 
  },
  addText: {

  },

});
