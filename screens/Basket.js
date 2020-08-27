import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";

function Basket(props) {
  return (
    <View style={styles.container}>
      <View style={styles.group}>
        <ImageBackground
          source={require("../assets/images/pexels-pixabay-264547.jpg")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <MaterialButtonPrimary
            style={styles.materialButtonPrimary}
          ></MaterialButtonPrimary>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  group: {
    width: 371,
    height: 832,
    marginTop: -170,
    marginLeft: -5
  },
  image: {
    width: 371,
    height: 832
  },
  image_imageStyle: {},
  materialButtonPrimary: {
    width: 100,
    height: 36,
    marginTop: 713,
    marginLeft: 230
  }
});

export default Basket;
