import React , { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';


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
                <TemporaryMessage onClick={() => this.checkAxios()}> Welcome to our page! </TemporaryMessage>
                <img src="https://csikisor.hu/wp-content/uploads/2017/10/csikimix.jpg" alt="transport" style={{width: "50%", height: "400px", marginLeft: "25%", marginRight: "25%"}} />
            </div>
        )
    }
}

export default Home;