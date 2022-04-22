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
    <img
      @mouseover="turnIcon = true"
      @mouseout="turnIcon = false"
      @click="getNewBeer"
      @touchstart="turnIcon = false"
      src="../assets/iconRestart.svg"
      alt="Get new beer"
      class="iconRestart"
      :class="{ iconRestartTurn: turnIcon }">
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BeerBlock',
  data() {
    return {
      dataForBeerBlock: {},
      turnIcon: false
    }
  },
  methods: {
    setDataForBeerBlock(dataFromServer: any) {
      return this.dataForBeerBlock = {...dataFromServer};
    },
    hideProperties(propertyName: string) {
      const hidePropertiesArray = ['id', 'uid', 'name'];
      return !hidePropertiesArray.includes(propertyName);
    },
    getNewBeer() {
      fetch('https://random-data-api.com/api/beer/random_beer', {
        method: 'GET'
      })
        .then(response => response.json())
        .then(result => this.setDataForBeerBlock(result));
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
@-webkit-keyframes rotation {
  from {
    -webkit-transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(-359deg);
  }
}
@-moz-keyframes rotation {
  from {
    -moz-transform: rotate(0deg);
  }
  to {
    -moz-transform: rotate(-359deg);
  }
}
@keyframes rotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-359deg);
  }
}
.beerBlock {
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  background: $red;
  color: white;
  border-radius: 20px;
  margin: 0px 10px;
  padding: 30px 40px;
  height: fit-content;
  position: relative;
  @media (max-width: 767px) {
    width: 50%;
    min-width: 250px;
    margin: 0 auto;
    padding: 30px;
  }
  @media (max-width: 576px) {
    width: 70%;
    min-width: initial;
  }
  .iconRestart {
    position: absolute;
    width: 30px;
    right: -25px;
    top: -25px;
    cursor: pointer;
    &.iconRestartTurn {
      animation: rotation 5s infinite linear;
    }
  }
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
  margin: 5px 0 5px 10px;
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