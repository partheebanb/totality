import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

import Task from './components/Task'
import NewTaskForm from './components/NewTaskForm'

export default function App() {

  const [task, setTask] = useState()
  const [taskItems, setTaskItems] = useState([])
  const [finishedTasks, setFinishedTasks] = useState(0)
  const [totalTasks, setTotalTasks] = useState(taskItems.length)

  useEffect(() => {
    // keeps track of tasks completed and total tasks
    updateTaskCount(),
    [taskItems]
  })

  const addTask = (values) => {
    const task = {
      text: values.text,
      goal: values.goal,
      completed: 0
    }
    setTaskItems([...taskItems, task])
  }
  const updateTaskCount = () => {
    let finished = 0
    setTimeout(() => {}, 20)
    taskItems.map((item) => {
      if (item.completed >= item.goal) {
        console.log(item.completed)
        finished++
      }
    })
    setFinishedTasks(finished)
    setTotalTasks(taskItems.length)
    console.log(finishedTasks)

  }

  // increments the progress of a certain task
  const incrementCompleted = (index) => {
    const item = taskItems[index]
    const newItem = {...item, completed: item.completed + 1} 
    let newItems = [...taskItems]
    newItems.splice(index, 1, newItem)
    setTaskItems(newItems)
  }

  // decrements the progress of a certain task
  const decrementCompleted = (index) => {
    const item = taskItems[index]
    if (item.completed > 0) {
      const newItem = {...item, completed: item.completed - 1} 
      let newItems = [...taskItems]
      newItems.splice(index, 1, newItem)
      setTaskItems(newItems,)
    }
  }

  const removeTask = (index) => {
    let tempItems = [...taskItems]
    tempItems.splice(index, 1)
    setTaskItems(tempItems)
  }

  const resetTasks = () => {
    // let tempItems = [...taskItems]
    const tempItems = taskItems.map((item) => (
      {...item, completed: 0}
    ))

    setTaskItems(tempItems)
  }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.completedTaskCount}>{finishedTasks}/{totalTasks}</Text>
          <Text style={styles.titleText}>TASKS COMPLETED TODAY</Text>
        </View>

      <View style={styles.tasksWrapper}>
        {taskItems.map((item, index) => {
          return (
            <Task 
              text={item.text} 
              completed={item.completed} 
              goal={item.goal} 
              onIncrement={(key) => incrementCompleted(key)} 
              onDecrement={(key) => decrementCompleted(key)} 
              index={index}
              onRemove={removeTask}
              key={index} 
              />
          )
        })}
      </View>
      
      <KeyboardAvoidingView style={styles.form} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <NewTaskForm handleAddtask={(values) => addTask(values)}/>
      </KeyboardAvoidingView>

      <View style={styles.dayContainer}>
        <TouchableOpacity style={[styles.startDay, styles.day]} onTouchStart={resetTasks}>
          <Text style={styles.dayText}>
            START DAY
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.endDay, styles.day]} onPress={resetTasks}>
          <Text style={styles.dayText}>
            END DAY
          </Text>
        </TouchableOpacity>
        
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  dayContainer: {
    width: '90%',
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    // alignContent: 'center'
    justifyContent: 'space-between',
    bottom: 20,
    marginHorizontal: '5%'    
  },
  day: {
    width: '47.5%',
    height: 40,
    // position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: '30%',
    borderRadius: 10
  },
  endDay: {
    backgroundColor: '#FF9595',
  },
  startDay: {
    backgroundColor: '#37D099',  
  },
  dayText: {
    fontSize: 24,
    fontWeight: 'bold'
  },  
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  tasksWrapper: {
    marginTop: 20,
    marginHorizontal: '5%',
    width: '90%'
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
  form: {
    position: 'absolute',
    bottom: 80,
    // width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: '5%'
  },


});
