import { observable, action, computed } from 'mobx';
class StorageStore {
    @observable storages = [
        {
            storage_id: 1,
            address: 'Infinity'
        },
        {
            storage_id: 2,
            address: 'Bulgakov'
        },
        {
            storage_id: 3,
            address: 'Noname'
        }
    ]

    @observable beers = [
        {
            id: '1',
            name: 'Tiltott csiki sör',
            quantity: 401,
            storage: {
                storage_id: 1,
                address: 'Infinity'
            }
        },
        {
            id: '2',
            name: 'Igazi csiki sör',
            quantity: 4700,
            storage: {
                storage_id: 1,
                address: 'Infinity'
            },
        },
        {
            id: '3',
            name: 'Krémes csiki sör',
            quantity: 1650,
            storage: {
                storage_id: 2,
                address: 'Bulgakov'
            }
        },
        {
            id: '4',
            name: 'Tiltott csiki sör',
            quantity: 1650,
            storage: {
                storage_id: 3,
                address: 'Noname'
            }
        }
    ];
    @observable selectedStorage = this.storages[0].address;
    @observable add_storage = this.storages[0].address;
    @observable add_name = this.beers[0].name;
    @observable add_quantity = 0;

    @action setSelectedStorage = (storage) =>{
        this.selectedStorage = storage;
    }
    @computed get getSelectedStorage(){
        return this.selectedStorage;
    }

    @action setBeers = (beers) => {
        this.beers = beers;
    }

    @computed get getBeers(){
        return this.beers;
    }

    @action setStorages = (storages) => {
        this.storages = storages;
    }

    @computed get getStorages() {
        return this.storages;
    }

    @action addNewBeer = (beer) => {
        const tmp = this.getBeers;
        const tmpBeer = {
            id: Math.floor(Math.random() * 100000) + 1,
            name: beer.name,
            quantity: beer.quantity,
            storage: beer.storage
        }
        tmp.push(tmpBeer);
        this.setBeers(tmp);
    }

    @action setAddName = (name) => {
        this.add_name = name;
    }

    @computed get getAddName(){
        return this.add_name;
    }

    @action setAddQuantity = (quantity) => {
        this.add_quantity = quantity;
    }

    @computed get getAddQuantity(){
        return this.add_quantity;
    }

    @action setAddStorage = (storage) => {
        this.add_storage = storage;
    }

    @computed get getAddStorage(){
        return this.add_storage;
    }

    @computed get getFilteredBeers(){
        return this.getBeers.filter((beer) => {
                return beer.storage.address === this.selectedStorage;
        })
    }
}

const store = new StorageStore();
export default store;