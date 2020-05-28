import api from '@/api/post';

const fetchPosts = ({ commit }) => {
  return api.posts()
    .then(data => {
      commit('setPosts', data);
    })
}

export default {
  fetchPosts
}
