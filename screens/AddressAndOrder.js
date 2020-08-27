import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import MaterialButtonTransparentHamburger from "../components/MaterialButtonTransparentHamburger";
import MaterialStackedLabelTextbox3 from "../components/MaterialStackedLabelTextbox3";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";

function AddressAndOrder(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/pexels-henry-&-co-26482305.jpg")}
        resizeMode="contain"
        style={styles.background}
        imageStyle={styles.background_imageStyle}
      >
        <View style={styles.materialButtonTransparentHamburgerStack}>
          <MaterialButtonTransparentHamburger
            style={styles.materialButtonTransparentHamburger}
          ></MaterialButtonTransparentHamburger>
          <MaterialStackedLabelTextbox3
            style={styles.materialStackedLabelTextbox3}
          ></MaterialStackedLabelTextbox3>
        </View>
        <MaterialStackedLabelTextbox3
          style={styles.materialStackedLabelTextbox5}
        ></MaterialStackedLabelTextbox3>
        <MaterialStackedLabelTextbox3
          style={styles.materialStackedLabelTextbox4}
        ></MaterialStackedLabelTextbox3>
        <MaterialStackedLabelTextbox3
          style={styles.materialStackedLabelTextbox6}
        ></MaterialStackedLabelTextbox3>
        <MaterialButtonPrimary
          style={styles.materialButtonPrimary}
        ></MaterialButtonPrimary>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  background: {
    width: 579,
    height: 749,
    marginTop: -12,
    marginLeft: -41
  },
  background_imageStyle: {},
  materialButtonTransparentHamburger: {
    position: "absolute",
    left: 258,
    top: 0,
    width: 68,
    height: 67
  },
  materialStackedLabelTextbox3: {
    height: 60,
    width: 292,
    position: "absolute",
    left: 0,
    top: 66
  },
  materialButtonTransparentHamburgerStack: {
    width: 326,
    height: 126,
    marginTop: 34,
    marginLeft: 75
  },
  materialStackedLabelTextbox5: {
    height: 60,
    width: 292,
    marginTop: 36,
    marginLeft: 75
  },
  materialStackedLabelTextbox4: {
    height: 60,
    width: 292,
    marginTop: 42,
    marginLeft: 75
  },
  materialStackedLabelTextbox6: {
    height: 60,
    width: 292,
    marginTop: 24,
    marginLeft: 75
  },
  materialButtonPrimary: {
    height: 36,
    width: 100,
    marginTop: 118,
    marginLeft: 267
  }
});

export default AddressAndOrder;
