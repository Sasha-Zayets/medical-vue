<template>
  <div class="host">
    <div class="row">
      <div class="col col-12 col-md-6 col-xl-3">
        <tc-card :tcBgColor="'#fbfbfb'" class="animated fadeInUp delay-01s">
          <div class="row align-items-center">
            <div class="col col-5">
              <tc-icon
                :tcColor="'rgba(51,108,251,0.5)'"
                :tcFontSize="48"
                :iconClass="'icofont-first-aid-alt'"
                :padding="0"
              ></tc-icon>
            </div>

            <div class="col col-7">
              <h6 class="mt-0 mb-1">Appointments</h6>
              <div class="count" :tcFontSize="20" :tcColor="'#336cfb'">213</div>
            </div>
          </div>
        </tc-card>
      </div>

      <div class="col col-12 col-md-6 col-xl-3">
        <tc-card :tcBgColor="'#fbfbfb'" class="animated fadeInUp delay-02s">
          <div class="row align-items-center">
            <div class="col col-5">
              <tc-icon
                :tcColor="'rgba(51,108,251,0.5)'"
                :tcFontSize="48"
                :iconClass="'icofont-wheelchair'"
                :padding="0"
              ></tc-icon>
            </div>

            <div class="col col-7">
              <h6 class="mt-0 mb-1 nowrap">New patients</h6>
              <div class="count" :tcFontSize="20" :tcColor="'#336cfb'">104</div>
            </div>
          </div>
        </tc-card>
      </div>

      <div class="col col-12 col-md-6 col-xl-3">
        <tc-card :tcBgColor="'#fbfbfb'" class="animated fadeInUp delay-03s">
          <div class="row align-items-center">
            <div class="col col-5">
              <tc-icon
                :tcColor="'rgba(51,108,251,0.5)'"
                :tcFontSize="48"
                :iconClass="'icofont-blood'"
                :padding="0"
              ></tc-icon>
            </div>

            <div class="col col-7">
              <h6 class="mt-0 mb-1">Operations</h6>
              <div class="count" :tcFontSize="20" :tcColor="'#336cfb'">23</div>
            </div>
          </div>
        </tc-card>
      </div>

      <div class="col col-12 col-md-6 col-xl-3">
        <tc-card :tcBgColor="'#fbfbfb'" class="animated fadeInUp delay-04s">
          <div class="row align-items-center">
            <div class="col col-5">
              <tc-icon
                :tcColor="'rgba(51,108,251,0.5)'"
                :tcFontSize="48"
                :iconClass="'icofont-dollar-true'"
                :padding="0"
              ></tc-icon>
            </div>

            <div class="col col-7">
              <h6 class="mt-0 mb-1 nowrap">Hospital Earning</h6>
              <div class="count" :tcFontSize="20" :tcColor="'#336cfb'">$5238</div>
            </div>
          </div>
        </tc-card>
      </div>
    </div>

    <tc-card :title="'Hospital survey'">
      <app-echarts :options="hsOptions" idName="bigChart" class="chat-container container-h-400" ref=""></app-echarts>
    </tc-card>

    <div class="row">
      <div class="col col-12 col-md-6">
        <tc-card>
          <h4 class="mt-0 mb-1">$25038</h4>
          <p class="mb-0" :tcColor="'#9d9d9d'">Income in current month</p>

          <app-echarts :options="piOptions" idName="oneChart" class="chat-container"></app-echarts>
        </tc-card>
      </div>

      <div class="col col-12 col-md-6">
        <tc-card>
          <h4 class="mt-0 mb-1">$2195</h4>
          <p class="mb-0" :tcColor="'#9d9d9d'">Income in current week</p>

          <app-echarts :options="heOptions" idName="twoChart" class="chat-container"></app-echarts>
        </tc-card>
      </div>

      <div class="col col-12 col-md-4">
        <tc-card :title="'Patients age'">
          <app-echarts :options="paOptions" idName="threeChart" class="chat-container container-h-300"></app-echarts>
        </tc-card>
      </div>

      <div class="col col-12 col-md-4">
        <tc-card :title="'Patients gender'">
          <app-echarts :options="pgOptions" idName="fourChart" class="chat-container container-h-300"></app-echarts>
        </tc-card>
      </div>

      <div class="col col-12 col-md-4">
        <tc-card :title="'Departments'">
          <app-echarts  :options="dOptions" idName="fiveChart" class="chat-container container-h-300"></app-echarts>
        </tc-card>
      </div>
    </div>
  </div>
</template>
<script>
import tcIcon from '@/components/ui/icon/icon'
import tcCard from '@/components/ui/card/card'
import appEcharts from '@/components/echarts/echarts'
export default {
  components: {
    tcIcon,
    tcCard,
    appEcharts
  },
  data: () => ({
    hsOptions: {},
    paOptions: {},
    pgOptions: {},
    dOptions: {},
    piOptions: {},
    heOptions: {},
    appointments: [],
    pieStyle: {}
  }),
  created () {
    this.setHSOptions()
    this.setPAOptions()
    this.setPGOptions()
    this.setDOptions()
    this.setPIOptions()
    this.setHEOptions()
  },
  mounted () {
    // this.pieStyles()
  },
  methods: {
    setHSOptions () {
     this.hsOptions = {
        color: ['#ed5564', '#336cfb'],
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross'
          }
        },
        legend: {
          data: ['Patients 2018', 'Patients 2019']
        },
        grid: {
          left: 30,
          right: 0,
          top: 50,
          bottom: 50
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: '#336cfb'
              }
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return 'Patients ' + params.value
                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                }
              }
            },
            data: ['2019-1', '2019-2', '2019-3', '2019-4', '2019-5', '2019-6', '2019-7', '2019-8', '2019-9', '2019-10', '2019-11', '2019-12']
          },
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true
            },
            axisLine: {
              onZero: false,
              lineStyle: {
                color: '#ed5564'
              }
            },
            axisPointer: {
              label: {
                formatter: function (params) {
                  return 'Patients ' + params.value
                    + (params.seriesData.length ? '：' + params.seriesData[0].data : '');
                }
              }
            },
            data: ['2018-1', '2018-2', '2018-3', '2018-4', '2018-5', '2018-6', '2018-7', '2018-8', '2018-9', '2018-10', '2018-11', '2018-12']
          }
        ],
        yAxis: [
          {
            type: 'value'
          }
        ],
        series: [
          {
            name: 'Patients 2018',
            type: 'line',
            xAxisIndex: 1,
            smooth: true,
            data: [159, 149, 174, 182, 219, 201, 175, 182, 119, 118, 112, 96]
          },
          {
            name: 'Patients 2019',
            type: 'line',
            smooth: true,
            data: [95, 124, 132, 143, 138, 178, 194, 211, 234, 257, 241, 226]
          }
        ]
      }
    },

    setPAOptions() {
      this.paOptions = {
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        },
        tooltip : {
          trigger: 'item',
          formatter: '{b}<br>{c} ({d}%)'
        },
        series: [{
          name: 'pie',
          type: 'pie',
          selectedMode: 'single',
          selectedOffset: 30,
          clockwise: true,
          radius: [60, '90%'],
          label: {
            normal: {
              position: 'inner',
              textStyle: {
                fontSize: 14,
                fontWeight: 700,
                color: '#000'
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: '#336cfb'
              }
            }
          },
          data:[
            { value: 347, name: '0-10' },
            { value: 310, name: '10-20' },
            { value: 234, name: '20-30' },
            { value: 195, name: '30-40' },
            { value: 670, name: '40+' }
          ],
          itemStyle: this.pieStyle
        }]
      }
    },

    setPGOptions() {
      this.pgOptions = {
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        },
        tooltip : {
          trigger: 'item',
          formatter: '{b}<br>{c} ({d}%)'
        },
        series: [{
          name: 'pie',
          type: 'pie',
          selectedMode: 'single',
          selectedOffset: 30,
          clockwise: true,
          radius: [0, '90%'],
          label: {
            normal: {
              position: 'inner',
              textStyle: {
                fontSize: 14,
                fontWeight: 700,
                color: '#000'
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: '#336cfb'
              }
            }
          },
          data:[
            { value: 154, name: 'Female' },
            { value: 173, name: 'Male' }
          ],
          itemStyle: this.pieStyle
        }]
      }
    },

    setDOptions() {
      this.dOptions = {
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        },
        tooltip : {
          trigger: 'item',
          formatter: '{b}<br>{c} ({d}%)'
        },
        series: [{
          name: 'pie',
          type: 'pie',
          radius: [0, '90%'],
          roseType : 'area',
          label: {
            normal: {
              show: false
            }
          },
          data:[
            { value: 115, name: 'Cardiology' },
            { value: 173, name: 'Dentistry' },
            { value: 154, name: 'Laboratory' },
            { value: 180, name: 'Pulmonology' },
            { value: 219, name: 'Gynecology' }
          ],
          itemStyle: this.pieStyle
        }]
      }
    },

    setPIOptions() {
      this.piOptions = {
        color: ['#ed5564'],
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        },
        xAxis: {
          boundaryGap: false,
          type: 'category'
        },
        yAxis: {
          show: false
        },
        series: [
          {
            name: 'Patients 2019',
            type: 'line',
            smooth: true,
            data: [95, 124, 132, 143, 138, 178, 194, 211, 234, 257, 241, 226],
            areaStyle: {}
          }
        ]
      }
    },

    setHEOptions() {
      this.heOptions = {
        color: ['#64B5F6'],
        grid: {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        },
        xAxis: {
          boundaryGap: false,
          type: 'category'
        },
        yAxis: {
          show: false
        },
        series: [
          {
            name: 'Patients 2019',
            type: 'line',
            smooth: true,
            data: [94, 111, 90, 85, 70, 83, 94, 109, 89, 74, 83, 78],
            areaStyle: {}
          }
        ]
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/sass/variables';

.chart-container {
  align-items: center;
  display: flex;
  height: 400px;
  justify-content: center;
  width: 100%;
  @media #{$max767} {
    height: 300px;
  }

  canvas {
    margin: 0 auto;
    max-height: 100%;
    width: auto !important;
  }
}
.host  {
  .amcharts-graph-g2 .amcharts-graph-stroke {
    stroke-dasharray: 3px 3px;
    stroke-linejoin: round;
    stroke-linecap: round;
    animation: am-moving-dashes 1s linear infinite;
  }
  @keyframes am-moving-dashes {
    100% {
      stroke-dashoffset: -31px;
    }
  }

  .lastBullet {
    animation: am-pulsating 1s ease-out infinite;
  }
  @keyframes am-pulsating {
    0% {
      stroke-opacity: 1;
      stroke-width: 0px;
    }
    100% {
      stroke-opacity: 0;
      stroke-width: 50px;
    }
  }

  .amcharts-graph-column-front {
    transition: all .3s .3s ease-out;
  }
  .amcharts-graph-column-front:hover {
    fill: #496375;
    stroke: #496375;
    transition: all .3s ease-out;
  }

  .amcharts-graph-g3 {
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke-dasharray: 500%;
    stroke-dasharray: 0;
    stroke-dashoffset: 0;
    animation: am-draw 40s;
  }
  @keyframes am-draw {
    0% {
      stroke-dashoffset: 500%;
    }
    100% {
      stroke-dashoffset: 0%;
    }
  }
}

</style>
