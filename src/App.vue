<template>
  <div class="grid-container fluid">
    <h1 style="text-align: center">Vue Assignment</h1>
    <div class="grid-x grid-margin-x">
      <div class="cell small-12 medium-3">
        <filter-panel></filter-panel>
      </div>
      <div class="cell small-12 medium-9">
        <top-bar></top-bar>
        <search-list></search-list>
      </div>
    </div>
  </div>
</template>

<script>
// Importin all the components
import AppFilterPanel from "./components/FilterPanel/FilterPanel.vue";
import AppSearchList from "./components/CardList/CardList.vue";
import AppTopBar from "./components/TopBar/TopBar.vue";
import { mapMutations } from "vuex";
// importing axios to make call to services
import axios from "axios";
// import jsonData from 'https://rickandmortyapi.com/api/character/';
export default {
  name: "App",
  data: function() {
    // Defining allthe global data and variableover here
    return {
      alldata: "",
    };
  },
  components: {
    //Mounting components
    "filter-panel": AppFilterPanel,
    "search-list": AppSearchList,
    "top-bar": AppTopBar
  },
  created() {
    // Making call to serviices throough axios
    axios
      .get("https://rickandmortyapi.com/api/character/")
      .then(res => {
        if (res) {
          this.alldata = res; // Assiging response to allData which is  definedin data
          this.setData(this.alldata.data.results);
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    ...mapMutations(["setData", "selectedFilters"]),
  }
};
</script>

