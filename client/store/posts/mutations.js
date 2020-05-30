const setPosts = (state, posts ) => {
  state.posts = posts;
};

const addPost = (state, post) => {
  state.posts.push(post)
};

const toggleDialog = (state) => {
  state.dialog = !state.dialog;
};

const setError = (state, errMsg) => {
  state.errMsg = errMsg;
};

export default {
  setPosts,
  addPost,
  toggleDialog,
  setError
}
