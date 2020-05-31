<template>
   <v-row align="center">
    <v-col class="container mx-auto">
      <post-box
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import PostBox from '@/components/post/PostBox'
export default {
  name: 'userfeed',
  components: {
    'post-box': PostBox
  },
  computed: {
    ...mapGetters({
      posts: 'getPosts'
    })
  },
  methods: {
    ...mapActions(['fetchUserPosts']),
  },
  created() {
    const userId = this.$route.params.id;
    this.fetchUserPosts(userId);
  }
}
</script>

<style>
.container{
  margin-top: 20px;
}
</style>
