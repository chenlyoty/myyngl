import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import echarts from './echarts';

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
createApp(App).config.globalProperties.$echarts = echarts;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore











createApp(App).use(router).use(ElementPlus).mount('#app')


