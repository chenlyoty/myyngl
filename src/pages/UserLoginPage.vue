<template>
  <div class="back">

  <div class="head">
    <el-button class="head-icon" type="danger"  circle ><Edit  style="width: 2em; height: 2em;"/></el-button>
    <span class="head-title">CampusInfo-admin</span>

  </div>
  <div class="body">
    <span class="tip">使用账号密码登录</span>
    <el-form
        :model="form"
        label-width="150px"
        class="input"
        size="large"
    >
      <el-form-item class="body-form1" >
        <el-input class="userAccount"
                  v-model="userAccount"
                  placeholder="请输入账号"
                  :prefix-icon="UserFilled"/>
      </el-form-item>
      <el-form-item class="body-form2" >
        <el-input class="userPassword"
                  v-model="userPassword"
                  placeholder="请输入密码"
                  :prefix-icon="Lock"
                  autocomplete="off"/>
      </el-form-item>
      <el-form-item>
        <el-button class="sub" type="primary" @click="submitForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>

<script setup lang="ts">
import {Check, Delete, Edit, Message, Search, Star,UserFilled ,Lock}from '@element-plus/icons-vue';
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import myAxios from "../plugins/myAxios";
import { ElMessage } from 'element-plus';
import {useRoute, useRouter} from "vue-router";

const route = useRoute();
const userAccount = ref ('');
const userPassword = ref ('');

const submitForm = async () => {
  const res = await myAxios.post('/user/login', {
    userAccount: userAccount.value,
    userPassword: userPassword.value,
  })
  /*console.log(res, '用户登录');*/

  if (res.data.code === 0 && res.data) {
    ElMessage({
      message: 'Welcome！\n'+res.data.data.userName,
      type: 'success',
    })

    console.log(res);
    window.sessionStorage.setItem("userAccount",res.data.data.userAccount);
    window.sessionStorage.setItem("gender",res.data.data.gender);
    window.sessionStorage.setItem("userName",res.data.data.userName);

    // 跳转到之前的页面
    const redirectUrl = route.query?.redirect as string ?? '/';
    window.location.href = redirectUrl;
  } else {
    ElMessage({
      message: '登录失败',
      type: 'warning',
    })

  }
};


</script>

<style scoped>
.back{
  position: fixed;
  width: 100%;
  top: 0;
  background-color: rgb(240,242,245);
  height: 100%;
}

.head{
  height: 100px;
  width: 100%;
}

.head-icon{
  height: 50px;
  width: 50px;
  display: block;
  margin-top: 90px;
  margin-left: 35%;
}

.head-title{
  display: block;
  margin-top: -60px;
  margin-left: 40%;
  font-size: 50px;
}

.tip{
  margin-top: 30px;
  display: block;
  margin-left: 45%;
  color: rgb(64,158,255);
}

.input{
  margin-top: 30px;
  height: 150px;
  width: 35%;
  margin-left: 28%;
}

.userAccount{
  font-size: 25px;
  height: 60px;
}

.userPassword{
  margin-top: 20px;
  font-size: 25px;
  height: 60px;
}

.sub{
  width: 30%;
  height: 50PX;
  margin-top: 30px;
  margin-left: 30%;
}

</style>
