<template>
    <div>
      <span>
        文章序列id
        文章{{$route.params.newsId}}
        {{abc2}}
      </span>
    </div>
</template>
<script type="text/ecmascript-6">
  import Vue from 'vue'
  var eventBus = new Vue();
    export default {
      name:'article1',
      data(){
        return{
          abc2:''
        }
      },
      methods:{
        addclis(){
          eventBus.$on('articles', function (id) {
            this.abc2=id
            this.abc2='aaa'
          }.bind(this))
        }
      },
      mounted(){
        this.addclis()
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>
