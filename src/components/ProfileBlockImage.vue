<template>
  <div class="profileBlockImage profileBlockChild">
    <figure class="profileImageWithName">
      <img v-if="showImage" @click="reloadImage" class="profileImage" :src="personImageUrl" alt="Image of profile" title="You can try to reload this image">
      <figcaption class="profileName">{{ personName }}</figcaption>
    </figure>
    <div class="profileInfoBlock"><span>Position:</span> {{ personPositionOfWork }}</div>
    <div class="profileInfoBlock"><span>Age:</span> {{ personAge }}</div>
    <button class="profileMoreInfoButton profileInfoBlock" @click="$emit('openModal')">More information</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { PropType } from '@vue/runtime-core';
import { ImageBlock } from '../types/types';

export default defineComponent({
  name: 'ProfileBlockImage',
  data(){
    return {
      showImage: true
    }
  },
  computed: {
    personImageUrl() {
      return this.dataForImageBlock?.avatar;
    },
    personName() {
      return this.dataForImageBlock?.first_name;
    },
    personPositionOfWork() {
      return this.dataForImageBlock?.employment;
    },
    personAge() {
      const currentDate = new Date();
      //@ts-expect-error
      const personBirthDate = new Date(this.dataForImageBlock?.date_of_birth);
      return currentDate.getFullYear() - personBirthDate.getFullYear();
    }
  },
  methods: {
    reloadImage() {
      this.showImage = false;
      setTimeout(() => {
        this.showImage = true;
      }, 0)
      
    }
  },
  props: {
    dataForImageBlock: {
      type: Object as PropType<ImageBlock>,
    }
  }
});
</script>

<style lang='scss'>
  $red: firebrick;

  .profileBlockChild{
    box-shadow: 0 0 10px rgba(0,0,0,0.2);
    background: white;
    border-radius: 20px;
    margin: 0px 10px;
    padding: 10px 20px;
  }
  .profileImageWithName{
    position: relative;
    width: 250px;
    height: 250px;
    margin: 0 auto 30px;
    display: flex;
    justify-content: center;
  }
  .profileImage {
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    background: white;
  }
  .profileName {
    position: absolute;
    bottom: -10px;
    background: $red;
    color: white;
    font-weight: bold;
    font-size: 20px;
    padding: 10px 20px;
    border-radius: 10px;
  }
  .profileInfoBlock {
    padding: 10px 20px;
    border: $red 1px solid;
    margin: 10px 0;
    border-radius: 10px;
    span {
      font-weight: bold;
    }
  }
  .profileMoreInfoButton {
    background: none;
    margin: 0 auto;
    cursor: pointer;
    transition: 0.5s;
    &:hover {
      background: $red;
      color: white;
      transition: 1s;
    }
  }
</style>