import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { AppLoading } from "expo";

import Home from "./screens/Home";
import AddressAndOrder from "./screens/AddressAndOrder";
import SingleProduct from "./screens/SingleProduct";
import Basket from "./screens/Basket";
import Favorite from "./screens/Favorite";

const DrawerNavigation = createDrawerNavigator({
  Home: Home,
  AddressAndOrder: AddressAndOrder,
  SingleProduct: SingleProduct,
  Basket: Basket,
  Favorite: Favorite
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Home: Home,
    AddressAndOrder: AddressAndOrder,
    SingleProduct: SingleProduct,
    Basket: Basket,
    Favorite: Favorite
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([Font.loadAsync({})]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
