<template>
  <div class="profileBlock">
    <ProfileBlockImage :dataForImageBlock="dataForImageBlock"/>
    <ProfileBlockMoreInfo v-if = 'false'/>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import ProfileBlockImage from './ProfileBlockImage.vue';
import ProfileBlockMoreInfo from './ProfileBlockMoreInfo.vue';
import { ImageBlock } from '../types/types';

export default defineComponent({
  name: 'ProfileBlock',
  components: {
    ProfileBlockImage,
    ProfileBlockMoreInfo
  },
  data() {
    return {
      dataForImageBlock: {
        avatar: '',
        first_name: '',
        date_of_birth: '',
        employment: ''
      }
    }
  },
  methods: {
    setDataForImageBlock(dataFromServer: any): ImageBlock {
      return this.dataForImageBlock = {
        avatar: dataFromServer.avatar,
        first_name: dataFromServer.first_name,
        date_of_birth: dataFromServer.date_of_birth,
        employment: dataFromServer.employment.title
      }
    }
  },
  mounted() {
    fetch('https://random-data-api.com/api/users/random_user', {
      method: 'GET'
    })
      .then(response => response.json())
      .then(result => this.setDataForImageBlock(result));
  }
});
</script>

<style>
  .profileBlock{
    width: 70%;
  }
</style>