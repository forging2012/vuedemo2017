<template>
<div>
  <div>搜索</div>
  <el-progress type="circle" :percentage="0"></el-progress>
  <el-progress type="circle" :percentage="25"></el-progress>
  <el-progress type="circle" :percentage="100" status="success"></el-progress>
  <el-progress type="circle" :percentage="50" status="exception"></el-progress>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="0"></el-progress>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="70"></el-progress>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="100" status="success"></el-progress>
  <el-progress :text-inside="true" :stroke-width="18" :percentage="50" status="exception"></el-progress>
</div>
</template>
<script type="text/ecmascript-6">
export default{
    name:'Search',
  data(){
        return{
        }
  },
  computed: {

  },
  components:{

  },
  methods:{

  },
    props:[]
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
 </style>
