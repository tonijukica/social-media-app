<template>
  <v-card
  class="mx-auto post"
    width="300"
    height="100"
  >
    <v-card-title>
      {{title}}
    </v-card-title>
    <v-card-text>
      {{text}}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'post-box',
  props: {
    id: Number,
    title: String,
    text: String,
    comments: Array
  }
}
</script>

<style>
.post{
  margin-top: 16px;
}
</style>
