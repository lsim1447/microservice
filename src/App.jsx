import React, {Component} from 'react';
import NavigationBar from './component/NavigationBar';
import Router from './Router'; 

class App extends Component {
    render(){
        return (
            <div>
                <NavigationBar />
                <Router />
            </div>
        );
    }
}

export default App;