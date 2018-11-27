import {Navigation} from 'react-native-navigation';
import { Provider } from "react-redux";
import { connect } from 'react-redux';

import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

import CompendiumScreen from './src/screens/Compendium/Compendium';
import SpellbookScreen from './src/screens/Spellbook/Spellbook';
import OptionsScreen from './src/screens/Options/Options';
import SpellDetailScreen from "./src/screens/SpellDetail/SpellDetail"
import DrawerScreen from "./src/screens/Spellbook/Drawer"

import spells from './res/data_file.json';

import configureStore from './src/store/configureStore';
import spellDetail from './src/screens/SpellDetail/SpellDetail';

const store = configureStore();

//Register Screens
Navigation.registerComponent(
  "project.CompendiumScreen", () =>
  CompendiumScreen,
  store,
  Provider,
);
Navigation.registerComponent(
  "project.SpellbookScreen", () => 
  SpellbookScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "project.OptionsScreen", () => 
  OptionsScreen,
  store,
  Provider
);
Navigation.registerComponent(
  "project.SpellDetailScreen", () =>
  SpellDetailScreen
)
Navigation.registerComponent(
  "project.DrawerScreen", () =>
  DrawerScreen,
  store,
  Provider
)

//Start a App
Promise.all([
  IconMaterial.getImageSource("library-books", 30),
  IconEntypo.getImageSource("open-book", 30),
  IconAwesome.getImageSource("gear", 30)
]).then(sources => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: "project.CompendiumScreen",
        label: "Compendium",
        title: "Spell Compendium",
        icon: sources[0],
      },
      {
        screen: "project.SpellbookScreen",
        label: "Spellbooks",
        title: "",
        icon: sources[1]
      },
      {
        screen: "project.OptionsScreen",
        label: "Options",
        title: "Options",
        icon: sources[2]
      }
    ],
    drawer: {
      left: {
        screen: "project.DrawerScreen",
        title: "My Spellbooks"
      }
    }
  });  
});
