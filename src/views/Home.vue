<template>
  <div>
    <div class="left basic-progress">
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
      <BarChart></BarChart>
    </div>
  </div>
</template>

<script>
import {progressColor} from "@/common/const";
import {getHomeMultidata} from "@/network/home";
import ProgressBar from "@/components/common/ProgressBar";
import BarChart from "@/components/common/BarChart";

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
    BarChart
  },
  mounted() {
    // TODO
    getHomeMultidata().then((data) => {

    }).catch((err) => {

    })
  }
}
</script>

<style scoped>
.progressbar:last-child{
  margin-left: 10px;
}
</style>