import React , { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import 'rxjs/add/observable/from';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

//  this is just a temporary div. If you don't wanna to use styled components, you can
//  adjust your own components with explicit css files, using the 'className' attribute of the tags.
//  In this case u should can the import in the second row

const TemporaryMessage = styled.div `
    text-align: center;
    font-size: 50px;
    padding-top: 150px;
    padding-bottom: 100px;
`

class Home extends Component {
    
    checkAxios(){
        const url = 'http://localhost:8080/transport/secured/all'
        axios.get(url)
            .then(response => {
                console.log(response.data);
            })
            .catch(err => {
                console.log("You have no access for this");
            })
    }

    render(){
        return (
            <div>
                <TemporaryMessage onClick={() => this.checkAxios()}> Welcome to our transport page! </TemporaryMessage>
                <img src="https://previews.123rf.com/images/olegtoka/olegtoka1504/olegtoka150400013/38898043-travel-transport.jpg" alt="transport" style={{width: "50%", height: "400px", marginLeft: "25%", marginRight: "25%"}} />
            </div>
        )
    }
}

export default Home;