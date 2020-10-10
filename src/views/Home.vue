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
             :show-index="true"></Table>
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
let tmpPropName = Object.keys(tmpTableData[0]);
let tmpLabelName = ['日期', '姓名', '地址']
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