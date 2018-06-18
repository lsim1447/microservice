import React , { Component } from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import axios from 'axios';

const Select = styled.select`
    width: 80%;
    height: 40px;
    text-align: center;
    margin-left: 10%;
    margin-right: 10%;
    font-size: 22px;
`;

const Option = styled.option `
    font-size: 22px;
`;

const TableContainer = styled.div`
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 5%;
    margin-bottom: 5%;
    width: 70%;
    max-height: 400px;
    border: 5px solid grey;
    overflow-y: scroll;
`;
const StorageLabel = styled.label `
    width: 80%;
    height: 40px;
    margin-left: 10%;
    margin-right: 10%;
    font-size: 30px;
    margin-top: 25px;
`;


@inject('StorageStore')
@observer
class StorageView extends Component {

    componentDidMount(){
        // const url = 'some_url'
        // axios.get(url)
        //     .then(response => {
        //         console.log(response.data);
        //     })
        //     .catch(err => {
        //         console.log(err);
        //     });
    }

    render(){
        const {StorageStore} = this.props;
        return (
            <div>
                <StorageLabel for="beer">Beer type:</StorageLabel>
                <Select
                    id="beer"
                    value={StorageStore.selectedBeer}
                    onChange={(e) => StorageStore.setSelectedBeer(e.target.value)}>
                        <Option> Igazi csiki sor </Option>
                        <Option> Tiltott csiki sor </Option>
                        <Option> Kremes csiki sor </Option>
                </Select>
                
                <TableContainer>
                    <table class="table">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Quantity</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                
                            }
                        </tbody>
                    </table>
                </TableContainer>
            </div>
        )
    }
}

export default StorageView;