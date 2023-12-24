import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Login from '../pages/UserLoginPage.vue'
import UserManage from '../pages/UserManagePage.vue'
import UserManages from '../pages/UserManagePages.vue'
import ManageIndexs from '../pages/ManageIndexPage.vue'
import ManageIndex from '../pages/ManageIndexPages.vue'
import Index from '../layouts/LayoutPage.vue'
import CrackManage from '../pages/CrackManage.vue'
import CrackData from '../pages/CrackData.vue'
import CurrentCrack from '../pages/CurrentCrack.vue'
import RobotManage from '../pages/RobotManage.vue'
import RobotRecord from '../pages/RobotRecord.vue'
import CrackRecord from '../pages/CrackRecord.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'index',
    component: Index,
    children: [
      {path: '/', name: 'index', component: ManageIndex},
      {path: '/SI', name: 'index1', component: ManageIndexs},
      {path: '/manage/user', name: 'user', component: UserManage},
      {path: '/manage/user/s', name: 'users', component: UserManages},
      {path: '/manage/crack', name: 'crack', component: CrackManage},
      {path: '/manage/robot', name: 'robot', component: RobotManage},
      {path: '/manage/data', name: 'data', component: CrackData},
      {path: '/manage/current', name: 'current', component: CurrentCrack},
      {path: '/manage/RobotRecord', name: 'RobotRecord', component: RobotRecord},
      {path: '/manage/CrackRecord', name: 'CrackRecord', component: CrackRecord},
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
