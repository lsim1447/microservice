import React , { Component } from 'react';
import styled from 'styled-components';

const TemporaryMessage = styled.div `
    text-align: center;
    font-size: 50px;
    padding-top: 150px;
    padding-bottom: 100px;
`

class UploadStorage extends Component {
    render(){
        return (
            <div>
                <TemporaryMessage> Upload Storage! </TemporaryMessage>
            </div>
        )
    }
}

export default UploadStorage;