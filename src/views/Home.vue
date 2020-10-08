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
                  :height="'300px'"></BarChart>
      </div>
    </div>
    <div class="bottom shadow">
      <Table :name="'测试用例'"></Table>
    </div>
  </div>
</template>

<script>
import {progressColor} from "@/common/const";
import {getHomeMultidata} from "@/network/home";
import ProgressBar from "@/components/common/ProgressBar";
import BarChart from "@/components/common/BarChart";
import Table from "@/components/content/Table";

export default {
  name: "Home",
  data() {
    return {
      numOrder: 0,
      numMember: 0,
      colors: progressColor
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
.shadow {
  position: relative;
  padding: 5px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1)
}
</style>