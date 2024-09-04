import * as React from "react";
import { Button, View, Text } from "react-native";

function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: "100px",
      }}
    >
      <Button
        title="Project 1"
        onPress={() => navigation.navigate("Project1")}
      />
      <br />
      <Button
        title="Project 2"
        onPress={() => navigation.navigate("Project2")}
      />
      <br />
      <Button
        title="Project 3"
        onPress={() => navigation.navigate("Project3")}
      />
      <br />
      <Button
        title="Project 4"
        onPress={() => navigation.navigate("Project4")}
      />
      <br />
      <Button
        title="Project 5"
        onPress={() => navigation.navigate("Project5")}
      />
      <br />
      <Button
        title="Project 6"
        onPress={() => navigation.navigate("Project6")}
      />
      <br />
      <Button
        title="Project 7"
        onPress={() => navigation.navigate("Project7")}
      />
      <br />
      <Button
        title="Project 8"
        onPress={() => navigation.navigate("Project8")}
      />
    </View>
  );
}

export default HomeScreen;
