import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
        characterData: {},
        filterData: {},
        selectedFilters: {},
        searchVal: {},
        counter: 0
    },
    mutations: {
        setData: (state, payload) => {
            // let filterData = (data) => {
            let filters = { species: {}, gender: {}, origin: {} }; // creatiing blank object with key
            payload.map(function(val) { // return the data according to speccific key
                filters.species[val.species] = val.species
                filters.gender[val.gender] = val.gender
                filters.origin[val.origin.name] = val.origin.name
            });
            state.filterData = filters
            state.characterData = payload;
        },
        setSelectedFilters: (state, payload) => {
            state.selectedFilters = {...payload }
        },
        setSearchVal: (state, payload) => {
            state.searchVal = {...payload }
        }
    }
});