<template>
    <div>
        <!-- <p>Total {{ counter }} {{ characterData }}</p> -->
        <div class="row selectted-filter">
            <app-tag></app-tag>
        </div>
        <div class="grid-x search-container">
            <app-input-search></app-input-search>
            <app-sorting></app-sorting>
        </div>
    </div>
</template>
<script src="./TopBar.js"></script>
<style lang="scss">
@import './TopBar.scss';
</style>
