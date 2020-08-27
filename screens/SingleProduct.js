import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import MaterialButtonTransparentHamburger from "../components/MaterialButtonTransparentHamburger";
import MaterialCard5 from "../components/MaterialCard5";
import MaterialButtonPrimary from "../components/MaterialButtonPrimary";

function SingleProduct(props) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/pexels-henry-&-co-26482305.jpg")}
        resizeMode="contain"
        style={styles.image1}
        imageStyle={styles.image1_imageStyle}
      >
        <MaterialButtonTransparentHamburger
          style={styles.materialButtonTransparentHamburger1}
        ></MaterialButtonTransparentHamburger>
        <MaterialCard5 style={styles.materialCard5}></MaterialCard5>
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
  image1: {
    width: 579,
    height: 749,
    marginLeft: -168
  },
  image1_imageStyle: {},
  materialButtonTransparentHamburger1: {
    width: 68,
    height: 67,
    marginTop: 22,
    marginLeft: 460
  },
  materialCard5: {
    width: 355,
    height: 394,
    marginTop: 16,
    marginLeft: 173
  },
  materialButtonPrimary: {
    width: 100,
    height: 36,
    marginTop: 48,
    marginLeft: 394
  }
});

export default SingleProduct;
