<template>
<!--  //草莓生长数据-->
  <div class="left-data-content">
    <div class="left-data-content-title">1号产区数据</div>
    <el-descriptions :column="1"  border>
      <el-descriptions-item>
        <template #label>
          <el-icon><SwitchFilled/></el-icon>名称
        </template>
        草莓
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <el-icon><Odometer /></el-icon>生长态势
        </template>
        2.5 cm/天
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <el-icon><WindPower /></el-icon>预计成熟期
        </template>
        15天后
      </el-descriptions-item>
      <el-descriptions-item>
        <template #label>
          <el-icon><Lightning /></el-icon>近期建议
        </template>
        缺失钾肥，施加少量钾肥
      </el-descriptions-item>
    </el-descriptions>
  </div>
<!--  草莓生长分析表-->
  <div class="stopwatch">
  <el-button class="stopwatch-title"  type="warning" plain @click="Resh">
    草莓珠平均结果数
  </el-button>
  <div class="img-stopwatch" ref="chartRef1" :style="{ width: '400px', height: '380px' }"/>
    <span style="font-size: 40px;margin-top: -30px; margin-left: 60px;font-weight: bold;color: #0ee89c;position: absolute">
      可待收成
    </span>
    <el-progress class="success-line" :text-inside="true" :stroke-width="16" :percentage="90" :indeterminate="false" />
</div>
  <div style="margin-left: 600px;width: 5px;height: 780px;margin-top: -800px; background: #797575;"></div>
<!--  结果分布地图-->
  <div class="crack">
    <span style="font-size: 30px; margin-left: 15px; font-weight: bold; color: #0b84e7">
      结果区分布数据
    </span>
    <el-radio-group class="picture-select" v-model="radio1" size="large">
      <el-radio-button label="Radar" @click="Radar"/>
      <el-radio-button label="Histogram" @click="Histogram"/>
      <el-radio-button label="Pie" @click="Pie"/>
    </el-radio-group>

    <div class="crack-spread" ref="chartRef2" :style="{ width: '1000px', height: '700px' }"/>
  </div>
</template>

<script setup lang="ts">
import { ref, computed,defineComponent, onMounted, inject, reactive, getCurrentInstance } from "vue";
import * as echarts from 'echarts'
import { size } from "lodash";
import {Iphone, Cpu, Location, OfficeBuilding, Lightning,WindPower,Bicycle, SwitchFilled, Tickets, Odometer, User,} from '@element-plus/icons-vue'
import { useRouter } from "vue-router";
import routes from "../router/index";
import myAxios from "@/plugins/myAxios";


const router = useRouter();
let chartRef1 = ref<HTMLElement>();
let chartRef2 = ref<HTMLElement>();
let myChartStopwatch = ref();
let myChartRadar = ref();


const radio1 = ref('Radar');

const noneCrack = ref(6);
const smallCraCK = ref(0);
const partCrack = ref(0);
const amountedCrack = ref(0);


//样表参数
let OptionStopwatch = {
  series: [
    {
      type: 'gauge',
      axisLine: {
        lineStyle: {
          width: 30,
          color: [
            [0.3, '#67e0e3'],
            [0.7, '#37a2da'],
            [1, '#fd666d']
          ]
        }
      },
      pointer: {
        itemStyle: {
          color: 'inherit'
        }
      },
      axisTick: {
        distance: -30,
        length: 8,
        lineStyle: {
          color: [
            [0.3, '#67e0e3'],
            [0.7, '#37a2da'],
            [1, '#fd666d']
          ],
          width: 2
        }
      },
      splitLine: {
        distance: -30,
        length: 30,
        lineStyle: {
          color: '#2b5182',
          width: 4
        }
      },
      axisLabel: {
        color: 'inherit',
        distance: 40,
        fontSize: 20,

      },
      detail: {
        valueAnimation: true,
        formatter: '{value}个/株 ',
        fontSize: 20,

        color: 'inherit',
      },
      max: 10,
      data: [
        {

          value: 6.84
        }
      ]
    }
  ]
};
//雷达图参数
const OptionRadar = {

  radar: [
    {
      indicator: [
        { text: '无结果', max: 100 },
        { text: '少量结果', max: 100 },
        { text: '多量结果', max: 100 },
        { text: '花果同结', max: 100 }
      ],
      center: ['55%', '50%'],
      radius: 310
    },
  ],
  gradientColor :"#f5e10f",
  series: [
  {
    type: 'radar',
    tooltip: {
      trigger: 'item'
    },
    areaStyle: {},
    data: [
      {//无，少，多，花果
        value: [10,22,82,80],
      }
    ]
  },
]
};
//柱状图参数
let OptionHistogram = {
  title: [
    {
      text: '结果成熟同时间占比'
    }
  ],
  polar: {
    radius: [30, '80%']
  },
  angleAxis: {
    max: 10,
    startAngle: 75
  },
  radiusAxis: {
    type: 'category',
    data: ['无结果', '少量结果', '多量结果','花果同结']
  },
  tooltip: {},
  series: {
    type: 'bar',
    data: [4, 2, 6, 8],
    coordinateSystem: 'polar',
    label: {
      show: true,
      position: 'middle', // or 'start', 'insideStart', 'end', 'insideEnd'
      formatter: '{b}: {c}'
    }
  }
};
//饼图参数
const OptionPie = {
  title: {
    text: '本区生长状态',
    left: 'center',
    top: 20,
    textStyle: {
      color: 'rgb(103,224,227)'
    }
  },

  tooltip: {
    trigger: 'item'
  },

  visualMap: {
    show: false,
    min: 80,
    max: 600,
    inRange: {
      colorLightness: [0, 1]
    }
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '75%',
      center: ['50%', '50%'],
      data: [
        { value: 200, name: '无果无花株' },
        { value: 100, name: '缺苗区占比' },
        { value: 300, name: '开花期占比' },
        { value: 400, name: '成熟期' },
      ].sort(function (a, b) {
        return a.value - b.value;
      }),
      roseType: 'radius',
      label: {
        color: 'rgb(55, 162, 218)',
      },
      labelLine: {
        lineStyle: {
          color: 'rgb(255,208,75)'
        },
        smooth: 0.2,
        length: 10,
        length2: 20
      },
      itemStyle: {
        color: 'rgb(253,102,109)',

      },

      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx: any) {
        return Math.random() * 200;
      }
    }
  ]
};
//雷达图按钮
const Radar= () => {
  myChartRadar.value.setOption(OptionRadar,true)
  console.log('radar')
};
//柱状图按钮
const Histogram= () => {
  console.log('histogram')
  myChartRadar.value.setOption(OptionHistogram,true)
};
//饼图按钮
const Pie= () => {
  myChartRadar.value.setOption(OptionPie,true)
  console.log('pie')
}

//按钮刷新
const Resh= () => {
  router.go(0);
}
//可待收成
const format = (percentage: number) => (percentage === 100 ? 'Full' : `${percentage}%`)
//前置数据
onMounted(() => {
  //初始化图表
  myChartStopwatch.value = echarts.init(chartRef1.value as HTMLElement)
  myChartRadar.value = echarts.init(chartRef2.value as HTMLElement)
  //数值代入
  myChartStopwatch.value.setOption(OptionStopwatch,true)
  myChartRadar.value.setOption(OptionRadar,true)
  //打印第一个码表数据
  // console.log(chartRef.value);
  const res = myAxios.get('/course/query', {
    params: {
      /*userAccount : userAccount.value,
      userName: userName.value,*/
      /*gender: gender.value,*/
    }
  }).then((res:any) => {
    console.log(res)
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    res.data.data.records.forEach((course: any) => {
      if(course.courseName=="无结果"){
        noneCrack.value = noneCrack.value+1;
      }
      if(course.courseName=="多量结果"){
        amountedCrack.value = amountedCrack.value+1;
      }
      if(course.courseName=="少量结果"){
        smallCraCK.value = smallCraCK.value+1;
      }
      if(course.courseName=="花果同结"){
        partCrack.value = partCrack.value+1;
      }
    });
    console.log(noneCrack.value)
    console.log(amountedCrack.value)
    console.log(partCrack.value)
    let aaa = ref(noneCrack.value);
  })
  // //第二个码表
  // // console.log(chartRef.value);
  // myChart.value = echarts.init(chartRef1.value as HTMLElement)
  // let option1 = {
  //   series: [
  //     {
  //       type: 'gauge',
  //       axisLine: {
  //         lineStyle: {
  //           width: 10,
  //           color: [
  //             [0.3, '#67e0e3'],
  //             [0.7, '#37a2da'],
  //             [1, '#fd666d']
  //           ]
  //         }
  //       },
  //       pointer: {
  //         itemStyle: {
  //           color: 'inherit'
  //         }
  //       },
  //       axisTick: {
  //         distance: 0,
  //         length: 8,
  //         lineStyle: {
  //           color: [
  //             [0.3, '#67e0e3'],
  //             [0.7, '#37a2da'],
  //             [1, '#fd666d']
  //           ],
  //           width: 2
  //         }
  //       },
  //       splitLine: {
  //         distance: 0,
  //         length: 10,
  //         lineStyle: {
  //           color: '#2b5182',
  //           width: 4
  //         }
  //       },
  //       axisLabel: {
  //         color: 'inherit',
  //         distance: 10,
  //         fontSize: 5
  //       },
  //       detail: {
  //         valueAnimation: true,
  //         formatter: '{value} ',
  //         fontSize: 14,
  //         color: 'inherit',
  //       },
  //       data: [
  //         {
  //           value: 13.7,
  //         }
  //       ]
  //     }
  //   ]
  // };
  // myChart.value.setOption(option1)
})
</script>
<style scoped>
.left-data-content{
  background-color: rgb(255,208,75);
  margin-top: 10px;
  margin-left: 250px;
  width: 300px;
  height: 100px;
  position: relative;
  display: block;
}

.left-data-content-title{
  color: rgb(55,162,218);
  height: 50px;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
}

.stopwatch{
  position: relative;
  display: block;
  height: 530px;
  margin-left: 250px;
  margin-top: 130px;
}

.stopwatch-title{
  width: 300px;
  height: 70px;
  font-size: 30px;
}

.img-stopwatch{
  margin-top: -20px;
  margin-left: -40px;
}

.success-line{
  margin-top: 20px;

  width: 300px;
}

.crack{
  height: 720px;
  width: 900px;
  left: 650px;
  position: absolute;
  top: 90px;
}

.picture-select{
  margin-top: -30px;
}
</style>
