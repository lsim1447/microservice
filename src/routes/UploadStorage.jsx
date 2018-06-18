import React , { Component } from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import axios from 'axios';
import { UPLOAD_STORAGE_URL } from './../Constants';

const AddNewForm = styled.form `
    text-align: left;
    margin-left: 35%;
    margin-right: 35%;
    width: 30%;
    font-size: 20px;
    border: 5px solid #333333;
    padding: 15px 15px 15px 15px;
`;

const TitleLabel = styled.label`
    margin-top: 7%;
    margin-left: 35%;
    margin-right: 35%;
    width: 30%;
    font-size: 35px;
    text-align: center;
    margin-bottom: 35px;
`

@inject('StorageStore')
@observer
class UploadStorage extends Component {

    onSubmit(){
        var tmp = this.props.StorageStore.getStorages
            .filter((store) =>  store.address === this.props.StorageStore.getAddStorage);

        const beer = {
            name: this.props.StorageStore.getAddName,
            quantity: this.props.StorageStore.getAddQuantity,
            storage: tmp[0]
        }

        axios.post(UPLOAD_STORAGE_URL, beer)
            .then((response) => {
                //console.log('succes' + response);
                this.props.StorageStore.addNewBeer(beer);
            })
            .catch((err) => {
                //console.log('error: ' + err);
            })
    }

    render(){
        const { StorageStore } = this.props;
        return (
            <div>
                <TitleLabel>Raktár feltöltése</TitleLabel>
                <AddNewForm>
                    <label for="type">Raktár neve:</label>
                    <select className="form-control" id="store_name"  onChange={ (e) => StorageStore.setAddStorage(e.target.value)}>
                        {
                            StorageStore.getStorages.map((store, index) => {
                                return (
                                    <option key={index}>{store.address}</option>
                                )
                            })
                        }
                    </select>
                    <br/>

                    <label for="type">Sör neve:</label>
                    <select  className="form-control" id="name"  onChange={ (e) => StorageStore.setAddName(e.target.value)}>
                        <option>Igazi csiki sör</option>
                        <option>Tiltott csiki sör</option>
                        <option>Krémes csiki sör</option>
                    </select>
                    <br/>

                    <label for="type">Mennyiség:</label>
                    <input type="text" className="form-control" id="type" placeholder="Mennyiség" onChange={ (e) => StorageStore.setAddQuantity(e.target.value)}/>
                    <br/>


                    <br/>
                    <button style={{width: "100%"}} type="button" className="btn btn-primary" onClick={ () => this.onSubmit()}>Submit</button>
                </AddNewForm>
            </div>
        )
    }
}

export default UploadStorage;