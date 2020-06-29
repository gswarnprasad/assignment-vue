<template>
  <ul>
    <template v-for="(val, key) in addLabelText">
      <li :data-key="key" v-for="label in val" :key="label"><span>{{ label }}</span> <a href="javascript:void(0)" @click.prevent="removeFilter">X</a></li>
    </template>
  </ul>
</template>
<script src="./SelectedFilter.js"></script>
