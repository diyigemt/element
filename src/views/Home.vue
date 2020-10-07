<template>
  <div>
    <div class="left basic-progress">
      <ProgressBar type="circle"
                   :percentage="90"
                   :color="colors"
                   :width="250"
                   :stroke-width="20"
                   :text="'本月订单量:3,000'"
                   :font-size="25"></ProgressBar>
      <ProgressBar type="circle"
                   :percentage="60"
                   :color="colors"
                   :text="'注册会员数:3,000'"></ProgressBar>
    </div>
    <div class="right">
      这是右边
    </div>
  </div>
</template>

<script>
import {progressColor} from "@/common/const";
import {getHomeMultidata} from "@/network/home";
import ProgressBar from "@/components/common/ProgressBar";

export default {
  name: "Home",
  data() {
    return {
      colors: progressColor
    }
  },
  components: {
    ProgressBar
  },
  mounted() {
    getHomeMultidata().then((data) => {

    }).catch((err) => {

    })
  }
}
</script>

<style scoped>

</style>