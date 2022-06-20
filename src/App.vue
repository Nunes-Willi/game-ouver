<script setup>
import CabecarioComp from '@/components/template/CabecarioComp.vue';
import RodapeComp from '@/components/template/RodapeComp.vue';
</script>

<template>
<CabecarioComp />

<main>
  <RouterView />
</main>

<RodapeComp />

</template>
