import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './routes/Home';
import PageNotFound from './routes/PageNotFound';
import StorageView from './routes/StorageView';
import UploadStorage from './routes/UploadStorage';

class Router extends Component {
    render(){
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={ () => <Home />}/>
                    <Route exact path="/storage_view" render={(props) => <StorageView {...props} />} />
                    <Route exact path="/upload_storage" render={ (props) => <UploadStorage {...props}/>} />
                    <Route render={ (props) => <PageNotFound {...props}/>} />
                </Switch>
            </BrowserRouter>
        );
    }
}

export default Router;