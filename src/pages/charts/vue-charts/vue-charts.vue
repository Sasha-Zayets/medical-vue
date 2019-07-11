<template>
    <div class="row">
        <div class="col-12 col-md-6">
            <tc-card :title="'Linear'">
               <app-charts :options="option" idName="Linear" class="chat-container container-h-300"></app-charts>
            </tc-card>
        </div>

        <div class="col-12 col-md-6">
            <tc-card :title="'Bar'">
              <app-charts :options="optionBar" idName="Bar" class="chat-container container-h-300"></app-charts>
            </tc-card>
        </div>

        <div class="col-12 col-md-6">
            <tc-card :title="'Doughnut'">
                <app-charts :options="optionDoughnut" idName="Doughnut" class="chat-container container-h-300"></app-charts>
            </tc-card>
        </div>

        <div class="col-12 col-md-6">
            <tc-card :title="'Radar'">
                <app-charts :options="optionRadar" idName="Radar" class="chat-container container-h-300"></app-charts>
            </tc-card>
        </div>

        <div class="col-12 col-md-6">
            <tc-card :title="'Pie'">
                <app-charts :options="optionPie" idName="Pie" class="chat-container container-h-300"></app-charts>
            </tc-card>
        </div>

        <div class="col-12 col-md-6">
            <tc-card :title="'Polar area'">
                <app-charts :options="optionPolar" idName="Polar" class="chat-container container-h-300"></app-charts>  
            </tc-card>
        </div>
    </div>
</template>
<script>
import tcCard from '@/components/ui/card/card'
import appCharts from '@/components/echarts/echarts'
export default {
    data: () => ({
        option: {
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['Series A','Series B','Series C','Series D','Series F']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['January','February','March','April','May','June','July']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'Name',
                    type:'line',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'Name1',
                    type:'line',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'Name2',
                    type:'line',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'Name3',
                    type:'line',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'Name4',
                    type:'line',
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        },
        optionBar: {
            legend: {},
            tooltip: {},
            dataset: {
                source: [
                    ['product', '2015', '2016', '2017'],
                    ['Matcha Latte', 43.3, 85.8, 93.7],
                    ['Milk Tea', 83.1, 73.4, 55.1],
                    ['Cheese Cocoa', 86.4, 65.2, 82.5],
                    ['Walnut Brownie', 72.4, 53.9, 39.1]
                ]
            },
            xAxis: {type: 'category'},
            yAxis: {},
            // Declare several bar series, each will be mapped
            // to a column of dataset.source by default.
            series: [
                {type: 'bar'},
                {type: 'bar'},
                {type: 'bar'}
            ]
        },
        optionDoughnut: {
            tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data:['Download Sales','In-Store Sales','Mail-Order Sales']
        },
        series: [
            {
                name:'',
                type:'pie',
                radius: ['50%', '70%'],
                avoidLabelOverlap: false,
                label: {
                    normal: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        show: true,
                        textStyle: {
                            fontSize: '16',
                            fontWeight: 'bold'
                        }
                    }
                },
                labelLine: {
                    normal: {
                        show: false
                    }
                },
                data:[
                    {value:335, name:'Download Sales'},
                    {value:310, name:'In-Store Sales'},
                    {value:234, name:'Mail-Order Sales'}
                ]
            }
        ]
        },
        optionRadar: {
            title: {
                text: ''
            },
            tooltip: {},
            legend: {
                data: ['Series A', 'Series B']
            },
            radar: {
                // shape: 'circle',
                name: {
                    textStyle: {
                        color: '#fff',
                        backgroundColor: '#999',
                        borderRadius: 3,
                        padding: [3, 5]
                }
                },
                indicator: [
                { name: 'sales', max: 6500},
                { name: 'Administratio', max: 16000},
                { name: 'Information Techology', max: 30000},
                { name: 'Customer Support', max: 38000},
                { name: 'Development', max: 52000},
                { name: 'Marketing', max: 25000}
                ]
            },
            series: [{
                name: 'Budget vs spending',
                type: 'radar',
                // areaStyle: {normal: {}},
                data : [
                    {
                        value : [4300, 10000, 28000, 35000, 50000, 19000],
                        name : 'Allocated Budget'
                    },
                    {
                        value : [5000, 14000, 28000, 31000, 42000, 21000],
                        name : 'Actual Spending'
                    }
                ]
            }]  
        },
        optionPie: {
        //     backgroundColor: {
        //     image: bgPatternImg,
        //     repeat: 'repeat'
        // },
        title: {
            text: '',
            textStyle: {
                color: '#235894'
            }
        },
        tooltip: {},
        series: [{
            name: 'pie',
            type: 'pie',
            selectedMode: 'single',
            selectedOffset: 30,
            clockwise: true,
            label: {
                normal: {
                    textStyle: {
                        fontSize: 18,
                        color: '#235894'
                    }
                }
            },
            labelLine: {
                normal: {
                    lineStyle: {
                        color: '#235894'
                    }
                }
            },
            data:[
                {value:335, name:'Download Sales'},
                {value:310, name:'In-Store Sales'},
                {value:234, name:'Mail Sales'}
            ]
            }]
        },
        optionPolar: {
            title : {
                text: '',
                subtext: '',
                x:'center'
            },
            tooltip : {
                trigger: 'item',
                formatter: "{a} <br/>{b} : {c} ({d}%)"
            },
            legend: {
                x : 'center',
                y : 'bottom'
            },
            calculable : true,
            series : [
                {
                    name:'pie',
                    type:'pie',
                    radius : [20, 110],
                    center : ['50%', '50%'],
                    roseType : 'radius',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    lableLine: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    data:[
                        {value:10, name:'rose1'},
                        {value:5, name:'rose2'},
                        {value:15, name:'rose3'}
                    ]
                }
            ]
        }
    }),
    components: {
        appCharts,
        tcCard
    }
}
</script>
<style lang="scss" scoped>

</style>
