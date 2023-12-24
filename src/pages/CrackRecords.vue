<template>
  <!--农物生长数据管理-->
  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="状况类型">
      <el-input v-model="courseName" placeholder="输入状况" />
    </el-form-item>
    <el-form-item label="记录编号">
      <el-input v-model="id" placeholder="输入记录编号" />
    </el-form-item>
    <el-form-item label="记录时间">
      <el-input v-model="teacher" placeholder="输入记录时间"/>
    </el-form-item>
    <el-form-item style="margin-left: 10px">
      <el-button type="primary" @click="onSubmit(courseName.value,id.value,gender.value)">查询</el-button>
    </el-form-item>
  </el-form>

  <!--USER信息表格-->
  <el-table
      :data="tableData"
      style="width: 80%"
      stripe="stripe"
      highlight-current-row="highlight-current-row"
      height="600">
    <el-table-column fixed prop="id" label="记录编号" width="200" />
    <el-table-column prop="courseName" label="查询名称" width="200" />
    <el-table-column prop="weekday" label="监测日期" width="150" />
    <el-table-column prop="courseOrder" label="监测时间" width="150" />
    <el-table-column prop="courseByTeacher" label="当日管理者" width="150" />
    <el-table-column prop="leaveNum" label="生长均高" width="150" />
    <el-table-column prop="courseLocation" label="检测场地" width="200" />
  </el-table>
  <div class="PageSelect">
    <el-pagination
        background
        layout="prev, pager, next" :total="40"
        @current-change="handleCurrentChange"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import myAxios from "../plugins/myAxios";
import {requestListUserByPage} from "@/plugins/requests";

const courseName = ref('');
const id = ref('');
const gender = ref('');
console.log(courseName);
const userList = ref([]);
const total = 0;
const tableData = ref([])

const onSubmit =  () => {
  if (id.value!) {
    const res = myAxios.get('/course/query', {
      params: {
        gender: gender.value,
      }
    }).then((res: any) => {
      console.log(res.data.data.records)
      tableData.value = res.data.data.records
    })
  }
  if (id.value!) {
    const res = myAxios.get('/course/query', {
      params: {
        gender: gender.value,
      }
    }).then((res: any) => {
      console.log(res.data.data.records)
      tableData.value = res.data.data.records
    })
  }
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
const handleCurrentChange = (val) => {
  console.log(val)
  const res = myAxios.get('/course/query', {
    params: {
      current : val
    }
  }).then((res:any) => {
    console.log(res)
    console.log(res.data.data.records)
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-ignore
    res.data.data.records.forEach(user => {
      // if (user.gender === 1) {
      //   user.gender = '女';
      // }
      // if (user.gender === 0) {
      //   user.gender = '男';
      // }
    })
    tableData.value =  res.data.data.records
  })

};
onMounted(async () => {
  const res = myAxios.get('/course/query', {
    params: {
      /*userAccount : userAccount.value,
      userName: userName.value,*/
      /*gender: gender.value,*/
    }
  }).then((res:any) => {
    console.log(res)
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

.PageSelect{

  margin-left: 20%;

}
</style>
