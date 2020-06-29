<template>
  <div class="filter-section">
    <check-box-label></check-box-label>
  </div>
</template>
<script>
import AppCheckBoxlabel from "./atoms/checkboxLabel.vue";
export default {
  components: {
    "check-box-label": AppCheckBoxlabel
  }
};
</script>
<style lang="scss">
  @import "./FilterPanel.scss";
</style>


