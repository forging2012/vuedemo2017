<template>
  <div class="login">
    <div draggable="true"id="form">
      <div id="draggables"ref="forms">
        <form>
          <div class="title">欢迎登录</div>
          <div class="el-form-item__content">
            <label for="text">
              <div class="el-input">
                <input class="el-input__inner"
                       v-model="informat.userp" type="text"
                       :placeholder="informat.userText" id="text"
                />
                <span class="text"
                      :class="{'textError':informat.userText}"
                >{{userErrors.errorText1}}</span>
              </div>
            </label>
          </div>
          <div class="el-form-item__content">
            <label for="pawd">
              <div class="el-input">
                <input class="el-input__inner" type="password"
                       v-model="informat.upawd"
                       :placeholder="informat.pawdText" id="pawd"/>
                <span class="pawd"
                      :class="{'textError':informat.userText}"
                >{{passwordErrors.errorText}}</span>
              </div>
            </label>
          </div>
          <div class="el-form-item is-error is-required">
            <label for="checkbox" class="labelcheckbox">
      <span class="el-checkbox__input" v-model=" informat.checkList">
        <input type="checkbox" id="checkbox"/>
           <span>记住密码</span>
      </span>
            </label>
          </div>
          <div class="el-form-item">
            <input @click="subOk" id="clickdb" type="button" :value="informat.subStart"class="el-button el-button--primary"/>
          </div>
          <div class="el-form-item padding-link">
            <label class="el-form-item__label">
              <span class="el-checkbox__label">测试用户名:{{informat.tuserp}}</span>
              <span class="el-checkbox__label">测试密码:{{informat.tupawd}}</span>
              <div style="text-align: left">
                {{locadb.err}}
              </div>
            </label>
          </div>
        </form>
      </div>
      <router-view></router-view>
    </div>

  </div>
</template>
<script type="text/ecmascript-6">
  import Jquery from 'jquery'
  export default{
    name:'Login',
    data(){
      return{
        //界面组
        informat:{
          userp:'admin',
          upawd:'123456',
          errorText:'用户名错误',
          errorPawd:'密码错误',
          userText:'请输入用户名',
          pawdText:'请输入密码',
          subStart:'登录',
          tuserp:'admin',
          tupawd:'123456',
          checkList:[]

        },
        locadb:{
          err:''
        },
        //拖动元素
        flag:false,
      }
    },
    computed: {

      userErrors(){
        let  errorText1,start1
        let uperp=this.informat.userp;
        if(uperp==''){
          start1=false
          errorText1=''
        }else if(uperp!='admin'){
          start1=false
          errorText1='用户名不正确'
        }
        else{
          start1=true;
          errorText1=''
        }
        if(! this.userFlag){
          start1=true;
          this.userFlag=true
        }
        return{
          start1,
          errorText1
        }
      },
      passwordErrors(){
        let  errorText,start
        let upawd=this.informat.upawd;
        if(upawd==''){
          start=false
          errorText=''

        }else if(upawd!='123456'){
          start=false
          errorText='密码不对呀，你在干什么!'
        }
        else{
          start=true
          errorText=''
        }
        if(!this.passwordFlag){
          start=true;
          this.passwordFlag=true
        }
        return{
          start:start,
          errorText:errorText
        }
      }
    },
    components:{

    },
    methods:{
      subOk(){
        if(this.informat.userp=='admin'&& this.informat.upawd=='123456'){
          this.$router.push({path:'/'})
        }else{
          alert('error')
        }
      },

    },
    props:[],
  }

  window.onload=function () {
    class Storage {
      constructor() {
        //初始化
        this.user = document.getElementById('text')
        this.pawd = document.getElementById('pawd')
        this.clickdb = document.getElementById('clickdb')
      };

      onclicked() {

        //添加到表单
        var clickdb = this.clickdb;
        var user = this.user;
        var pawd = this.pawd;
        clickdb.onclick = function () {
          localStorage.setItem('user', user.value)
          localStorage.setItem('pawd', pawd.value)

        }
        Jquery('#checkbox').click(function () {
          if (Jquery(this).is(':checked') == true) {
            localStorage.setItem('checked', true)

          }
        })

      };

      getItemsdb() {
        //读取到表单
        let key = {
          user: 'user',
          pawd: 'pawd',
        }
        var user = this.user;
        var pawd = this.pawd;
        user.value = localStorage.getItem(key['user']);
        pawd.value = localStorage.getItem(key['pawd']);
        if (localStorage.checked == 'true') {

          Jquery('#checkbox').attr("checked", "checked")

        }
      };
    }

    var storage = new Storage();
    storage.getItemsdb();
    storage.onclicked();
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .login{
    position: relative;
    top: 0;
    bottom: 0;
    width: 100%;
  }
  form{
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin: 180px auto;
    width:360px;
    padding: 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .el-form-item__content{
    height 65px
  }
  .title{
    margin: 0px auto 20px;
    text-align: center;
    color: #505458;
    margin-top: -17px;
    background: #f7f7f7;
    line-height: 40px;
    font-weight:bold;
    font-size 26px
  }

  .el-form-item{
    width: 100%;
  }
  .el-button--primary{
    width: inherit;
  }
  .padding-link{
    border-top:1px solid #ededed;
  }

  .el-input span{
    float: right;
  }
  .textError{
    color: red
  }
  .labelcheckbox{
    display block;
    text-align left
  }
</style>
