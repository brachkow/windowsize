<script lang="ts" setup>
  interface Props {
    label: string;
    width: number;
    height: number;
    aspectRatio: string;
  }

  defineProps<Props>();
</script>

<template>
  <tr>
    <td>{{ label }}</td>
    <td>{{ width }}px</td>
    <td>{{ height }}px</td>
    <td>{{ aspectRatio }}</td>
  </tr>
</template>
