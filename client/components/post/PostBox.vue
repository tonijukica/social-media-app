<template>
  <v-card
    class="mx-auto post"
    width="500"
    height="auto"
  >
    <v-card-title>
      {{post.title}}
    </v-card-title>
    <v-card-text>
      {{post.postText}}
    </v-card-text>
    <v-card-subtitle t>
      <strong>
        {{post.user.username}}
      </strong>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  name: 'post-box',
  props: {
   post: Object
  }
}
</script>

<style>
.post{
  margin-top: 16px;
}
</style>
