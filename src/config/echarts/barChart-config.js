module.exports = {
  title: {text: '这是标题'},
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  xAxis: {
    type: 'category',
    splitLine : {
      show: false
    },
    data: null
  },
  yAxis: {
    type: 'value',
    splitLine : {
      show: false
    },
    data: null
  },
  series: [{
    name: '默认',
    type: 'bar',
    barWidth: '60%',
    itemStyle: {
      normal: {
        color: (params) => {
          let colors = ["#c12e34",
            "#e6b600",
            "#0098d9",
            "#2b821d",
            "#005eaa",
            "#339ca8",
            "#cda819",
            "#32a487"];
          return colors[params.dataIndex];
        }
      }
    },
    data: null
  }]
}