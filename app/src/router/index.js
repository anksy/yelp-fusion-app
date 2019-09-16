import React from 'react';
import { Switch, Route } from 'react-router-dom';
//import { ConnectedRouter } from 'react-router-redux';

import { ConnectedRouter } from "connected-react-router";

import App from '../App';

export default class AppRouter extends React.Component {
    render() {return (
            <ConnectedRouter history={this.props.history}>      
                <Switch>
                    <Route exact path="/" component={App} />
                </Switch>
            </ConnectedRouter>
        );
    }
}

