import React, {useState, useEffect, useRef } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';

import Goal from '../components/Goal'
import NewGoalForm from '../components/NewGoalForm'

import colors from '../assets/colors'

const MainPage = () => {

  const [goalItems, setGoalItems] = useState([])
  const [finishedGoals, setFinishedGoals] = useState(0)
  const [totalGoals, setTotalGoals] = useState(goalItems.length)
  const timer = useRef(null)

  // useEffect(() => {
  //   // keeps track of goals completed and total goals
  //   updateGoalCount(),
  //   [goalItems]
  // })

  const addGoal = (values) => {
    const goal = {
      text: values.text,
      target: values.target,
      completed: 0
    }
    setGoalItems([...goalItems, goal])
  }

  const updateGoalCount = () => {
    let finished = 0
    setTimeout(() => {}, 20)
    goalItems.map((item) => {
      if (item.completed >= item.target) {
        finished++
      }
    })
    setFinishedGoals(finished)
    setTotalGoals(goalItems.length)

  }

  // increments the progress of goal at given index
  const incrementCompleted = (index, completed=-1, loop=true) => {
    const item = goalItems[index]
    console.log(completed)

    let newItem = item
    completed >= 0 ?  newItem = {...item, completed: item.completed + 1} : {...item, completed: completed + 1}
    let newItems = [...goalItems]
    newItems.splice(index, 1, newItem)
    setGoalItems(newItems)
    timer.current = setTimeout(() => incrementCompleted(index, completed + 1, false), 200)
    
    
    console.log(item)
    // timer.current = setTimeout(() => incrementCompleted(index, false), 200)
    
    
  }

  // decrements the progress of goal at given index
  const decrementCompleted = (index) => {
    const item = goalItems[index]
    if (item.completed > 0) {
      const newItem = {...item, completed: item.completed - 1} 
      let newItems = [...goalItems]
      newItems.splice(index, 1, newItem)
      setGoalItems(newItems)
    }
  }

  // stop the timer after longpress
  const stopTimer = () => {
    clearTimeout(timer.current)
  }

  // remove goal at given index
  const removeGoal = (index) => {
    let tempItems = [...goalItems]
    tempItems.splice(index, 1)
    setGoalItems(tempItems)
  }

  // reset the progress on
  const resetGoals = () => {
    // let tempItems = [...goalItems]
    const tempItems = goalItems.map((item) => (
      {...item, completed: 0}
    ))

    setGoalItems(tempItems)
  }
  return (
    <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.completedGoalCount}>{finishedGoals}/{totalGoals}</Text>
          <Text style={styles.titleText}>GOALS COMPLETED TODAY</Text>
        </View>

      <View style={styles.goalsWrapper}>
        {goalItems.map((item, index) => {
          return (
            <Goal 
              text={item.text} 
              completed={item.completed} 
              target={item.target} 
              onIncrement={(key) => incrementCompleted(key)} 
              onDecrement={(key) => decrementCompleted(key)} 
              onPressOut={stopTimer}
              index={index}
              onRemove={removeGoal}
              key={index} 
              />
          )
        })}
      </View>
      
      <KeyboardAvoidingView style={styles.form} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <NewGoalForm handleAddGoal={(values) => addGoal(values)}/>
      </KeyboardAvoidingView>

      <View style={styles.dayContainer}>
        <TouchableOpacity style={[styles.startDay, styles.day]} onTouchStart={resetGoals}>
          <Text style={styles.dayText}>
            START DAY
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.endDay, styles.day]} onPress={resetGoals}>
          <Text style={styles.dayText}>
            END DAY
          </Text>
        </TouchableOpacity>
        
      </View>
    </View>
    
    
  )
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
    backgroundColor: colors.pink,
  },
  startDay: {
    backgroundColor: colors.green,  
  },
  dayText: {
    fontSize: 24,
    fontWeight: 'bold'
  },  
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  goalsWrapper: {
    marginTop: 20,
    marginHorizontal: '5%',
    width: '90%'
  },
  header: {
    padding: 20,
    paddingBottom: 10,
    backgroundColor: 'white'
  },
  completedGoalCount: {
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


export default MainPage