import React, {useState, useEffect } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity, View, ScrollView, Modal } from 'react-native';

// import NewGoalFormik from '../components/legacy/NewGoalForm.jsx'
import Header from '../components/mainPage/Header.jsx';
import FrequencyBar from '../components/mainPage/FrequencyBar.jsx';
import Goal from '../components/mainPage/Goal.jsx'
import NewGoalForm from './NewGoalForm.jsx';


import colors from '../assets/colors.js'

const MainPage = () => {

  const [ goalItems, setGoalItems ] = useState([])
  const [ finishedGoals, setFinishedGoals ] = useState(0)
  const [ showNewGoalForm, setShowNewGoalForm ] = useState(false)
  const [ currentFrequency, setCurrentFrequency ] = useState('Daily')

  const switchShowNewGoalForm = () => {
    setShowNewGoalForm(!showNewGoalForm)
  }

  useEffect(() => {
    // keeps track of goals completed and total goals
    updateGoalCount(),
    [goalItems]
  })

  const addGoal = (newGoal) => {
    const goal = {
      text: newGoal.text,
      target: newGoal.target,
      completed: 0
    }
    setGoalItems([...goalItems, goal])
    switchShowNewGoalForm()
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

  }

  // increments the progress of goal at given index
  const incrementCompleted = (index, completed=-1) => {
    const item = goalItems[index]
    console.log(completed)

    let newItem = item
    newItem = {...item, completed: item.completed + 1}
    let newItems = [...goalItems]
    newItems.splice(index, 1, newItem)
    setGoalItems(newItems)
    
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

  // const getColor = () => {
  //   return (
  //     finishedGoals >= goalItems.length ? 
  //         styles.green :
  //         (finishedGoals >= goalItems.length / 2 ?
  //             styles.yellow : 
  //             styles.pink
  //         )
  //   )
  // }

  return (
    <View style={styles.container}>

      <Header finishedGoals={finishedGoals} totalGoals={goalItems.length} />
      <FrequencyBar currentFrequency={currentFrequency} setCurrentFrequency={setCurrentFrequency}/>

      <View style={styles.goalsContainer}>
        <ScrollView style={styles.goals}>
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
        </ScrollView>
      </View>
    
      <Modal animationType="slide" transparent={false} visible={showNewGoalForm}>
        <NewGoalForm onCancel={switchShowNewGoalForm} onSubmit={(newGoal) => addGoal(newGoal)}/>
      </Modal>
      
      <View style={styles.newGoalContainer}>
        <TouchableOpacity style={styles.newGoal} onPress={switchShowNewGoalForm} >
          <Image style={styles.newGoalImage} source={require('../assets/greenPlus.png')}/>
        </TouchableOpacity>
      </View>

      {/* <KeyboardAvoidingView style={styles.form} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <NewGoalFormik handleAddGoal={(values) => addGoal(values)}/>
      </KeyboardAvoidingView> */}

      {/* // <View style={styles.dayContainer}>
      //   <TouchableOpacity style={[styles.startDay, styles.day]} onTouchStart={resetGoals}>
      //     <Text style={styles.dayText}>
      //       START DAY
      //     </Text>
      //   </TouchableOpacity>
      //   <TouchableOpacity style={[styles.endDay, styles.day]} onPress={resetGoals}>
      //     <Text style={styles.dayText}>
      //       END DAY
      //     </Text> */}
      {/* //   </TouchableOpacity>  */}
      
      {/* </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    // backgroundColor:  colors.darkMode.primary,
  },
  // dayContainer: {
  //   width: '95%',
  //   flexDirection: 'row',
  //   position: 'absolute',
  //   alignItems: 'center',
  //   justifyContent: 'space-between',
  //   bottom: 10,
  //   marginHorizontal: '5%',
  //   backgroundColor: 'white',
  //   height: 60   
  // },
  // day: {
  //   width: '47.5%',
  //   height: 40,
  //   // position: 'absolute',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  //   // marginHorizontal: '30%',
  //   borderRadius: 10
  // },
  // endDay: {
  //   backgroundColor: colors.pink.primary,
  // },
  // startDay: {
  //   backgroundColor: colors.green.primary,  
  // },
  // dayText: {
  //   fontSize: 24,
  //   fontWeight: 'bold'
  // },  

  goals: {
    marginTop: 10,
    marginHorizontal: '5%',
    width: '90%',
    // height: '20%'
  },
  goalsContainer : {
    height: '72%',
    paddingBottom: 20
  },
  // header: {
  //   padding: 20,
  //   paddingBottom: 10,
  // },
  // completedGoalCount: {
  //   fontSize: 72,
  //   fontWeight: '900'
  // },
  // titleText: {
  //   fontSize: 24,
  //   fontWeight: '400'
  // },
  items: {
    marginTop: 30,
    // height: '60%'
  },
  form: {
    position: 'absolute',
    bottom: 80,
    // width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingVertical: 10
    // marginHorizontal: '5%'
  },
  newGoal: {
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: colors.green.primary,
    alignItems: 'center',
    justifyContent: 'space-evenly'

  },
  newGoalContainer: {
    flexDirection: 'row',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    bottom: 20
  },
  newGoalImage: {
    height: 30,
    width: 30
    // color: colors.green.primary,
    // marginBottom: 40
  },
  green: {
    color: colors.green.primary
  },
  pink: {
    color: colors.pink.primary
  },
  yellow: {
    color: colors.yellow.primary
  }
});

export default MainPage