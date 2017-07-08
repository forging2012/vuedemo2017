<template>
<div class="Index">
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>数据</el-breadcrumb-item>
  </el-breadcrumb>
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="管理员">
      <el-input v-model="formInline.user" placeholder="李XX"></el-input>
    </el-form-item>
    <el-form-item label="今天活动">
      <el-select v-model="formInline.region" placeholder="今天活动">
        <el-option label="今天活动1" value="shanghai"></el-option>
        <el-option label="今天活动2" value="beijing"></el-option>
        <el-option label="今天活动3" value="hangzhou"></el-option>
      </el-select>
    </el-form-item><el-form-item>
    <el-button type="primary" @click="onSubmit">查询</el-button>
  </el-form-item>
  </el-form>
  <el-form :model="ruleForm2" :rules="rules2" ref="ruleForm2" label-width="100px" class="demo-ruleForm">
    <el-form-item label="密码" prop="pass">
      <el-input type="password" v-model="ruleForm2.pass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="确认密码" prop="checkPass">
      <el-input type="password" v-model="ruleForm2.checkPass" auto-complete="off"></el-input>
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input v-model.number="ruleForm2.age"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('ruleForm2')">提交</el-button>
      <el-button @click="resetForm('ruleForm2')">重置</el-button>
    </el-form-item>
  </el-form>
</div>
</template>
<script type="text/ecmascript-6">
export default{
    name:'Home',
  data(){
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('年龄不能为空'));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('请输入数字值'));
        } else {
          if (value < 18) {
            callback(new Error('必须年满18岁'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'));
      } else {
        if (this.ruleForm2.checkPass !== '') {
          this.$refs.ruleForm2.validateField('checkPass');
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请再次输入密码'));
        } else if (value !== this.ruleForm2.pass) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
    }
        return{
          formInline: {
            user: '',
            region: ''
          },
          ruleForm2: {
            pass: '',
            checkPass: '',
            age: ''
          },    rules2: {
            pass: [
              { validator: validatePass, trigger: 'blur' }
            ],
            checkPass: [
              { validator: validatePass2, trigger: 'blur' }
            ],
            age: [
              { validator: checkAge, trigger: 'blur' }
            ]
          }
        }

  },
  computed: {

  },
  components:{

  },
  methods:{
    onSubmit() {
      console.log('submit!');
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }

  },
    props:[]
}
</script>
<style>
  .Index{
    float:left
  }
  .Index .el-breadcrumb{
margin-bottom:20px
  }
 </style>
