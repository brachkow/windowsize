<script setup lang="ts">
  import { onMounted, ref } from 'vue';
  import type { Dimensions } from '@/types';
  import getDeviceScreenDimensions from '@/utils/getDeviceScreenDimensions';
  import getDeviceViewportDimensions from '@/utils/getDeviceViewportDimensions';
  import getBrowserViewportDimensions from '@/utils/getBrowserViewportDimensions';
  import getBrowserWindowDimensions from '@/utils/getBrowserWindowDimensions';

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
        <tr>
          <td>Device screen physical resolution</td>
          <td>{{ deviceScreen?.width }}</td>
          <td>{{ deviceScreen?.height }}</td>
          <td>{{ deviceScreen?.aspectRatio }}</td>
        </tr>
        <tr>
          <td>Device screen resolution</td>
          <td>{{ deviceViewport?.width }}</td>
          <td>{{ deviceViewport?.height }}</td>
          <td>{{ deviceViewport?.aspectRatio }}</td>
        </tr>
        <tr>
          <td>Browser viewport resolution</td>
          <td>{{ browserViewport?.width }}</td>
          <td>{{ browserViewport?.height }}</td>
          <td>{{ browserViewport?.aspectRatio }}</td>
        </tr>
        <tr>
          <td>Browser window size</td>
          <td>{{ browserWindow?.width }}</td>
          <td>{{ browserWindow?.height }}</td>
          <td>{{ browserWindow?.aspectRatio }}</td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="4">all values are in px</td>
        </tr>
      </tfoot>
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
