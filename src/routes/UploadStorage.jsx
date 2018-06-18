import React , { Component } from 'react';
import styled from 'styled-components';
import { observer, inject } from 'mobx-react';
import axios from 'axios';


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
        console.log('storage');
        console.log(this.props.StorageStore.getAddStorage);
        var tmp = this.props.StorageStore.getStorages
            .filter((store) =>  store.address === this.props.StorageStore.getAddStorage);

        console.log(tmp);
        const beer = {
            name: this.props.StorageStore.getAddName,
            quantity: this.props.StorageStore.getAddQuantity,
            storage: tmp[0]
        }

        console.log(beer);

        //post request to the database. insert/update the Storage table
        const url = "some url";
        axios.post(url, beer)
            .then((response) => {
                this.props.StorageStore.addNewBeer(beer);
            })
            .catch((err) => {

            })
    }

    render(){
        const { StorageStore } = this.props;
        return (
            <div>
                <TitleLabel>Raktár feltöltése</TitleLabel>
                <AddNewForm>
                    <label for="type">Raktár neve:</label>
                    <select  class="form-control" id="store_name"  onChange={ (e) => StorageStore.setAddStorage(e.target.value)}>
                        {
                            StorageStore.getStorages.map((store) => {
                                return (
                                    <option>{store.address}</option>
                                )
                            })
                        }
                    </select>
                    <br/>

                    <label for="type">Sör neve:</label>
                    <select  class="form-control" id="name"  onChange={ (e) => StorageStore.setAddName(e.target.value)}>
                        <option>Igazi csiki sör</option>
                        <option>Tiltott csiki sör</option>
                        <option>Krémes csiki sör</option>
                    </select>
                    <br/>

                    <label for="type">Mennyiség:</label>
                    <input type="text" class="form-control" id="type" placeholder="Mennyiség" onChange={ (e) => StorageStore.setAddQuantity(e.target.value)}/>
                    <br/>


                    <br/>
                    <button style={{width: "100%"}} type="button" class="btn btn-primary" onClick={ () => this.onSubmit()}>Submit</button>
                </AddNewForm>
            </div>
        )
    }
}

export default UploadStorage;