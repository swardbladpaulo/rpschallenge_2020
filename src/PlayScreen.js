import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";

const rock = require('./images/rock.2.svg')
const paper = require('./images/paper.3.svg')
const scissors = require('./images/scissors.1.svg')

const randomImage = () => {
  const emojis = [rock, paper, scissors];
  const random = Math.floor(Math.random() * 3)
  return emojis[random]
}

const PlayScreen = () => {
  const [counter, setCounter] = useState(3);
  
  useEffect(() => {
    console.log(counter);

    if (counter < 1) return;

    const timer = setTimeout(() => {
      setCounter(previus => previus -1)
    }, 1000);

    return () => {
      clearTimeout(timer)
    };
  }, [counter]);

  return (
    <View style={styles.container}>
    {(counter < 1) ? ( 
    <>
      <Image style={styles.image} source={randomImage()} />
          <View style={styles.button}>
            <Button onPress={() => setCounter(3)} title="Let's Play" />
        </View>
    </>
    ):<Text style={{ fontSize: 90, fontWeight: "bold" }}>{counter}</Text>}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    width: 200,
    height: 200,
  },

  button: {
    position: "absolute",
    bottom: 100,
  }

})

export default PlayScreen;
