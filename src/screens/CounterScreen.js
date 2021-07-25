import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const NUMBER_INCREMENT = 1

const reducer = (state, action) => {
  // state === { count: number }
  // action === { type: 'increment' }} 'decrement', payload: NUMBER_INCREMENT }

  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + action.payload }
    case 'decrement':
      return { ...state, count: state.count - action.payload }
    default:
      return state
  }
}

const CounterScreen = () => {
  // const [counter, setCounter] = useState(0)
  const [state, dispatch] = useReducer(reducer, { count: 0 })
  const { count } = state

  return (
    <View>
      <Button
        title="Increase"
        onPress={() => {
          // Don't do this!
          // counter++
          // counter = counter + 1; this is bad implementation!
          // setCounter(counter + 1)
          // exercise outline to use Reducer instead of useState hook(chapter 61)
          dispatch({ type: 'increment', payload: NUMBER_INCREMENT })
        }}
      />
      <Button
        title="Decrease"
        onPress={() => {
          dispatch({ type: 'decrement', payload: NUMBER_INCREMENT })
        }}
      />
      <Text>Current Count: {count}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})

export default CounterScreen
