<script lang="ts" setup>
  import type { Dimensions } from '@/types/Dimensions';

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
    <td>{{ width }}</td>
    <td>{{ height }}</td>
    <td>{{ aspectRatio }}</td>
  </tr>
</template>
