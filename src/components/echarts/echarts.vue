<template>
    <div class="chart" :id="idName">
    </div>
</template>
<script>
import echarts from 'echarts'
export default {
    props: {
        options: {
            type: Object
        },
        idName: {
            type: String
        }
    },
    mounted () {
        const chartBig = echarts.init(document.getElementById(this.idName))
        chartBig.setOption(this.options)
    }
}
</script>