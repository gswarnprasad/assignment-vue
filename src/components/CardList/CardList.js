import { mapState } from 'vuex';
export default {
    data: function() {
        return {
            filteredCardsData: {}
        }
    },
    computed: {
        ...mapState({ cardDatas: 'characterData', selectedFilters: 'selectedFilters', searchVal: 'searchVal' })
    },
    watch: {
        selectedFilters(newVal) {
            this.filterData(newVal)
        },
        searchVal(newVal) {
            this.filterData(newVal)
        },
        cardDatas(newVal) {
            this.filteredCardsData = newVal
            this.filterData(this.selectedFilters);
        }
    },

    methods: {
        filterData(filter) {
            const filterKeys = Object.keys(filter); //assigning object key in constant
            const filteResult = this.cardDatas.filter(val => {
                let matchedData = true;
                filterKeys.map(keyVal => {
                    matchedData = matchedData && (filter[keyVal].length === 0 || filter[keyVal].some(values => {
                        const regEx = RegExp(values.toLowerCase().replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&'));

                        return (keyVal === 'name' && regEx.test(val[keyVal].toLowerCase())) || (val[keyVal].name && val[keyVal].name === values.toLowerCase()) || values.toLowerCase() === val[keyVal].toLowerCase();

                    }))
                })

                // matchedData && console.log(matchedData, val.name, val.species, val.gender);
                return matchedData;
            })
            this.filteredCardsData = {...filteResult };
        },

        lastCreated(created) {
            var seconds = Math.floor((new Date() - new Date(created)) / 1000);
            var interval = Math.floor(seconds / 31536000);
            if (interval > 1) {
                return interval + " years";
            }
            interval = Math.floor(seconds / 2592000);
            if (interval > 1) {
                return interval + " months";
            }
            interval = Math.floor(seconds / 86400);
            if (interval > 1) {
                return interval + " days";
            }
            interval = Math.floor(seconds / 3600);
            if (interval > 1) {
                return interval + " hours";
            }
            interval = Math.floor(seconds / 60);
            if (interval > 1) {
                return interval + " minutes";
            }
            return Math.floor(seconds) + " seconds";

            // return (new Date - new Date(created));
        },


    }
}