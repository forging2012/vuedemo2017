/**
 * Created by Administrator on 2017/7/12 0012.
 */
import Vue from 'vue';

import Vuex from 'vuex';
Vue.use(Vuex);
const state={
  url:''
};
const  mutations={
  setUrl(str){
    console.log(str.url)
  },
  edevent(ev){
   console.log(ev.keyCode)
  }
}
export default new Vuex.Store({
state,mutations
})

