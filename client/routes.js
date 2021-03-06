import React, { Component } from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import App from './components/App';
import ViewAll from './components/ViewAll';
import Submitted from './components/Submitted';


export default class Routes extends Component {
  render() {
    const { isLoggedIn, isAdmin } = this.props;
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App} />
          <Route exact path="/submitted" component={Submitted} />
          <Route exact path="/closet" component={ViewAll} />
        </Switch>
      </BrowserRouter>
    );
  }
}
