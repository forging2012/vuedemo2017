<template>
<div class="btn">
  <div class="button">
    <a :class="{'displa_block': countNUms==1}" href="#" class="btn"@click="btnprev(1)">{{prev}}</a>
    <a :class="{'displa_block': countNUms==1}" href="#" class="btn"@click="previouss(countNUms);goPageIndex(countNUms)">{{button.previous}}</a>

    <a  class="btn" href="#" v-for="(num,s) in countNum.totalNumber"
        :id="num"@click="emit(num)"
        :class="[{'active':countNUms==num}]"
    >
      <!--:class="[{'active':countNUms==num}]"为了判断用户当前点击的分页-->
      <strong>{{num}}</strong>

    </a>
    <a :class="{'displa_block': countNUms==countNum.totalNumber}" class="btn" href="#"@click="nexts(countNUms);goPageIndex(countNUms)">{{button.next}}</a>
    <a href="#" class="btn":class="{'displa_block': countNUms==countNum.totalNumber}"@click="btnlast(countNum.totalNumber)">{{lastnum}}</a>
    <select v-model="countNUms"@click="selectCount(countNUms)">
      <option  v-for="num in countNum.totalNumber">{{num}}</option>
    </select>
  </div>
  <div id="Nums">
    <div class="countNUms">
      第{{countNUms}}页
    </div>
    <div class="totalPage">
      总页数:<strong>{{totalPages}}</strong>
    </div>
    <a @click="getTextAjax">点击</a>

  </div>
</div>

</template>
<script type="text/ecmascript-6">

  import axios from 'axios'
export default{
    name:'Pages',
  data(){
        return{
          countNUms:1,
          isactive:false,
          connn:'',
          prev:'首页',
          lastnum:'最后一页',
          spot:{
              //出现省略号
              start:true,
              end:false
          },
         button:{
           previous:'上一页',
           next:'下一页',
         },

          countNum:{
            totalNumber:10,//总数
            pageSize:5,//每次几页
            currentPage:1,//第一页
            totalPage:''
          },
          arrList:[],
        }
  },
  computed: {
    totalPages(){
      // 总页数
      let totalPage=parseInt(Math.ceil(this.countNum.totalNumber/ this.countNum.pageSize))
      return totalPage+'/'+this.countNum.totalNumber
    }
  },
  components:{
  },
  methods:{
    selectCount(num){
      let nums=num==this.countNum.totalNumber?'已经到头了哦':"现在在第"+num+'页'
      console.log(nums)
      return
    },
    btnprev(num){
        //首页
      if(this.countNUms>num){
        this.countNUms=1
      }
    },
    btnlast(num){
        //最后一页
     if(this.countNUms<=num){
      this.countNUms=num
     }
    },
    getTextAjax(){
      axios.get('../../static/api/demo.json').then(
        (res)=>{
          let count=this.countNum.totalNumber;
          let str='';
          for(let i=0;i<res.data.length;i++){
           str+=res.data[i].title
          }
          this.$emit('connnect',str)
        },
        (err)=>{
          console.log(err)
        }
      )

    },
    previouss(num){
        if(num>1){
          this.countNUms--;
          this.$emit('changeNum1',num)
        }else{
          this.countNUms=1
        }
    },
    nexts(num){
      if(num!=this.countNum.totalNumber){
        this.countNUms++
        this.$emit('changeNum1',num)
      }else{
        this.countNUms=num
      }
    },
    goPageIndex(index){
      let totalNumber=this.countNum.totalNumber;
      if(index!=totalNumber){
        totalNumber=index
      }
    },
    emit(index){
        this.countNUms=index
      this.$emit('changeText',index)
    },

  },

    props:{
      conter:{
          type:String,
        default:''
      }
    },

  created:function () {
      let arr=[]

  },

}
</script>
<style scoped>

  a.btn{
    padding: 10px;
    border: 1px solid #ededed;
    border-radius: 3px;
    margin-right: 10px;
    background: #000;
    color:#fff;
    text-decoration: none;
    text-align: center;
  }
  .button {
    margin: 20px 0;
  }
  .btn{
    overflow: hidden;
  }
  #Nums{
  }
  .countNUms{
    display: inline;
  }
  .totalPage{
    display: inline;
    padding-left: 12px;
  }
.active{
  background: red !important;
}
  .displa_block{
    display: none;
  }
</style>
