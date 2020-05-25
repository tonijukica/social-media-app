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
import api from '@/api/post';
export default {
  name: 'feed',
  data: () => ({
    posts: []
  }),
  components: {
    'post-box': PostBox
  },
  methods: {
    getPosts() {
      api.posts().then(data => {
        console.log(data)
        this.posts = data;
      });
    }
  },
  mounted() {
    this.getPosts()
  }
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
