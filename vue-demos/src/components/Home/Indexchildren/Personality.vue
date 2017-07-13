<template>
<div>
  <my-column></my-column>
  <p @click="setUrl">
    {{url}}
  </p>

   <span v-for="item in list">
     {{item.title}}
   </span>


</div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios'
  //  子组件
  import Column from '@/components/Home/Personality/Column.vue'

  //vuex
  import store from '../../../../src/vuex/store'
  import{mapState,mapMutations} from 'vuex'
  export default{
    name:'Personality',
  data(){
        return{
            list:[]
        }
  },
  store,
  computed: {
    ...mapState(['url'])
  },
  components:{
    MyColumn:Column
  },
  methods:{
    ...mapMutations(['setUrl','edevent']),

  },

    props:[]
}
function events(e) {
  alert(e.keyCode)
}
window.onload=function () {
  document.onkeydown=function () {

  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
 </style>
