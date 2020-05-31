import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
  posts: null,
  dialog: false,
  errMsg: ''
};

export default {
  state,
  getters,
  actions,
  mutations
}
