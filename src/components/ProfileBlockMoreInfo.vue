<template>
  <div class="profileBlockMoreInfoOverlay" @click="$emit('closeModal')">
    <div class="profileBlockMoreInfo profileBlockChild" @click.stop>
      <svg class='modalClose' @click="$emit('closeModal')" @touchstart="$emit('closeModal')" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z"/></svg>
      <h3 class="profileBlockMoreInfoTitle">{{ personFullName }}</h3>
      <table>
        <template
          v-for="(infoRow, name, index) in dataForMoreInfoBlock"
          :key="index"
        >
          <tr v-if="hideProperties(name)">
          <td>{{ changeName(name) }}</td>
          <td >{{ checkInfoRow(infoRow) }}
            <ul v-if="typeof infoRow === 'object' && !infoRow.city">
              <li
                v-for="(prop, innerName, innerIndex) in infoRow"
                :key="innerIndex"
              > <span style="text-decoration: underline;">{{ changeName(innerName) }}:</span> {{ prop }} </li>
            </ul>
          </td>
          </tr>
        </template>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { PropType } from '@vue/runtime-core';
import { MoreInfoBlock, MoreInfoBlockAddress } from '../types/types';

export default defineComponent({
  name: 'ProfileBlockMoreInfo',
  computed: {
    personFullName() {
      return `${this.dataForMoreInfoBlock?.first_name} ${this.dataForMoreInfoBlock?.last_name}`;
    }
  },
  methods: {
    hideProperties(propertyName: string) {
      const hidePropertiesArray = ['first_name', 'last_name'];
      return !hidePropertiesArray.includes(propertyName);
    },
    changeName(name: string){
      return (name.slice(0, 1).toUpperCase() + name.slice(1)).replaceAll('_', ' ');
    },
    checkInfoRow(infoRow: string | object & MoreInfoBlockAddress) {
      if (typeof infoRow === 'string') {
        return infoRow;
      } else if (infoRow.country) {
        return `${infoRow.country}, ${infoRow.state}, ${infoRow.city}, ${infoRow.street_name}, ${infoRow.street_address}`
      } else {
        return undefined;
      }
    }
  },
  props: {
    dataForMoreInfoBlock: {
      type: Object as PropType<MoreInfoBlock>,
    }
  }
});
</script>

<style lang='scss'>
  $red: firebrick;
  .profileBlockMoreInfoOverlay {
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.25);
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1100;
    width: 100%;
    height: 100vh;
    align-items: center;
  }
  .profileBlockMoreInfo {
    width: 500px;
    max-height: 90%;
    padding: 40px;
    background: #ffffff;
    position: absolute;
    z-index: 5;
    overflow: scroll;
    @media (max-width: 767px) {
      padding: 20px;
    }
    @media (max-width: 576px) {
      width: 90%;
    }
  }
  .modalClose {
    fill: black;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    transition: 0.5s;
  }
  .modalClose:hover {
    transition: 0.5s;
    fill: $red;
  }
  .profileBlockMoreInfoTitle {
  text-align: center;
  margin-bottom: 20px;
  font-size: 25px;
}
.profileBlockMoreInfo {
  table {
    border: $red 3px solid;
  }
  td {
    padding: 10px 20px;
    border: $red 1px solid;
    margin: 10px 0;
    border-radius: 10px;
    font-size: 16px;
    &:first-child {
      font-weight: bold;
    }
    @media (max-width: 767px) {
      padding: 10px 15px;
    }
    @media (max-width: 576px) {
      font-size: 14px;
    }
  }
}
</style>