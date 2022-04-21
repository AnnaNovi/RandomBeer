<template>
  <div class="profileBlock">
    <ProfileBlockImage
      :dataForImageBlock="dataForImageBlock"
      @openModal="showModal = true"/>
    <ProfileBlockMoreInfo
      v-if = "showModal"
      :dataForMoreInfoBlock="dataForMoreInfoBlock"
      @closeModal="showModal = false" />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import ProfileBlockImage from './ProfileBlockImage.vue';
import ProfileBlockMoreInfo from './ProfileBlockMoreInfo.vue';
import { ImageBlock, MoreInfoBlock } from '../types/types';

export default defineComponent({
  name: 'ProfileBlock',
  components: {
    ProfileBlockImage,
    ProfileBlockMoreInfo
  },
  data() {
    return {
      dataForImageBlock: {} as ImageBlock,
      dataForMoreInfoBlock: {} as MoreInfoBlock,
      showModal: false
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
    },
    setDataForMoreInfoBlock(dataFromServer: any): MoreInfoBlock {
      return this.dataForMoreInfoBlock = {
        first_name: dataFromServer.first_name,
        last_name: dataFromServer.last_name,
        date_of_birth: dataFromServer.date_of_birth,
        employment: dataFromServer.employment,
        phone_number: dataFromServer.phone_number,
        social_insurance_number: dataFromServer.social_insurance_number,
        email: dataFromServer.email,
        address: dataFromServer.address,
        subscription: dataFromServer.subscription
      }
    }
  },
  mounted() {
    fetch('https://random-data-api.com/api/users/random_user', {
      method: 'GET'
    })
      .then(response => {
        if(response.ok) {
          return response.json()
        }
        throw new Error();
      })
      .then(result => {
        this.setDataForImageBlock(result);
        this.setDataForMoreInfoBlock(result);
      })
      .catch(error => console.log(error));
  }
});
</script>

<style lang="scss">
.profileBlock {
  @media (max-width: 767px) {
    display: flex;
    justify-content: center;
  }
}
</style>