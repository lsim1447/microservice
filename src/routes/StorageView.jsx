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

const ViewTitle = styled.div `
    text-align: center;
    margin-top: 3%;
    margin-bottom: 2%;
    margin-left: 20%;
    margin-right: 20%;
    font-size: 45px;
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
                <ViewTitle> Raktáron lévő söreink </ViewTitle>
                    <StorageLabel for="type">Raktár cime:</StorageLabel>
                    <Select  class="form-control" id="store_name"  onChange={ (e) => StorageStore.setSelectedStorage(e.target.value)}>
                        {
                            StorageStore.getStorages.map((store) => {
                                return (
                                    <Option>{store.address}</Option>
                                )
                            })
                        }
                    </Select>

                <TableContainer>
                    <table class="table">
                        <thead>
                        <tr>
                            <th>Sör neve</th>
                            <th>Mennyiség (üvegben)</th>
                            <th>Mennyiség (ládában) </th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                StorageStore.getFilteredBeers.map((beer) => {
                                    return (
                                        <tr>
                                            <td> {beer.name} </td>
                                            <td> {beer.quantity} </td>
                                            <td> {Math.round(beer.quantity / 20)} </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </TableContainer>
            </div>
        )
    }
}

export default StorageView;