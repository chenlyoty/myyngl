<template>
<!-- 管理首页 -->
  <div class="desc">
    <el-descriptions  :column="3" border title="新一年，新气象；百尺竿头，更进一步">
      <el-descriptions-item label="Type:" >
        {{radio}}</el-descriptions-item>
      <el-descriptions-item label="Start date:">{{Date1}}</el-descriptions-item>
      <el-descriptions-item label="Expect end date:">{{Date2}}</el-descriptions-item>
      <el-descriptions-item label="Suggest:">{{place}}</el-descriptions-item>

      <el-descriptions-item label="Address:">
        {{Sug}}
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
      'https://mms0.baidu.com/it/u=3820182474,3290252771&fm=253&app=138&f=JPEGw=640&h=421',
})

const { circleUrl, squareUrl, sizeList } = toRefs(state)




const place = ref(window.sessionStorage.getItem("CurrentPlaceD"));
const Date1 = ref(window.sessionStorage.getItem("CurrentStart"));
const Sug = ref(window.sessionStorage.getItem("SuggestD"));
const Date2 = ref(window.sessionStorage.getItem("CurrentEnd"));
const radio = ref(window.sessionStorage.getItem("CurrentType"));
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
