<template>
  <v-row align="center">
    <v-col class="posts">
      <div class='text-center'>
        <v-btn class="mx-auto text-center" @click="toggle">
          New post
        </v-btn>
      </div>
      <add-dialog/>
      <post-box
        v-for="post in posts"
        :key="post.id"
        :post="post"
      />
    </v-col>
  </v-row>
</template>

<script>
import PostBox from '@/components/post/PostBox';
import AddPostDialog from '@/components/post/AddPostDialog';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'feed',
  components: {
    'post-box': PostBox,
    'add-dialog': AddPostDialog
  },
  computed: {
    ...mapGetters({
      posts: 'getPosts'
    }),
  },
  methods: {
    ...mapActions(['fetchPosts', 'toggle'])
  },
  async created() {
    await this.fetchPosts();
  },
}
</script>

<style>
.posts{
  margin-top: 20px;
}
.input{
  width: 25%;
}
</style>
