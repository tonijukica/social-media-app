<template>
  <v-row justify="center">
    <v-dialog
      :value="dialog"
      persistent
      max-width="600px"
    >
    <v-card>
      <v-card-title>
        <span class="headline">Create new post</span>
      </v-card-title>
      <v-card-text>
          <v-row>
            <v-col cols="12">
              <v-text-field outlined label="Title" v-model="title"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea outlined height="150px" v-model="postText" />
            </v-col>
          </v-row>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="close">Close</v-btn>
        <v-btn
          color="blue darken-1"
          text
          @click="submitPost"
          :disabled="(!!!postText || !!!title)"
        >
          Post
        </v-btn>
      </v-card-actions>
    </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
export default {
  data: () => ({
    title: '',
    postText: ''
  }),
  computed: {
    ...mapGetters(['dialog'])
  },
  methods: {
    ...mapActions(['toggle', 'newPost']),
    close() {
      this.title = '';
      this.postText = '';
      this.toggle();
    },
    async submitPost() {
      await this.newPost({
        title: this.title,
        postText: this.postText
      });
      this.toggle();
    }
  }
}
</script>

<style>

</style>
