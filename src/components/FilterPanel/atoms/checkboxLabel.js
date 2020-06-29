import { mapState, mapMutations } from 'vuex'
export default {
    // props: ['alldata', 'changedData'],
    // data: function() {
    //     return {
    //         selectedval: {}
    //     }
    // },

    computed: {
        ...mapState({ filterListDatas: 'filterData', selectedval: 'selectedFilters' }),

    },
    methods: {
        ...mapMutations(['setSelectedFilters']),
        // ...mapGetters({selectedFilterData:'filterOutData'}),
        selectedItems: function(e) {
            console.log(this.selectedVal, this.filterListDatas);
            let valSelected = e.target.value,
                keySelected = e.target.parentElement.parentElement.parentElement.dataset.key;
            this.selectedval[keySelected] = this.selectedval[keySelected] || [];
            if (e.target.checked) {
                this.selectedval[keySelected].push(valSelected);
            } else {
                console.log("selectedItems", keySelected, this.selectedval[keySelected]);
                this.selectedval[keySelected].splice(this.selectedval[keySelected].indexOf(valSelected), 1);
            }
            this.setSelectedFilters(this.selectedval);
        }
    }
};