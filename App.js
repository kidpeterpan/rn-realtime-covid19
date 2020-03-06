import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import WebviewScreen from './src/screens/WebviewScreen';

const navigator = createStackNavigator(
  {
    WebScreen : WebviewScreen
  },
  {
    initialRouteName: "WebScreen",
    defaultNavigationOptions: {
      title: "Real Time COVID19"
    }
  }
);

export default createAppContainer(navigator);
