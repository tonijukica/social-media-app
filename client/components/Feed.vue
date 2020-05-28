<template>
  <div>
    <div class="posts">
      <post-box
        v-for="post in posts"
        :key="post.id"
        :text="post.postText"
        :title="post.title"
      />
    </div>
  </div>
</template>

<script>
import PostBox from '@/components/post/PostBox';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'feed',
  components: {
    'post-box': PostBox
  },
  computed: {
    ...mapGetters({
      posts: 'getPosts'
    }),
  },
  methods: {
    ...mapActions(['fetchPosts'])
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
