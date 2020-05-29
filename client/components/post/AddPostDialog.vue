<template>
  <v-row justify="center">
    <v-dialog
      :value="open"
        persistent
        max-width="600px"
        :activator="open"
      >
      <v-card>
        <v-card-title>
          <span class="headline">Create new post</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field outlined label="Title" v-model="title"></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea outlined height="150px" :v-model="postText" />
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" text @click="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
export default {
  props: {
    open: Boolean
  },
  data: () => ({
    title: '',
    postText: ''
  }),
  methods: {

  }
}
</script>

<style>

</style>
