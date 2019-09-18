import React from 'react';
import { Provider } from 'react-redux';
import NavigationTabs from './components/NavigationTabs';
import CssBaseline from '@material-ui/core/CssBaseline';
import store from './helpers/store';
import { HashRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <React.Fragment>
        <CssBaseline />  
        <Router basename="/">
        <Route
          exact path='/'
          render={(props) => <NavigationTabs {...props} value={0} />}
        />
        <Route
          exact path='/apod'
          render={(props) => <NavigationTabs {...props} value={1} />}
        />
        <Route
          exact path='/neo'
          render={(props) => <NavigationTabs {...props} value={2} />}
        />
        </Router>    
      </React.Fragment>
    </Provider>
  );
}

export default App;


