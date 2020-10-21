<template>
  <div>
    <PageHeader content="创建新订单" :from-path="fromPath"></PageHeader>
    <el-divider></el-divider>
    <div class="shadow">
      <div style="margin-bottom: 10px; text-align: left;">
        <div class="detail-head" style="margin-right: 10px;">
          搜索用户:
          <el-select
              v-model="selectedUser"
              filterable
              remote
              placeholder="请输入关键词"
              :remote-method="remoteSearch"
              :loading="loading">
            <el-option
                v-for="(item, index) in userList"
                :key="item.id + index"
                :label="item.name"
                :value="item">
            </el-option>
          </el-select>
        </div>
        <div class="detail-head">
          <span class="inline-span">用户名: {{selectedUser.name || ''}}</span>
          <span class="inline-span">联系电话: {{selectedUser.phoneNum || ''}}</span>
          <span class="inline-span">剩余金额: {{selectedUser.money}}</span>
          <span class="inline-span">当前积分: {{selectedUser.points}}</span>
        </div>
      </div>
      <Test></Test>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";
import Test from "@/components/common/Test";
import {request} from "@/network/request";
import {tmpUserList} from "@/config/tmp-config";

export default {
  name: "CreateOrder",
  components: {Test, PageHeader},
  data() {
    return {
      fromPath: '/home',
      selectedUser: '',
      loading: false,
      // userList: []
      userList: tmpUserList
    };
  },
  methods: {
    getGoodsList() {
      //TODO get goods
    },
    remoteSearch(word) {
      if (word !== '') {
        this.loading = true;
        this.userList = tmpUserList.filter(item => {
          return item.name.indexOf(word) > -1;
        });
        request({
          url: ''
        }).then(res => {
          // TODO 按会员名搜索
          this.loading = false;
        }).catch(err => {
          this.$message({
            type: 'error',
            message: `搜索失败! 服务器返回错误代码: ${err}`
          });
          this.loading = false;
        });
      } else {
        this.userList = []
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {vm.fromPath = `${from.path}?id=${from.query.id || ''}`;});
  },
}
</script>

<style scoped>
.detail-head {
  vertical-align: center;
  display: inline-block;
}
.detail-head .inline-span {
  margin-left: 10px;
}
</style>