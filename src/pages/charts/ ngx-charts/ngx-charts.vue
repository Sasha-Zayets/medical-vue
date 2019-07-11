<template>
    <div>
        <tc-card :title="'Bar'">
            <app-charts :options="barOptions" class="chat-container container-h-400"></app-charts>
        </tc-card>

        <tc-card :title="'Area'">
            <app-charts :options="areaOptions" class="chat-container container-h-400"></app-charts>
        </tc-card>

        <tc-card :title="'Line'">
            <app-charts :options="lineOptions" class="chat-container container-h-400"></app-charts>
        </tc-card>

        <tc-card :title="'Line with points'">
            <app-charts :options="line2Options" class="chat-container container-h-400"></app-charts>
        </tc-card>

        <div class="row">
            <div class="col-12 col-md-6">
                <tc-card :title="'Pie'">
                    <app-charts :options="pieOptions" class="chat-container container-h-400"></app-charts>
                </tc-card>
            </div>

            <div class="col-12 col-md-6">
                <tc-card :title="'Hole pie'">
                    <app-charts :options="pie2Options" class="chat-container container-h-400"></app-charts>
                </tc-card>
            </div>
        </div>

        <tc-alert :beforeIcon="'icofont-chart-line'" :view="'default'">
            More information can be found in <a href="https://github.com/xieziyu/ngx-echarts" target="_blank">official page</a>.
        </tc-alert>
    </div>
</template>
<script>
import tcAlert from '@/components/ui/alert/alert'
import tcCard from '@/components/ui/card/card'
import appCharts from '@/components/echarts/echarts'
export default {
    data: () => ({
        lineOptions: {
            grid: {
                left: 0,
                right: 0,
                bottom: 0,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [350, 933, 1184, 857, 1167, 1330, 1035],
                type: 'line',
                lineStyle: {
                normal: {
                    color: '#ed5564',
                }
                },
            }]
        },

        line2Options: {
            grid: {
                left: 0,
                right: 0,
                bottom: 0,
                containLabel: true
            },
            xAxis: {
                type: 'category',
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'line',
                symbol: 'triangle',
                symbolSize: 20,
                lineStyle: {
                normal: {
                    color: '#64B5F6',
                    width: 4,
                    type: 'dashed'
                }
                },
                itemStyle: {
                normal: {
                    borderWidth: 2,
                    borderColor: '#336cfb',
                    color: '#64B5F6'
                }
                }
            }]
        },
        pieOptions: {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            grid: {
                left: 0,
                right: 0,
                bottom: 0,
                containLabel: true
            },
            series: [
                {
                name: 'Counters',
                type: 'pie',
                radius: '55%',
                center: ['50%', '50%'],
                data: [
                    { value: 335, name: 'C-1' },
                    { value: 310, name: 'C-2' },
                    { value: 274, name: 'C-3' },
                    { value: 235, name: 'C-4' },
                    { value: 400, name: 'C-5' }
                ].sort(function (a, b) { return a.value - b.value; }),
                roseType: 'radius',
                label: {
                    normal: {
                    textStyle: {
                        color: 'rgba(0, 0, 0, 0.3)'
                    }
                    }
                },
                labelLine: {
                    normal: {
                    lineStyle: {
                        color: 'rgba(0, 0, 0, 0.3)'
                    },
                    smooth: 0.2,
                    length: 10,
                    length2: 20
                    }
                },
                itemStyle: {
                    normal: {
                    color: '#c23531',
                    shadowBlur: 200,
                    shadowColor: 'rgba(0,0,0,0.05)'
                    }
                },
                animationType: 'scale',
                animationEasing: 'elasticOut',
                animationDelay: function (idx) {
                    return Math.random() * 200;
                }
                }
            ]
        },
        pie2Options: {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                x: 'center',
                y: 'bottom',
                data: ['Ex.1', 'Ex.2', 'Ex.3', 'Ex.4', 'Ex.5', 'Ex.6', 'Ex.7', 'Ex.8']
            },
            grid: {
                left: 0,
                right: 0,
                bottom: 0,
                containLabel: true
            },
            series: [
                {
                name: 'area',
                type: 'pie',
                radius: [30, 110],
                roseType: 'area',
                data: [
                    { value: 10, name: 'Ex.1' },
                    { value: 5, name: 'Ex.2' },
                    { value: 15, name: 'Ex.3' },
                    { value: 25, name: 'Ex.4' },
                    { value: 20, name: 'Ex.5' },
                    { value: 35, name: 'Ex.6' },
                    { value: 30, name: 'Ex.7' },
                    { value: 40, name: 'Ex.8' }
                ]
                }
            ]
        },
        areaOptions: {
            color: ['#b7ce63', '#e9e165', '#64B5F6', '#ed5564', '#336cfb'],
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                type: 'cross'
                }
            },
            legend: {
                data: ['X-1', 'X-2', 'X-3', 'X-4', 'X-5']
            },
            grid: {
                left: 0,
                right: 0,
                bottom: 0,
                containLabel: true
            },
            xAxis: [
                {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
                }
            ],
            yAxis: [
                {
                type: 'value'
                }
            ],
            series: [
                {
                name: 'X-1',
                type: 'line',
                stack: 'counts',
                areaStyle: { normal: {} },
                data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                name: 'X-2',
                type: 'line',
                stack: 'counts',
                areaStyle: { normal: {} },
                data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                name: 'X-3',
                type: 'line',
                stack: 'counts',
                areaStyle: { normal: {} },
                data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                name: 'X-4',
                type: 'line',
                stack: 'counts',
                areaStyle: { normal: {} },
                data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                name: 'X-5',
                type: 'line',
                stack: 'counts',
                label: {
                    normal: {
                    show: true,
                    position: 'top'
                    }
                },
                areaStyle: { normal: {} },
                data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
            }
    }),
    components: {
        tcCard,
        tcAlert,
        appCharts
    }
}
</script>
<style lang="scss" scoped>
.demo-chart {
  height: 400px;
}

</style>