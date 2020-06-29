<template>
  <div class="card-list">
    <ul class="characters-list grid-x grid-margin-x grid-margin-y">
      <li class="cell small-6 large-3 list-items" v-for="(data, key) in filteredCardsData" :key="key">
        <div class="card">
          <img :src="data.image" class="card-img-top" alt="image" />
          <div class="card-divider">
            <ul>
              <li>
                 <h5 class="card-title">{{data.name}}</h5>
              </li>
              <li>
                <p class="card-text">ID: {{data.id}} Created: {{lastCreated(data.created)}} ago</p>
              </li>
            </ul>
          </div>
          <div class="card-section">
            <ul class="details">
              <li>
                <strong>Status:</strong>
                <span>{{data.name}}</span>
              </li>
              <li>
                <strong>Species:</strong>
                <span>{{data.species}}</span>
              </li>
              <li>
                <strong>Gender:</strong>
                <span>{{data.gender}}</span>
              </li>
              <li>
                <strong>Origin:</strong>
                <span>{{data.origin.name}}</span>
              </li>
              <li>
                <strong>Last Location:</strong>
                <span>{{data.location.name}}</span>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script src="./CardList.js"></script>

<style lang="scss" scoped>
@import "./CardList.scss";
</style>

