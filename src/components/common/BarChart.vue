<template>
  <div class="Echarts">
    <div id="main"></div>
  </div>
</template>

<script>
import echarts from 'echarts/lib/echarts'

export default {
  name: "BarChart",
  props: {
    title: {
      type: String
    },
    type: {
      type: String,
      default: 'vertical',
      validator: val => ['vertical', 'horizontal'].indexOf(val) > -1
    },
    label: Array,
    labelNum: Array,
    hoverName: String,
    colors: {
      type: Array,
      default: ["#c12e34", "#e6b600", "#0098d9", "#2b821d", "#005eaa", "#339ca8", "#cda819", "#32a487"]
    },
    option: {
      type: Object,
      default: ''
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    this.$nextTick(() => {
      let chart = echarts.init(document.getElementById('main'));
      let charData = [5, 20, 15];
      let option = '';
      if (this.option === '') {
        option = {
          title: {text: '这是标题'},
          tooltip: {},
          xAxis: {
            data: ['类别1', '类别2', '类别3']
          },
          yAxis: {},
          series: [{
            name: '销量',
            type: 'bar',
            itemStyle: {
              normal: {
                color: (params) => {
                  let colors = this.colors;
                  let sortData = charData.sort((a, b) => a - b);
                  let index = sortData.indexOf(params.data);
                  return colors[index];
                }
              }
            },
            data: charData
          }]
        }
      } else {
        
      }
      chart.setOption(option)
    })
  }
}
</script>

<style scoped>
#main {
  width: 400px;
  height: 600px;
}
</style>