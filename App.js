import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentsScreen from './src/screens/ComponentsScreen';
import FlatListComponent from './src/screens/FlatListComponent';
import ImageScreen from './src/screens/ImageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';
import SquareScreen from './src/screens/SquareScreen';
import SquareScreenWithReducer from './src/screens/SquareScreenWithReducer';
import CounterScreenWithReducer from './src/screens/CounterScreenWithReducer';
import TextScreen from './src/screens/TextScreen';

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: FlatListComponent,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square : SquareScreen,
    SquareReducer: SquareScreenWithReducer,
    CounterReducer: CounterScreenWithReducer,
    Text: TextScreen
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);
