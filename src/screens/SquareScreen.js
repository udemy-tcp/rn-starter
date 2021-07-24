import React, { useState } from "react"
import { View, StyleSheet, Text } from "react-native"
import ColorCounter from "../components/ColorCounter"

const COLOR_INCREMENT = 15

const SquareScreen = () => {
  const [red, setRed] = useState(0)
  const [green, setGreen] = useState(0)
  const [blue, setBlue] = useState(0)

  const setColor = (color, change) => {
    // color === 'red', 'green', 'blue'
    // change === +15, -15

    if (color === "red") {
      if (red + change > 255 || red + change < 0) {
        return
      } else {
        setRed(red + change)
      }
    }
  }

  return (
    <View>
      <ColorCounter
        onIncrease={() => {
          // bad implementation because a lot of repeated code and also mixing in a ton of business logic
          // if (red + COLOR_INCREMENT > 255) {
          //   return
          // }

          // slightly better but, still not good enough
          setColor("red", COLOR_INCREMENT)
        }}
        onDecrease={() => setColor("red", -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setGreen(green + COLOR_INCREMENT)}
        onDecrease={() => setGreen(green - COLOR_INCREMENT)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setBlue(blue + COLOR_INCREMENT)}
        onDecrease={() => setBlue(blue - COLOR_INCREMENT)}
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red},${green},${blue})`
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({})

export default SquareScreen
