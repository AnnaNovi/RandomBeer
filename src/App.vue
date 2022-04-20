<template>
  <ProfileBlock />
</template>

<script>
import ProfileBlock from './components/ProfileBlock.vue';

export default {
  name: 'App',
  components: {
    ProfileBlock
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
  padding: 30px 80px;
  height: 100vh;
}
</style>
