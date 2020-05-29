<template>
  <div>
    <div class="posts">
      <v-btn class="mx-auto" @click="toggleDialog">
        New post
      </v-btn>
      <add-dialog :open="dialog"/>
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
import AddPostDialog from '@/components/post/AddPostDialog';
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'feed',
  components: {
    'post-box': PostBox,
    'add-dialog': AddPostDialog
  },
  data: () => ({
    dialog: true
  }),
  computed: {
    ...mapGetters({
      posts: 'getPosts'
    }),
  },
  methods: {
    ...mapActions(['fetchPosts']),
    toggleDialog() {
      console.log('aa');
      this.dialog = !this.dialog;
    }
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
