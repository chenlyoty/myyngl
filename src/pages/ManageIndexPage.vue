<template>
<!-- 管理首页 -->
  <div class="desc">
    <el-descriptions  :column="3" border title="尊敬的管理员，欢迎使用平台管理系统！">
      <el-descriptions-item label="Admin:" >
        {{radio}}</el-descriptions-item>
      <el-descriptions-item label="Telephone:">{{tell}}</el-descriptions-item>
      <el-descriptions-item label="E-mail:">{{CurrentEmail}}</el-descriptions-item>
      <el-descriptions-item label="CurrentPlace:">{{place}}</el-descriptions-item>

      <el-descriptions-item label="Address:">
        {{Add}}
      </el-descriptions-item>
    </el-descriptions>
  </div>
  <el-row class="demo-avatar demo-basic">
    <div class="Admin-Avatar">
      <el-avatar :size="400" :src="circleUrl" />
    </div>
  </el-row>

</template>

<script setup>
import {onMounted, ref,reactive, toRefs,computed} from "vue";
import {useRoute, useRouter} from "vue-router";
import myAxios from "../plugins/myAxios";
import {
  Iphone,
  Location,
  OfficeBuilding,
  Tickets,
  User,
} from '@element-plus/icons-vue'

const state = reactive({
  circleUrl:
      'https://ts1.cn.mm.bing.net/th/id/R-C.31a79b53d4daa6a832bf083cce18980b?rik=2YvsaRN38OE%2fOg&riu=http%3a%2f%2fwww.kutoo8.com%2fuploads%2fallimg%2f2020_12%2f4-201203144006.jpg&ehk=pYW7YoL9WRbC262QlCdjeZOhQ2zbYkWOv7GX7UEXw2s%3d&risl=&pid=ImgRaw&r=0',

})

const { circleUrl, squareUrl, sizeList } = toRefs(state)


const place = ref(window.sessionStorage.getItem("CurrentPlace"));
const tell = ref(window.sessionStorage.getItem("CurrentTell"));
const Add = ref(window.sessionStorage.getItem("Add"));
const CurrentEmail = ref(window.sessionStorage.getItem("CurrentEmail"));
const radio = ref(window.sessionStorage.getItem("CurrentAdmin"));
console.log(123)
console.log(radio);
</script>

<style scoped>

.Admin-Avatar{
  margin-top: 50px;
  margin-left: 3%;
}

.desc{
  margin-top: 30px;
  margin-left: 18%;
}

</style>
