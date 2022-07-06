<template>
  <div>
    <input name="name" id="name" v-model="name" @input="handleNameInput" />
    <input name="furigana" id="furigana" v-model="furigana" />
  </div>
</template>
<script setup lang="ts">
import * as AutoKana from "vanilla-autokana";
import { ref, onMounted } from "vue";

let autokana;
const name = ref("");
const furigana = ref("");

onMounted(() => {
  autokana = AutoKana.bind("#name");
});

function hiraToKata(str) {
  return str.replace(/[\u3041-\u3096]/g, (ch) =>
    String.fromCharCode(ch.charCodeAt(0) + 0x60)
  );
}

const handleNameInput = () => {
  furigana.value = autokana.getFurigana();
  furigana.value = hiraToKata(furigana.value);
};
</script>
