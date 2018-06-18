import React , { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';


const TemporaryMessage = styled.div `
    text-align: center;
    font-size: 50px;
    padding-top: 150px;
    padding-bottom: 100px;
`
const HomeImage = styled.img `
    width: 50%;
    height: 400px;
    margin-left: 25%;
    margin-right: 25%;
`;

class Home extends Component {

    render(){
        return (
            <div>
                <TemporaryMessage> Welcome to our page! </TemporaryMessage>
                <HomeImage src="https://csikisor.hu/wp-content/uploads/2017/10/csikimix.jpg" alt="transport"/>
            </div>
        )
    }
}

export default Home;