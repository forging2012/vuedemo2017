<template>
  <div id="test">

    <div id="top">
            <span style="float:right;">
                <el-button type="text" @click="add" style="color:white">添加</el-button>
                <el-button type="text" @click="deletenames" style="color:white">批量删除</el-button>
            </span>
    </div>


    <br/>

    <div style="margin-top:15px">
      <el-input placeholder="请输入内容" v-model="criteria" style="padding-bottom:10px;">
        <el-select v-model="select" slot="prepend" placeholder="请选择">
          <el-option label="id" value="1"></el-option>
          <el-option label="name" value="2"></el-option>
        </el-select>
        <el-button slot="append" icon="search" v-on:click="search"></el-button>
      </el-input>

      <el-table
        ref="testTable"
        :data="tableData"
        style="width:100%"
        border
        :default-sort = "{prop: 'id', order: 'ascending'}"
        @selection-change="handleSelectionChange"
        @row-click="handleclick"
        :row-class-name = "tableRowClassName"
      >
        <el-table-column
          type="selection"
        >
        </el-table-column>
        <el-table-column
          prop="id"
          label="Id"
          sortable
          show-overflow-tooltip>
        </el-table-column>
        <el-table-column
          prop="name"
          label="姓名"
          sortable>
        </el-table-column>
        <el-table-column label="操作">
          <template scope="scope">
            <el-button
              size="small"
              type="primary"
              @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="small"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>

      <div align="center">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pagesize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="totalCount">
        </el-pagination>
      </div>
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import axios from 'axios'
export default{
    name:'Mail',
  data(){
        return {
          //表格当前页数据
    tableData:[{
      id: '1',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }, {
      id: '2',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1517 弄'
    }, {
      id: '3',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄'
    }, {
      id: '4',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    },{
      id: '5',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    }],

      //多选数组
      multipleSelection: [],

      //请求的URL
      url:'newstu/querystudentbypage',

      //搜索条件
      criteria: '',

      //下拉菜单选项
      select: '',

      //默认每页数据量
      pagesize: 10,

      //默认高亮行数据id
      highlightId: -1,

      //当前页码
      currentPage: 1,

      //查询的页码
      start: 1,

      //默认数据总数
      totalCount: 1000,
        }
  },
  computed: {

  },
  components:{

  },
  methods:{
    tableRowClassName(row, index) {
      if (index === 1) {
        return 'info-row';
      } else if (index === 3) {
        return 'positive-row';
      }
      return '';
    },
    //从服务器读取数据
    loadData: function(criteria, pageNum, pageSize){

     axios.get(this.url).then(function(res){
//        this.tableData = res.data.pagestudentdata;
//        this.totalCount = res.data.number;
       console.log(res)
      },function(){
        console.log('failed');
      });
    },

    //多选响应
    handleSelectionChange: function(val) {
      this.multipleSelection = val;
    },

    //点击行响应
    handleclick: function(row, event, column){
      this.highlightId = row.id;
    },

    //编辑
    handleEdit: function(index, row) {
      this.$prompt('请输入新名称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        if(value==''||value==null)
          return;
        this.$http.post('newstu/update',{"id":row.id,"name":value},{emulateJSON: true}).then(function(res){
          this.loadData(this.criteria, this.currentPage, this.pagesize);
        },function(){
          console.log('failed');
        });
      }).catch(() => {

      });
    },


    //单行删除
    handleDelete: function(index, row) {
      var array = [];
      array.push(row.id);
      this.$http.post('newstu/delete',{"array":array},{emulateJSON: true}).then(function(res){
        this.loadData(this.criteria, this.currentPage, this.pagesize);
      },function(){
        console.log('failed');
      });
    },

    //搜索
    search: function(){
      this.loadData(this.criteria, this.currentPage, this.pagesize);
    },

    //添加
    add: function(){
      this.$prompt('请输入名称', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
      }).then(({ value }) => {
        if(value==''||value==null)
          return;
        this.$http.post('newstu/add',{"name":value},{emulateJSON: true}).then(function(res){
          this.loadData(this.criteria, this.currentPage, this.pagesize);
        },function(){
          console.log('failed');
        });
      }).catch(() => {

      });

    },

    //多项删除
    deletenames: function(){
      if(this.multipleSelection.length==0)
        return;
      var array = [];
      this.multipleSelection.forEach((item) => {
        array.push(item.id);
      })
      this.$http.post('newstu/delete',{"array":array},{emulateJSON: true}).then(function(res){
        this.loadData(this.criteria, this.currentPage, this.pagesize);
      },function(){
        console.log('failed');
      });
    },

    //改变当前点击的行的class，高亮当前行
    tableRowClassName: function(row, index){
      if(row.id == this.highlightId)
      {
        return 'info-row';
      }
    },

    //每页显示数据量变更
    handleSizeChange: function(val) {
      this.pagesize = val;
      this.loadData(this.criteria, this.currentPage, this.pagesize);
    },

    //页码变更
    handleCurrentChange: function(val) {
      this.currentPage = val;
      this.loadData(this.criteria, this.currentPage, this.pagesize);
    },

},
    props:[]
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .el-table .info-row {
    background: #c9e5f5;
  }

  .el-table .positive-row {
    background: #e2f0e4;
  }
 </style>
