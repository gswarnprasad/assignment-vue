import { mapState, mapMutations } from 'vuex';
export default {
    data: function() {
        return {
            tags: {}
        }
    },
    computed: {
        ...mapState({ addLabelText: 'selectedFilters' })
    },
    methods: {
        ...mapMutations(['setSelectedFilters']),
        removeFilter(e) {
            this.tags = this.addLabelText;
            let removeKey = e.target.parentElement.dataset.key,
                removeVal = e.target.previousElementSibling.textContent
            this.tags[removeKey].splice(this.tags[removeKey].indexOf(removeVal), 1);
            this.setSelectedFilters(this.tags);
        }
    },
    watch: {
        data: function() {
            this.tags = {...this.addLabelText }
        }
    }
}