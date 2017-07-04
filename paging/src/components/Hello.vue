<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!--这边就不使用移动端的方式了-->
    <div class="pagedemo">
      第<strong>{{conter}}</strong>页的相关数据
      <span style="display: block">
        {{conteabc}}
      </span>
    </div>

    <div class="com">
      <my-pages :actives="conter" @changeText="changeTexts" @changeNum1="changeNum2"
      @connnect="connnect">
        <slot></slot>
      </my-pages>
    </div>
    {{conteabc}}
  </div>
</template>

<script type="text/ecmascript-6">
  import Pages from '../components/Pages.vue'

export default {
  name: 'hello',
  data () {
    return {
      msg: '一个简单的分页demo',
      conter:1,
      conteabc:"测试",

    }
  },
  components:{
    MyPages:Pages
  },
  computed:{

  },
  methods:{
    connnect(str){
        this.conteabc=str
    },
      //子组件传递的数据
    changeTexts(index){
        this.conter=index
    },
    changeNum2(index){
      this.conter=index+1
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
  .pagedemo{
    width: 30%;
    height: 100px;
    border:1px solid blue;
    margin: 0 auto;
  }
  .pagedemo strong{

  }
</style>
