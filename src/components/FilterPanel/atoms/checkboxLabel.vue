<template>
  <div>
    <ul
      class="list-group"
      v-for="(filterListData, key) in filterListDatas"
      :key="key"
      :data-key="key"
    >
      <h3>{{ key }}</h3>
      <li class="list-group-item checkbox" v-for="(item, k) in filterListData" :key="k">
        <label>
          <input type="checkbox" :value="item" @click="selectedItems" v-model="selectedval[key]" />
          {{ item }}
        </label>
      </li>
    </ul>
  </div>
</template>
<script src="./checkboxLabel.js"></script>
