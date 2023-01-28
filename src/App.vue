<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import type { Dimensions } from '@/types';
  import getDeviceScreenDimensions from '@/utils/getDeviceScreenDimensions';
  import getDeviceViewportDimensions from '@/utils/getDeviceViewportDimensions';
  import getBrowserViewportDimensions from '@/utils/getBrowserViewportDimensions';
  import getBrowserWindowDimensions from '@/utils/getBrowserWindowDimensions';
  import VRow from '@/components/VRow.vue';

  const deviceScreen = ref<Dimensions>();
  const deviceViewport = ref<Dimensions>();
  const browserViewport = ref<Dimensions>();
  const browserWindow = ref<Dimensions>();

  const calculate = () => {
    deviceScreen.value = getDeviceScreenDimensions();
    deviceViewport.value = getDeviceViewportDimensions();
    browserViewport.value = getBrowserViewportDimensions();
    browserWindow.value = getBrowserWindowDimensions();
  };

  window.addEventListener('resize', calculate);

  onMounted(calculate);
</script>

<template>
  <main>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>width</th>
          <th>height</th>
          <th>aspect ratio</th>
        </tr>
      </thead>
      <tbody>
        <VRow
          v-if="deviceScreen"
          label="Device screen physical resolution"
          v-bind="deviceScreen" />
        <VRow
          v-if="deviceViewport"
          label="Device screen resolution"
          v-bind="deviceViewport" />
        <VRow
          v-if="browserViewport"
          label="Browser viewport resolution"
          v-bind="browserViewport" />
        <VRow
          v-if="browserWindow"
          label="Browser window size"
          v-bind="browserWindow" />
      </tbody>
    </table>
  </main>
  <footer>
    <div>Made by <a href="https://brachkow.com">Timur Brachkow</a></div>
    <div><a href="https://github.com/brachkow/windowsize">Github</a></div>
  </footer>
</template>

<style lang="scss">
  html {
    font-size: 14px;
    font-family: monospace;
  }

  body {
    margin: 0;
  }

  #app {
    --body-padding: 16px;
    display: grid;
    grid-template-rows: 1fr auto;
    padding: var(--body-padding);
    min-height: calc(100vh - var(--body-padding) * 2);
  }

  @media (prefers-color-scheme: dark) {
    html {
      filter: invert(1);
    }
  }

  th {
    font-weight: normal;
  }

  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead,
  tbody {
    td {
      border-bottom: 1px solid black;
    }
  }

  tfoot {
    td {
      text-align: right;
    }
  }

  td,
  th {
    padding-top: 2px;
    padding-bottom: 2px;
    &:not(:last-child) {
      padding-right: 8px;
    }
    &:not(:first-child) {
      padding-left: 8px;
      text-align: right;
    }
  }

  footer {
    display: flex;
    justify-content: space-between;
  }
</style>
