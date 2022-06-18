<template>
  <router-link to="/">Go to Home</router-link>
  <br />
  <router-link to="/cart">Go to Cart</router-link>
  <hr />
  <div>
    <my-container></my-container>
  </div>
</template>

<script setup lang="ts">
import MyContainer from "../components/my/MyContainer.vue";
</script>
