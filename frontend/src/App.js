import React from 'react';
import Header from './Header';
import Home from './Home';
import Profile from './Profile';
import Discover from './Discover';
import Footer from './Footer';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/discover' component={Discover}/>
        <Route exact path='/profile' render={(routeProps) => (
          <Profile {...routeProps} />
          )}/>
      </Switch>
      <Footer />
      </div>
    );
  }
}

export default App;
