import api from '@/api/post';

const fetchPosts = ({ commit }) => {
  return api.posts()
    .then(data => {
      commit('setPosts', data);
    })
}

const newPost = ({ commit }, { title, postText }) => {
  return api.makePost({
    title,
    text: postText
  })
    .then(() => {
      commit('addPost', {
        title,
        postText
      })
    });
}

export default {
  fetchPosts,
  newPost
}
