import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import PlayScreen from "./src/PlayScreen";

export default function App() {
  const [playMode, setPlayMode] = useState(false);
  return playMode ? (
    <PlayScreen />
  ) : (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
        Rock Paper Scissor
      </Text>
      <Text style={{ fontSize: 65 }}> ✊ ✋ ✌️ </Text>
      <View style={styles.playbutton}>
        <Button id="playbutton"
          onPress={() => {
            setPlayMode(true);
          }}
          title="Play"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lime",
    alignItems: "center",
    justifyContent: "center",
  },
  playbutton: {
    marginTop: 40,
  },
});
