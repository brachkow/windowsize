<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  interface Dimensions {
    width: number;
    height: number;
  }

  const deviceScreen = ref<Dimensions>();
  const deviceViewport = ref<Dimensions>();
  const browserViewport = ref<Dimensions>();
  const browserWindow = ref<Dimensions>();

  const calculate = () => {
    deviceScreen.value = {
      width: screen.width * window.devicePixelRatio,
      height: screen.height * window.devicePixelRatio,
    };
    deviceViewport.value = { width: screen.width, height: screen.height };
    browserViewport.value = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    browserWindow.value = {
      width: window.outerWidth,
      height: window.outerHeight,
    };
  };

  window.addEventListener('resize', calculate);

  onMounted(calculate);
</script>

<template>
  <table>
    <thead>
      <tr>
        <th></th>
        <th>width</th>
        <th>height</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Device screen physical resolution</td>
        <td>{{ deviceScreen?.width }}</td>
        <td>{{ deviceScreen?.height }}</td>
      </tr>
      <tr>
        <td>Device screen resolution</td>
        <td>{{ deviceViewport?.width }}</td>
        <td>{{ deviceViewport?.height }}</td>
      </tr>
      <tr>
        <td>Browser viewport resolution</td>
        <td>{{ browserViewport?.width }}</td>
        <td>{{ browserViewport?.height }}</td>
      </tr>
      <tr>
        <td>Browser window size</td>
        <td>{{ browserWindow?.width }}</td>
        <td>{{ browserWindow?.height }}</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td colspan="3">all values are in px</td>
      </tr>
    </tfoot>
  </table>
</template>

<style lang="scss">
  html {
    font-size: 14px;
    font-family: monospace;
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
</style>
