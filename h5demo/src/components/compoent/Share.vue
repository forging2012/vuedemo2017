<template>
    <div class="share">
      <template class="shareList" v-for="(item,index) in shareList.list">
        <div class="share-name">
          <h3>{{item.title}}</h3>
          <ul>
            <li v-for="item in item.net">
              <a :href="item.url">
                <span class="adder">地址:<strong>{{item.name}}</strong></span>
                <span class="pawd">密码:<strong>{{item.pawd}}</strong></span>
              </a>
            </li>
            <div  style="clear: both"></div>
          </ul>
        </div>
      </template>
      <div class="online-resources">
        <h3>在线资源</h3>
        <div class="entrylist" v-for="(item,index) in netShare.entrylist">
          <a :href="item.originalUrl":title="item.content" v-text="item.content">

          </a>
        </div>
        <div style="clear: both">
        </div>
      </div>
    </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios'
    export default {
      name:'Share',
      data(){
        return{
          netShare:[],
          shareList:{
            list:[
              {
                title:'前端教程',
                net:[
                  {
                    name:'vue2_x.js',
                    url:' https://pan.baidu.com/s/1cD7dlO',
                    pawd:'8pg5'
                  },{
                    name:'vue2.js',
                    url:'https://pan.baidu.com/s/1skH5YH3',
                    pawd:'uwz7'
                  },{
                    name:'webpack',
                    url:'https://pan.baidu.com/s/1slHMo9J',
                    pawd:'zafr'
                  }
                ]
              },
              {
                title:'后台教程',
                net:[
                  {
                    name:'python_x',
                    url:' https://pan.baidu.com/s/1jIbxf6m',
                    pawd:'rjp2'
                  },{
                    name:'流畅的Python',
                    url:'https://pan.baidu.com/s/1nuS30TV',
                    pawd:'dnh3'
                  }
                ]
              }
            ]
          }
        }
      },
      methods:{
        getUrl(){
          let url='/api/v1/get_entry_by_rank?src=web&uid=57f8bbcdda2f60004f8bdf79&device_id=1500256339979&token=eyJhY2Nlc3NfdG9rZW4iOiJBN1hsUllBZmpDc1hid0xOIiwicmVmcmVzaF90b2tlbiI6IkdMcWc1Y2pJZnJBWERWWXIiLCJ0b2tlbl90eXBlIjoibWFjIiwiZXhwaXJlX2luIjoyNTkyMDAwfQ%3D%3D&limit=20&category=5562b415e4b00c57d9b94ac8';
          axios.get(url).then((res)=>{
           this.netShare=(res.data.d);

          }).catch((e)=>{
            console.log(e)
          })
        }
      },
      mounted(){
        this.getUrl();
      }
    }
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import "../../comm/css/index.styl"
.share-name
  min-height 130px
  h3
    text-align center
    height 30px
    margin-bottom 4px
  li
    width 50%
    float left
    padding 6px 4px
    box-sizing border-box
    white-space nowrap
.online-resources
  h3
    text-align center
    height 30px
    margin-bottom 4px
  .entrylist
    width 50%
    float left
    line-height 45px
    padding 6px 5px
    box-sizing border-box
    a
      overflow hidden
      text-decoration none
      text-overflow ellipsis
      display -webkit-box
      -webkit-line-clamp 1
      -webkit-box-orient vertical
      word-break break-word
      color #000

</style>
