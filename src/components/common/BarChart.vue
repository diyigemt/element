<template>
  <div id="main" :style="{width: width,height: height}"></div>
</template>

<script>
import echarts from 'echarts/lib/echarts'
import barChartConfig from '@/config/echarts/barChart-config'
// TODO delete
let chartData = [5, 20, 15];
export default {
  name: "BarChart",
  props: {
    width: {
      type: String,
      default: '200px'
    },
    height: {
      type: String,
      default: '300px'
    },
    type: {
      type: String,
      default: 'vertical',
      validator: val => ['vertical', 'horizontal'].indexOf(val) > -1
    },
    title: {
      type: String,
      default: ''
    },
    label: {
      type: Array,
      default: () => []
    },
    labelData: {
      type: Array,
      default: () => []
    },
    hoverName: {
      type: String,
      default: ''
    },
    barWidth: {
      type: String,
      default: '60%'
    },
    colors: {
      type: Function,
      default: (params) => {
        let s = ["#c12e34", "#e6b600", "#0098d9", "#2b821d", "#005eaa", "#339ca8", "#cda819", "#32a487"]
        return s[params.dataIndex];
      }
    },
    option: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    width(val) {
      if (this.chart !== undefined) {
        this.chart.resize();
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.chart = echarts.init(document.getElementById('main'));
      let option;
      if (this.option === undefined) {
        option = barChartConfig;
        option.series[0].data = this.labelData;
        option.legend.data = this.labelData;
        option.series[0].data = chartData; //TODO delete
        option.title.text = this.title;
        option.series[0].barWidth = this.barWidth;
        option.series[0].itemStyle.normal.color = this.colors;
        option.series[0].name = this.hoverName;
        if (this.type === 'vertical') {
          option.xAxis.data = this.label;
          option.xAxis.data = chartData; //TODO delete
          option.xAxis.type = 'category';
          option.yAxis.type = 'value';
        } else {
          option.yAxis.data = this.label;
          option.yAxis.data = chartData; //TODO delete
          option.xAxis.type = 'value';
          option.yAxis.type = 'category';
        }
      } else {
        option = this.option;
      }
      this.chart.setOption(option);
    })
  }
}
</script>

<style scoped>

</style>