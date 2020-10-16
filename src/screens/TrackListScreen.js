import React from "react";
import { View, StyleSheet, Text, Button } from "react-native";

const TrackListSreen = ({ navigation }) => {
  return (
    <>
      <Text style={{ fontSize: 48 }}> TrackListSreen</Text>
      <Button
        title="Go to Track Detail"
        onPress={() => navigation.navigate("TrackDetail")}
      />
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackListSreen;
