<template>
  <!--查询表单-->
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="编号">
      <el-input v-model="id" placeholder="输入编号" />
    </el-form-item>
    <el-form-item label="名称">
      <el-input v-model="userName" placeholder="输入名称" />
    </el-form-item>
    <el-form-item label="状态">
      <el-select v-model="gender" placeholder="选择状态">
        <el-option label="已审核" name="0" value="0"/>
        <el-option label="未审核" name="1" value="1"/>
      </el-select>
    </el-form-item>
    <el-form-item style="margin-left: 10px">
      <el-button type="primary" @click="onSubmit(userAccount.value,gender.value)">查询</el-button>
    </el-form-item>
  </el-form>

  <!--USER信息表格-->
  <el-table
      :data="tableData"
      style="width: 80%"
      stripe="stripe"
      highlight-current-row="highlight-current-row"
      height="700">
    <el-table-column fixed prop="id" label="属性记录编号" width="200" />
    <el-table-column prop="userId" label="场地归属" width="150" />
    <el-table-column prop="tags" label="机器属性" width="150" />
    <el-table-column prop="content" label="当前属性值" width="150" />
    <el-table-column prop="reviewStatus" label="当前状态" width="150" />
    <el-table-column fixed="right" label="操作状态" width="300">
      <template #default>
        <el-button link type="primary" size="small" @click="pass()"
        >预警
        </el-button>
        <el-button link type="primary" size="small" @click="deny()"
        >忽略
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import myAxios from "../plugins/myAxios";
import {requestListUserByPage} from "@/plugins/requests";

const userAccount = ref('');
const userName = ref('');
const gender = ref('');
console.log(userAccount);
const userList = ref([]);
const total = 0;
const tableData = ref([]);
import { ElMessage, ElMessageBox } from 'element-plus'
import type { Action } from 'element-plus'

const pass = () => {
  ElMessageBox.alert('预警命令已发出', '已预警', {
    confirmButtonText: 'OK',
    callback: (action: Action) => {
      ElMessage({
        type: 'info',
        message: `action: ${action}`,
      })
    },
  })
};

const onSubmit =  () => {
  const res = myAxios.get('/user/post/list/page', {
    params: {
      /*userAccount : userAccount.value,
      userName: userName.value,*/
      gender: gender.value,
    }
  }).then((res:any) => {

    console.log(res.data.data.records)
    tableData.value =  res.data.data.records
  })
}
onMounted(async () => {
  const res = myAxios.get('/post/list/page', {
    params: {
      /*userAccount : userAccount.value,
      userName: userName.value,*/
      /*gender: gender.value,*/
    }
  }).then((res:any) => {

    console.log(res.data.data.records)
    tableData.value =  res.data.data.records
  })
})



</script>


<style scoped>
.el-table {
  margin: auto;
  margin-top: 2%;
}
.el-form {
  width: 80%;
  margin-left: 18%;
  margin-top: 2%;
}
</style>
