<script setup lang="ts">
  import { onMounted, ref } from 'vue';

  interface Dimensions {
    label: string;
    width: number;
    height: number;
    aspectRatio: string;
  }

  const gcd = (a: number, b: number): number => (b ? gcd(b, a % b) : a);

  const aspectRatio = (width: number, height: number) => {
    const divisor = gcd(width, height);
    return `${width / divisor}:${height / divisor}`;
  };

  const makeDimensions = (
    label: string,
    width: number,
    height: number,
  ): Dimensions => ({
    label,
    width,
    height,
    aspectRatio: aspectRatio(width, height),
  });

  const rows = ref<Dimensions[]>([]);

  const calculate = () => {
    const dpr = window.devicePixelRatio;
    rows.value = [
      makeDimensions(
        'Device screen physical resolution',
        screen.width * dpr,
        screen.height * dpr,
      ),
      makeDimensions('Device screen resolution', screen.width, screen.height),
      makeDimensions(
        'Browser viewport resolution',
        window.innerWidth,
        window.innerHeight,
      ),
      makeDimensions(
        'Browser window size',
        window.outerWidth,
        window.outerHeight,
      ),
    ];
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
        <tr v-for="row in rows" :key="row.label">
          <td>{{ row.label }}</td>
          <td>{{ row.width }}px</td>
          <td>{{ row.height }}px</td>
          <td>{{ row.aspectRatio }}</td>
        </tr>
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
    font-family: 'JetBrains Mono', 'Fira Code', monospace;
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

  th {
    font-weight: normal;
  }

  td {
    vertical-align: top;
  }

  th {
    vertical-align: bottom;
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
