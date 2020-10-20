<template>
  <div class="top-top">
    <div class="top shadow">
      <div class="left">
        <ProgressBar type="circle"
                     class="progressbar"
                     :percentage="60"
                     :color="colors"
                     :width="250"
                     :stroke-width="25"
                     :text="'注册会员数:' + numMember"
                     :font-size="25"></ProgressBar>
        <ProgressBar type="circle"
                     class="progressbar"
                     :percentage="90"
                     :color="colors"
                     :width="250"
                     :stroke-width="20"
                     :text="'本月订单量:' + numOrder"
                     :font-size="25"></ProgressBar>
      </div>
      <div class="right">
        <BarChart :title="'本月销量'"
                  :type="'horizontal'"
                  :width="'100%'"
                  :height="'300px'"
                  :label="charLabel"
                  :label-data="charLabelData"></BarChart>
      </div>
    </div>
    <div class="bottom shadow">
      <Table name="最近订单"
             :table-data="tableData"
             :prop-name="propName"
             :label-name="labelName"
             :show-index="true" @btnClick="handleClick($event)"></Table>
    </div>
  </div>
</template>

<script>
import {progressColor} from "@/common/const";
import {getHomeMultidata} from "@/network/home";
import ProgressBar from "@/components/common/ProgressBar";
import BarChart from "@/components/common/BarChart";
import Table from "@/components/content/Table";
// TODO delete
import {tmpChartData} from "@/config/tmp-config";
//TODO delete
import {tmpTableData} from "@/config/tmp-config";
let tmpPropName = ['date', 'name', 'detail']
let tmpLabelName = ['日期', '用户名', '详细信息']
export default {
  name: "Home",
  data() {
    return {
      numOrder: 0,
      numMember: 0,
      colors: progressColor,
      charLabel: tmpChartData, //TODO replace
      charLabelData: tmpChartData,
      tableData: tmpTableData,
      propName: tmpPropName,
      labelName: tmpLabelName
    }
  },
  components: {
    ProgressBar,
    BarChart,
    Table
  },
  methods: {
    handleClick(o ,event) {
      //TODO jump to editPage
      this.$router.push({
        name: 'OrderDetail',
        query: {id: o.id}
      })
    },
  },
  mounted() {
    // TODO
    getHomeMultidata().then((data) => {

    }).catch((err) => {

    })
  }
}
</script>

<style scoped lang="scss">
.top-top {
  font-size: 0;
}
.top {
  margin-bottom: 10px;
  .left {
    width: 50%;
    height: 100%;
    text-align: justify;
    display: inline-block;
    vertical-align: middle;
  }
  .right {
    width: 50%;
    height: 100%;
    text-align: right;
    display: inline-block;
    vertical-align: middle;
  }
}
.bottom {

}
.progressbar:last-child{
  margin-top: 10px;
  margin-left: 10px;
}
</style>