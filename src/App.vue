<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  interface Dimensions {
    width: number;
    height: number;
    aspectRatio: string;
  }

  const deviceScreen = ref<Dimensions>();
  const deviceViewport = ref<Dimensions>();
  const browserViewport = ref<Dimensions>();
  const browserWindow = ref<Dimensions>();

  const gcd = (a: number, b: number): number => {
    if (!b) {
      return a;
    }

    return gcd(b, a % b);
  };

  const aspectRatio = (width: number, height: number) => {
    const divisor = gcd(width, height);
    return `${width / divisor}:${height / divisor}`;
  };

  const getDeviceScreenDimensions = (): Dimensions => {
    let { width, height } = screen;
    const { devicePixelRatio: dpr } = window;

    width = width * dpr;
    height = height * dpr;

    return {
      width,
      height,
      aspectRatio: aspectRatio(width, height),
    };
  };

  const getDeviceViewportDimensions = (): Dimensions => {
    const { width, height } = screen;
    return {
      width,
      height,
      aspectRatio: aspectRatio(width, height),
    };
  };

  const getBrowserViewportDimensions = (): Dimensions => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
      aspectRatio: aspectRatio(width, height),
    };
  };

  const getBrowserWindowDimensions = (): Dimensions => {
    const { outerWidth: width, outerHeight: height } = window;
    return {
      width,
      height,
      aspectRatio: aspectRatio(width, height),
    };
  };

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
</template>

<style lang="scss">
  html {
    font-size: 14px;
    font-family: monospace;
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
</style>
