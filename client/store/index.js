import Vue from "vue";
import Vuex from "vuex";
import auth from './auth'
import posts from './posts';
import vuexPersistance from 'vuex-persist';

Vue.use(Vuex);

const modules = {
  auth,
  posts
}
const vuexLocal = new vuexPersistance({
  storage: window.localStorage,
  reducer: (state) => ({
    auth: state.auth
  })
});

export default new Vuex.Store({
  modules,
  plugins: [
    vuexLocal.plugin
  ]
});
