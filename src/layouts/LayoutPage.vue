<template>
<!--  PageHeader菜单-->
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      background-color="#6464cf"
      text-color="#ddd"
      :ellipsis="false"
      active-text-color="#acd404"
      @select="handleSelect">
    <el-menu-item class="logo" text-color="#acd404">
      <el-icon class="icon-logo"><ChromeFilled/></el-icon>
                     云农管理系统
    </el-menu-item>
    <div class="flex-grow" />
    <el-sub-menu index="1" class="admin">
      <template #title>管理员选择</template>
      <el-menu-item :options="options" index="1-1" @click="ChangeAdminA">Admin-A</el-menu-item>
      <el-menu-item :options="options" index="1-2" @click="ChangeAdminB">Admin-B</el-menu-item>
      <el-menu-item :options="options" index="1-3" @click="ChangeAdminC">Admin-C</el-menu-item>
      </el-sub-menu>
    <el-sub-menu index="2" class="admin">
      <template #title>场地选择</template>
      <el-menu-item :options="options" index="2-1" @click="PlaceA">1号产区</el-menu-item>
      <el-menu-item :options="options" index="2-2" @click="PlaceB">2号产区</el-menu-item>
      <el-menu-item :options="options" index="2-3" @click="PlaceC">3号产区</el-menu-item>
    <el-sub-menu index="3" class="admin">
      <template #title>作物选择</template>
      <el-menu-item :options="options" index="3-1" @click="CropA">草莓</el-menu-item>
      <el-menu-item :options="options" index="3-2" @click="CropB">葡萄</el-menu-item>
      <el-menu-item :options="options" index="3-3" @click="CropC">长叶菜</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
<!--  SideBar菜单-->
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
          router="router"
          default-active="2"
          text-color="#fff"
          active-text-color="#ffd04b"
          background-color="#6464cf"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
      >
        <el-sub-menu index="1">
          <template #title>
            <el-icon class="icon-data"><Management /></el-icon>
            <span class="data">数据业务管理</span>
          </template>
          <el-menu-item index="/" class="control">管理首页</el-menu-item>
          <el-menu-item index="/manage/user" class="control">监测视频回放</el-menu-item>
          <el-menu-item index="/manage/crack" class="control">生长数据管理</el-menu-item>
          <el-menu-item index="/manage/robot" class="control">昆虫密度数据管理</el-menu-item>
          <el-menu-item-group  class="note" title="记录管理">
          <el-sub-menu index="1-4" >
            <template #title >数据预警记录</template>
            <el-menu-item index="/manage/CrackRecord" class="note-alert">妨害预警记录</el-menu-item>
            <el-menu-item index="/manage/RobotRecord" class="note-alert">收获预警记录</el-menu-item>
          </el-sub-menu>
          </el-menu-item-group>
        </el-sub-menu>

        <el-sub-menu index="2">
          <template #title>
            <el-icon class="icon-data"><Management /></el-icon>
            <span class="data">种植规划</span>
          </template>
          <el-menu-item index="/SI" class="control">种植管理首页</el-menu-item>
          <el-menu-item index="/manage/user/s" class="control">监测视频回放</el-menu-item>
          <el-menu-item index="/manage/crack" class="control">生长数据管理</el-menu-item>
          <el-menu-item index="/manage/robot" class="control">昆虫密度数据管理</el-menu-item>
          <el-menu-item-group  class="note" title="记录管理">
            <el-sub-menu index="1-4" >
              <template #title >数据预警记录</template>
              <el-menu-item index="/manage/CrackRecord" class="note-alert">妨害预警记录</el-menu-item>
              <el-menu-item index="/manage/RobotRecord" class="note-alert">收获预警记录</el-menu-item>
            </el-sub-menu>
          </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item index="/manage/data">
          <el-icon class="icon-analysis"><icon-menu /></el-icon>



          <span class="data">数据可视化分析</span>
        </el-menu-item>
        <el-menu-item index="/manage/current" >
          <el-icon class="icon-alert"><Opportunity /></el-icon>
          <span>当前生长态势预警</span>
        </el-menu-item>

      </el-menu>
    </el-col>
  </el-row>
  <router-view></router-view>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
  ChromeFilled,
  Opportunity,
  Management,
} from '@element-plus/icons-vue'
import { ref } from 'vue'
import { useRouter } from "vue-router";
import routes from "../router/index";
const router = useRouter();

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const activeIndex = ref('1')
const handleSelect = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}

const ChangeAdminA = () => {
  let AdminA ="AdminA" ;
  let EmailA ="651165141@126.com" ;
  let TellA = "161616565161" ;
  let AddrA = "南航金城南区1号点"
  window.sessionStorage.setItem("CurrentAdmin", AdminA);
  window.sessionStorage.setItem("CurrentTell", TellA);
  window.sessionStorage.setItem("CurrentEmail", EmailA);
  window.sessionStorage.setItem("Add", AddrA);
  router.go(0);
}
const ChangeAdminB = () => {
  let AdminB ="AdminB" ;
  let EmailB ="1561616511@qq.com" ;
  let TellB = "18641689161" ;
  let AddrB = "中华人民共和国河南省"
  window.sessionStorage.setItem("CurrentAdmin", AdminB);
  window.sessionStorage.setItem("CurrentTell", TellB);
  window.sessionStorage.setItem("CurrentEmail", EmailB);
  window.sessionStorage.setItem("Add", AddrB);
  router.go(0);
}
const ChangeAdminC = () => {
  let AdminC ="AdminC" ;
  let EmailC ="125641165198@163.com" ;
  let TellC = "15614161468416" ;
  let AddrC = "中华人民共和国江苏省"
  window.sessionStorage.setItem("CurrentAdmin", AdminC);
  window.sessionStorage.setItem("CurrentTell", TellC);
  window.sessionStorage.setItem("CurrentEmail", EmailC);
  window.sessionStorage.setItem("Add", AddrC);
  router.go(0);
}

const PlaceA = () => {
  let PlaceA ="1号产区" ;
  window.sessionStorage.setItem("CurrentPlace", PlaceA);
  router.go(0);
}
const PlaceB = () => {
  let PlaceB ="2号产区" ;
  window.sessionStorage.setItem("CurrentPlace", PlaceB);

  router.go(0);
}
const PlaceC = () => {
  let PlaceC ="3号产区" ;
  window.sessionStorage.setItem("CurrentPlace", PlaceC);
  router.go(0);
}



const ChangeAdminD = () => {
  let TypeD ="DdminD" ;
  let StartD ="651165141@126.com" ;
  let EndD = "161616565161" ;
  let SuggestD = "南航金城南区1号点"
  window.sessionStorage.setItem("CurrentType", TypeD);
  window.sessionStorage.setItem("CurrentStart", StartD);
  window.sessionStorage.setItem("CurrentEnd", EndD);
  window.sessionStorage.setItem("Suggest", SuggestD);
  router.go(0);
}
const ChangeAdminE = () => {
  let TypeE ="DdminE" ;
  let StartE ="651165141@126.com" ;
  let EndE = "161616565161" ;
  let SuggestE = "南航金城南区1号点"
  window.sessionStorage.setItem("CurrentType", TypeE);
  window.sessionStorage.setItem("CurrentStart", StartE);
  window.sessionStorage.setItem("CurrentEnd", EndE);
  window.sessionStorage.setItem("Suggest", SuggestE);
  router.go(0);
}
const ChangeAdminF = () => {
  let TypeF ="DdminD" ;
  let StartF ="651165141@126.com" ;
  let EndF = "161616565161" ;
  let SuggestF = "南航金城南区1号点"
  window.sessionStorage.setItem("CurrentType", TypeF);
  window.sessionStorage.setItem("CurrentStart", StartF);
  window.sessionStorage.setItem("CurrentEnd", EndF);
  window.sessionStorage.setItem("Suggest", SuggestF);
  router.go(0);
}

const PlaceE = () => {
  let PlaceE ="1-02号产区" ;
  window.sessionStorage.setItem("CurrentPlace", PlaceE);

  router.go(0);
}

const CropA = () => {
  let TypeA ="草莓" ;
  window.sessionStorage.setItem("CurrentPlace", TypeA);
  router.go(0);
}

const CropB = () => {
  let TypeB ="葡萄" ;
  window.sessionStorage.setItem("CurrentPlace", TypeB);
  router.go(0);
}
const CropC = () => {
  let TypeC ="长叶菜" ;
  window.sessionStorage.setItem("CurrentPlace", TypeC);
  router.go(0);
}
</script>
<style scoped>

.logo{
  width: 230px;
  color: #ffd04b;


  font-size: 25px;
}



.data{
  font-weight: bold;
}






.admin{
  color: black;
  font-weight: bold;
}



.control{
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
}

.note-alert{

}

.el-menu-vertical-demo {
  width: 220px;
  /*min-height: 400px; */
  height: 750px;

}

.tac {
  float: left;
  /*height: 800px;*/
}

.flex-grow {
  flex-grow: 1;

}

</style>
