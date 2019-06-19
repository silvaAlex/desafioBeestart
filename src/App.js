
import { StackNavigator } from 'react-navigation';

import Home from './components/Home';
import Register from './components/Form/Register';
import Login from './components/Form/Login';
import Dashboard from './components/Dashboard';

const App = StackNavigator({
  Home: { screen: Home },
  Register: { screen: Register },
  Login: {screen : Login },
  Dashboard: {screen: Dashboard}
});

export default App;
