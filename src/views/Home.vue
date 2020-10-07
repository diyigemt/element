<template>
  <div>
    <div class="left">
      <el-progress type="circle" :format="() => '注册会员数:\n3,000'"
                   :percentage="60"
                   :color="colors"></el-progress>
      <el-progress type="circle" :format="() => '当月订单量:\n3,000'"
                   :percentage="90"
                   :color="colors"
                   :width="250"
                   :stroke-width="20"></el-progress>
    </div>
  </div>
</template>

<script>
import {progressColor} from "@/common/const";
import {getHomeMultidata} from "@/network/home";

export default {
  name: "Home",
  data() {
    return {
      colors: progressColor
    }
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