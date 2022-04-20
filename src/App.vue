<template>
  <div class="appWrapper">
    <ProfileBlock />
    <BeerBlock />
  </div>
</template>

<script>
import ProfileBlock from './components/ProfileBlock.vue';
import BeerBlock from './components/BeerBlock.vue';

export default {
  name: 'App',
  components: {
    ProfileBlock,
    BeerBlock
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: 'Times New Roman', Times, serif;
  background: rgba(#d3d3d3, 0.5);
  padding: 40px 80px;
  height: 100vh;
}
.appWrapper {
  display: grid;
  gap: 20px;
  grid-template-columns: 60% auto;
  align-items: center;
  max-width: 1200px;
}
</style>
