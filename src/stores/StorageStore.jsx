import { observable, action, computed } from 'mobx';
class StorageStore {
    @observable selectedBeer = 'Igazi csiki sor';
    @observable beers = [];

    @action setSelectedBeer = (beer) =>{
        this.selectedBeer = beer;
    }

    @action setBeers = (beers) => {
        this.beers = beers;
    }

    @action addNewBeer = (beer) => {
        const tmp = this.getBeers;
        const tmpBeer = {
            id: Math.floor(Math.random() * 100000) + 1,
            name: beer.name,
            type: beer.type,
            quantity: beer.quantity
        }
        tmp.push(tmpBeer);
        this.setBeers(tmp);
    }


    @computed get getBeers(){
        return this.beers;
    }

    @computed get getFilteredBeers(){
        return this.getBeers.filter((beer) => {
                return beer.type === this.selectedBeer;
        })
    }
}

const store = new StorageStore();
export default store;