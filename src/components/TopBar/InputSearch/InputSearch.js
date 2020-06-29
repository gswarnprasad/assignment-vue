import { mapMutations } from 'vuex';
export default {
    data: function() {
        return {
            searchVal: {},
        }
    },
    methods: {
        ...mapMutations(['setSearchVal']),
        searchData: function(e) {
            if (e.target.value.length >= 2) {
                let searchString = e.target.value,
                    keySelected = 'name';
                this.searchVal = {};
                this.searchVal[keySelected] = this.searchVal[keySelected] || []
                this.searchVal[keySelected].push(searchString);
                this.setSearchVal(this.searchVal);
            } else {
                this.searchVal = {};
                this.setSearchVal(this.searchVal);
            }
        }
    }
}