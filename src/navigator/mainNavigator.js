import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen313186Navigator from '../features/BlankScreen313186/navigator';
import BlankScreen113116Navigator from '../features/BlankScreen113116/navigator';
import BlankScreen013115Navigator from '../features/BlankScreen013115/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen313186: { screen: BlankScreen313186Navigator },
BlankScreen113116: { screen: BlankScreen113116Navigator },
BlankScreen013115: { screen: BlankScreen013115Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
