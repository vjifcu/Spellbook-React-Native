import {Navigation} from 'react-native-navigation';
import IconMaterial from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';
import IconAwesome from 'react-native-vector-icons/FontAwesome';

import CompendiumScreen from './src/screens/Compendium/Compendium';
import SpellbookScreen from './src/screens/Spellbook/Spellbook';
import OptionsScreen from './src/screens/Options/Options';

//Register Screens
Navigation.registerComponent(
  "project.CompendiumScreen", () =>
  CompendiumScreen
);
Navigation.registerComponent(
  "project.SpellbookScreen", () => 
  SpellbookScreen
);
Navigation.registerComponent(
  "project.OptionsScreen", () => 
  OptionsScreen
);

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
        icon: sources[0]
      },
      {
        screen: "project.SpellbookScreen",
        label: "Spellbooks",
        title: "Your Spellbooks",
        icon: sources[1]
      },
      {
        screen: "project.OptionsScreen",
        label: "Options",
        title: "Options",
        icon: sources[2]
      }
    ]
  });  
});
