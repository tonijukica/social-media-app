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
    <v-card-actions>
      <strong
        class="ml-2"
        @click="redirectToUserFeed"
      >
        {{post.user.username}}
      </strong>
      <v-row
        justify="end"
      >
        <v-icon class="mr-8">mdi-heart</v-icon>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'post-box',
  props: {
   post: Object
  },
  methods: {
    redirectToUserFeed() {
      const userId = this.post.userId;
      this.$router.push({ path: `/user/${userId}/feed`});
    }
  }
}
</script>

<style>
.post{
  margin-top: 16px;
}
</style>
