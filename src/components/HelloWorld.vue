<template>
  <el-form ref="form" :model="form" label-width="80px" >
    <el-form-item label="账号" prop="username">
      <el-input v-model="form.username" name="username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input type="password" v-model="form.password" name="password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm()">登录</el-button>
      <el-button @click="resetForm()">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { ElForm, ElFormItem, ElInput, ElButton } from 'element-plus'
import 'element-plus'
import axios from 'axios'
export default {
  components: {
    ElForm,
    ElFormItem,
    ElInput,
    ElButton
  },
  data(){
    return {
      form: {
        username: '',
        password: '',
      },
    }
  },

  methods:{

    submitForm(){


        // axios.post('http://example.com/api/', {
        //   data: {
        //     // your data here
        //     'name':this.form.username,
        //     'pwd':this.form.password
        //   }
        // }, {
        //   headers: {
        //     'Content-Type': 'application/json'
        //   }
        // })
      console.log('请求数据:', {
        'username': this.form.username,
        'password': this.form.password
      });
        axios.post('http://127.0.0.1:8000/login_student/',this.form,{
          headers: {
            'Content-Type': 'application/json'
          },withCredentials: true

          }
        ).then(function (response) {
          if(response.data.success==='true'){
            alert('登陆成功');
          }

          console.log(response.data);
        })
            .catch(function (error) {
              console.log(error);
            });


    },
    resetForm(){
      this.$refs.form.resetFields();
    }
  },

}
</script>