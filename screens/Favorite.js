import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import MaterialCardWithImageAndTitle1 from "../components/MaterialCardWithImageAndTitle1";

function Favorite(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialCardWithImageAndTitle1Column}>
        <MaterialCardWithImageAndTitle1
          style={styles.materialCardWithImageAndTitle1}
        ></MaterialCardWithImageAndTitle1>
        <MaterialCardWithImageAndTitle1
          style={styles.materialCardWithImageAndTitle3}
        ></MaterialCardWithImageAndTitle1>
      </View>
      <View style={styles.materialCardWithImageAndTitle1ColumnFiller}>
        <MaterialCardWithImageAndTitle1
          style={styles.materialCardWithImageAndTitle2}
        ></MaterialCardWithImageAndTitle1>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialCardWithImageAndTitle1: {
    width: 325,
    height: 178
  },
  materialCardWithImageAndTitle3: {
    width: 325,
    height: 178,
    marginTop: 232
  },
  materialCardWithImageAndTitle1Column: {
    width: 325,
    marginTop: 82,
    marginLeft: 35
  },
  materialCardWithImageAndTitle2: {
    width: 325,
    height: 178,
    marginLeft: 35
  },
  materialCardWithImageAndTitle1ColumnFiller: {
    flex: 1,
    justifyContent: "center"
  }
});

export default Favorite;
