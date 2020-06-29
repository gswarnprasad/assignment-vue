<template>
  <div class="cell small-12 medium-6 sorting">
    <select name="sorting" id @change="onChange($event)">
      <option value="deefault">Sort By ID</option>
      <option value="ascending">Ascending</option>
      <option value="descending">Descending</option>
    </select>
  </div>
</template>
<script src="./Sorting.js"></script>
