import Vue from 'vue';
import Vuex from 'vuex';

import actions from './actions';
import getters from './getters';
import mutations from './mutations';
import state from './state';

Vue.use(Vuex);

let store = new Vuex.Store({
    actions,mutations,getters,state
});

export default store;