import { mapState, mapMutations } from 'vuex';

export default {
    computed: {
        ...mapState({ cardDatas: 'characterData' })
    },
    methods: {
        ...mapMutations(['sortData']),
        onChange(e) {
            let sortText = e.target.value;
            // let sortedData = {};
            if (sortText === "ascending") {
                this.cardDatas.sort((a, b) =>
                    a.name > b.name ? 1 : -1
                );
            } else {
                this.cardDatas.sort((a, b) =>
                    a.name < b.name ? 1 : -1
                );
            }
            // console.log(sortedData);
            // this.sortData = sortedData;
        }
    }
}