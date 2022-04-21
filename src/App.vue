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
body {
  background: rgba(#d3d3d3, 0.5);
}
#app {
  font-family: 'Times New Roman', Times, serif;
  padding: 40px 80px;
  @media (max-width: 992px) {
    padding: 40px 40px;
  }
  @media (max-width: 576px) {
    padding: 40px 20px;
  }
}
.appWrapper {
  display: grid;
  gap: 20px;
  grid-template-columns: 60% auto;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  @media (max-width: 767px) {
    display: block;
  }
}
</style>
