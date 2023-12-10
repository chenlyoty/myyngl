<template>
<!--农物生长样例检测-->
  <div class="video" >

    <video controls width="30%" height="250%">
      <source src="../assets/demo123.mp4" type="video/webm">

      <source src="../assets/demo123.mp4" type="video/mp4">

      Download the
      <a href="../assets/demo123.mp4">WEBM</a>
      or
      <a href="../assets/demo123.mp4">MP4</a>
      video.
    </video>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue';
import myAxios from "../plugins/myAxios";
import {requestListUserByPage} from "@/plugins/requests";




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

.video{
  margin-left: 20%;
  margin-top: 30px;
}
</style>
