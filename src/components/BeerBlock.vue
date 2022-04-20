<template>
  <div class="beerBlock">
    <h3 class="beerBlockTitle">{{ dataForBeerBlock.name }}</h3>
    <ul>
      <template
        v-for="(prop, name, index) in dataForBeerBlock"
        :key="index"
      >
        <li
          class="beerBlockListItem"
          v-if="hideProperties(name)"
        ><span>{{name}}: </span>{{prop}}</li>
      </template>
    </ul>
  </div>
</template>

<script lang='ts'>
/* eslint-disable */
import { defineComponent } from 'vue'
import { ImageBlock } from '../types/types';

export default defineComponent({
  name: 'BeerBlock',
  data() {
    return {
      dataForBeerBlock: {}
    }
  },
  methods: {
    setDataForBeerBlock(dataFromServer: any) {
      return this.dataForBeerBlock = {...dataFromServer};
    },
    hideProperties(propertyName: string) {
      const hidePropertiesArray = ['id', 'uid', 'name'];
      return !hidePropertiesArray.includes(propertyName);
    }
  },
  mounted() {
    fetch('https://random-data-api.com/api/beer/random_beer', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(result => this.setDataForBeerBlock(result));
  }
});
</script>

<style lang='scss'>
$red: firebrick;
.beerBlock {
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  background: $red;
  color: white;
  border-radius: 20px;
  margin: 0px 10px;
  padding: 30px 50px;
  height: fit-content;
}
.beerBlockTitle {
  text-align: center;
  margin-bottom: 20px;
}
.beerBlockListItem {
  list-style: none;
  padding: 5px;
  border: 1px white solid;
  border-radius: 5px;
  margin: 5px 0;
  position: relative;
  span {
    font-weight: bold;
  }
  &::before {
    content: url('../assets/iconBeer.svg');
    position: absolute;
    width: 20px;
    left: -25px;
    top: 50%;
    transform: translateY(-40%);
  }
}
</style>