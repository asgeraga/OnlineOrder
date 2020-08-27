import React, { Component } from "react";
import { StyleSheet, View, Image, ImageBackground } from "react-native";
import MaterialButtonTransparentHamburger from "../components/MaterialButtonTransparentHamburger";
import MaterialCardWithImageAndTitle1 from "../components/MaterialCardWithImageAndTitle1";

function Home(props) {
  return (
    <View style={styles.container}>
      <View style={styles.materialButtonTransparentHamburgerStack}>
        <MaterialButtonTransparentHamburger
          style={styles.materialButtonTransparentHamburger}
        ></MaterialButtonTransparentHamburger>
        <ImageBackground
          source={require("../assets/images/pexels-henry-&-co-26482305.jpg")}
          resizeMode="contain"
          style={styles.image}
          imageStyle={styles.image_imageStyle}
        >
          <MaterialCardWithImageAndTitle1
            style={styles.materialCardWithImageAndTitle3}
          ></MaterialCardWithImageAndTitle1>
          <MaterialCardWithImageAndTitle1
            style={styles.materialCardWithImageAndTitle2}
          ></MaterialCardWithImageAndTitle1>
          <MaterialCardWithImageAndTitle1
            style={styles.materialCardWithImageAndTitle4}
          ></MaterialCardWithImageAndTitle1>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  materialButtonTransparentHamburger: {
    height: 56,
    width: 50,
    position: "absolute",
    left: 341,
    top: 39
  },
  image: {
    top: 0,
    left: 0,
    width: 579,
    height: 749,
    position: "absolute"
  },
  image_imageStyle: {},
  materialCardWithImageAndTitle3: {
    height: 164,
    width: 291,
    marginTop: 97,
    marginLeft: 100
  },
  materialCardWithImageAndTitle2: {
    height: 164,
    width: 291,
    marginTop: 36,
    marginLeft: 100
  },
  materialCardWithImageAndTitle4: {
    height: 164,
    width: 291,
    marginTop: 25,
    marginLeft: 100
  },
  materialButtonTransparentHamburgerStack: {
    width: 579,
    height: 749,
    marginTop: -9,
    marginLeft: -45
  }
});

export default Home;
