<template>
  <div>
    <div class="system">
      <header>
        <div class="left">
          <div class="top">
            <div class="top-sub">
              <div class="left_">
            <span class="img"@click="goLogin" ref="goLogins">
            <img src="./assets/logo.png">
          </span>
              </div>
              <div class="right">
                <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              帮助
            </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">
                      <a href="http://cn.vuejs.org/"target="_self">vue文档</a>
                    </el-dropdown-item>
                    <el-dropdown-item command="b">
                      <a href="http://element.eleme.io/#/zh-CN/"target="_self">
                        element Ui
                      </a>

                    </el-dropdown-item>
                    <el-dropdown-item command="c">
                      <a href="https://router.vuejs.org/" target="_self">
                        router
                      </a>

                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              在线咨询
            </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">
                      <span @click="alertTip">客户</span>

                    </el-dropdown-item>
                    <el-dropdown-item command="b">
                      <span @click="alertTip">QQ</span>
                    </el-dropdown-item>
                    <el-dropdown-item command="c">
                      <span @click="alertTip">微信</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              社区
            </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">
                      <a href="https://forum.vuejs.org/"target="_self">官方论坛</a>

                    </el-dropdown-item>
                    <el-dropdown-item command="b">
                      <a href="https://github.com/mhxy13867806343" target="_self">友情链接</a>

                    </el-dropdown-item>
                    <el-dropdown-item command="c">
                      <a href="https://github.com/mhxy13867806343" target="_self">提交bug</a>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              历史
            </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">
                      <router-link :to="{path:'/campaign/Official'}">
                        官方活动
                      </router-link>

                    </el-dropdown-item>
                    <el-dropdown-item command="b">
                      <router-link :to="{path:'/campaign/region'}">
                        区域活动
                      </router-link>

                    </el-dropdown-item>
                    <el-dropdown-item command="c">
                      <router-link :to="{path:'/campaign/Submit'}">
                        提交建议
                      </router-link>

                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <el-dropdown @command="handleCommand">
            <span class="el-dropdown-link">
              我
            </span>
                  <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item command="a">
                      <router-link :to="{path:'/User'}">个人中心</router-link>
                    </el-dropdown-item>
                    <el-dropdown-item command="b">
                     设置
                    </el-dropdown-item>
                    <el-dropdown-item command="c">
                   <span @click="gotoLoing">退出</span>
                    </el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
              </div>
            </div>
          </div>
          <el-row class="tac">
            <el-col :span="8">
              <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
                <el-menu-item index="1">
                  <i class="el-icon-menu"></i>
                  <router-link :to="{path:'/Home'}">首页</router-link>
                </el-menu-item>
                <el-submenu index="2">
                  <template slot="title"><i class="el-icon-message"></i>作业</template>
                  <el-menu-item-group>
                    <template slot="title">管理员</template>
                    <el-menu-item index="1-1">
                      <router-link :to="{path:'/Administrators/Table'}">表格</router-link>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                      <router-link :to="{path:'/Boss/Search'}">搜索</router-link>
                    </el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="老板">
                    <el-menu-item index="1-3">
                      <router-link :to="{path:'/Boss/Mail'}">
                        表格
                      </router-link>
                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                  <template slot="title"><i class="el-icon-message"></i>邮件</template>
                  <el-menu-item-group>
                    <template slot="title">
                        邮箱
                    </template>
                    <el-menu-item index="1-1">
                      <router-link :to="{path:'/Administrators/Mail'}">
                      发邮件
                    </router-link>
                    </el-menu-item>
                    <el-menu-item index="1-2">
                      <router-link :to="{path:'/Boss/Table'}">
                        收邮件
                      </router-link>

                    </el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </el-col>
          </el-row>
          <article>
            <router-view></router-view>
          </article>
        </div>
      </header>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
  export default{
    name:'Pages',
    data(){
      return{
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
    computed: {

    },
    components:{

    },
    methods:{
        alertTip(){
            alert('正在开发中........')
        },
      gotoLoing(){
        this.$router.push({path:'/Login'})
      },
      goLogin(){
        this.$router.push({path:'/Login'})
      },
      handleCommand(command) {

      },
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },

    },
    props:[]
  }
</script>
<style scoped>
  .system{
    text-align: left;
    background: #f2f2f2;
  }
  .el-dropdown{
    padding: 0 20px;
  }
  .system .left .top{
    height: 80px;
    background: #20a0ff;
    box-shadow: 1px 0px 0px 0;
    margin-bottom: 10px;
  }
  .system .left .top .el-row{
    width: 100%
  }
  .system .left .top .top-sub{
    width: 80%;
    overflow: hidden;
    margin: 0 auto;

  }
  .system .left .top .left_{
    width: 100%;
  }
  .system .left .top .right{
    float: right;
  }
  .system .left .top .img{
    width: 5%;
    float: left;
    padding-left: 10px;
    padding-top: 15px;
  }
  .system .left .top .img img{
    width: 100%;
  }
  .system .left .top .title{
    background: #fff;
    height: 100%;
    display: inline-block;
    line-height: 80px;
    font-weight: 800;
    padding: 0 10px;
    padding-left: 3px;
    float: left;
  }
  .system .left .el-row{
    width:10%;
    float: left;
  }
  .system .left  .el-col-8{
    width: 100%;
  }
  .system .left .el-icon-arrow-right{
    float: right;
  }
  header{
    background: #fff;
  }
  .el-dropdown-link{
    line-height: 80px;
  }
  .el-dropdown-menu{
    margin-top: -28px;
    margin-left: 40px;
  }

a{
  text-decoration: none;
}
  article{
    float: left;
    width: 89%;
  }
</style>


