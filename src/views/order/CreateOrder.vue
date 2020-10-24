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
      <div style="text-align: left;">
        <el-form inline>
          <el-form-item label="商品">
            <el-select
                v-model="goodTmp.id"
                filterable
                placeholder="请输入关键词"
                @change="handleChange">
              <el-option
                  v-for="(item, index) in goodsList"
                  :key="item.id + index"
                  :label="item.name"
                  :value="item.id">
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="编码">
            <el-input clearable v-model.number="goodTmp.code"
                      @input="handleInput"
                      @keypress.native.enter="handleEnter"
                      max="12"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button @click.prevent="addGood" type="primary">确认</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div>
        <el-table stripe empty-text="空" :data="orderForm.goods" show-summary :summary-method="getSummaries">
          <el-table-column label="编号" type="index" width="50px" align="center"></el-table-column>
          <el-table-column label="商品">
            <template slot-scope="scope">
              <span>{{goodsList[orderForm.goods[scope.$index].id - 1].name}}</span>
            </template>
          </el-table-column>
          <el-table-column label="编码">
            <template slot-scope="scope">
              <span>{{mapping[orderForm.goods[scope.$index].id]}}</span>
            </template>
          </el-table-column>
          <el-table-column label="单价" width="70px">
            <template slot-scope="scope">
              <span>{{goodsList[orderForm.goods[scope.$index].id - 1].price + '元'}}</span>
            </template>
          </el-table-column>
          <el-table-column label="数量" align="center" width="150px">
            <template slot-scope="scope">
              <el-input-number size="small" v-model.number="orderForm.goods[scope.$index].count"
                               :min="1"></el-input-number>
            </template>
          </el-table-column>
          <el-table-column label="金额" width="100px">
            <template slot-scope="scope">
              <span>{{goodsList[orderForm.goods[scope.$index].id - 1].price * orderForm.goods[scope.$index].count + '元'}}</span>
            </template>
          </el-table-column>
          <el-table-column align="right">
            <template slot-scope="scope">
              <el-button type="danger" @click.prevent="removeGood(orderForm.goods[scope.$index])">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="margin-top: 10px;">
          <el-button type="primary" @click="submitForm()">提交</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";
import {request} from "@/network/request";
import {confirmBox} from "@/common/utils";
import {tmpUserList} from "@/config/tmp-config";
import {tmpGoodsList} from "@/config/tmp-config";

let tmpMapping = []
for (let item of tmpGoodsList) {
  tmpMapping[item.id] = item.code;
}
export default {
  name: "CreateOrder",
  components: {PageHeader},
  data() {
    return {
      fromPath: '/home',
      selectedUser: '',
      loading: false,
      // userList: []
      userList: tmpUserList,
      orderForm: {
        goods: [{
          id: 1,
          key: Date.now(),
          count: 1,
        }]
      },
      goodTmp: {
        id: 1,
        code: 13177421234
      },
      mapping: tmpMapping,
      goodsList: tmpGoodsList
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
    },
    submitForm() {
      //TODO submit
      let content = `确认创建?\n
                     用户名: `;
      confirmBox(this.$createElement, {
        content: content
      }).then(res => {
        request({
          url: ''
        }).then(res => {
          this.$message({
            type: 'info',
            message: '成功'
          });
        }).catch(err => {
          this.$message({
            type: 'error',
            message: `操作失败! 服务器返回错误代码: ${err}`
          });
        })
      }).catch(err => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      })
    },
    resetForm() {
      this.orderForm.goods = [{id: 1, key: Date.now(), count: 1}]
    },
    removeGood(item) {
      let index = this.orderForm.goods.indexOf(item)
      if (index !== -1) {
        this.orderForm.goods.splice(index, 1)
      }
    },
    addGood() {
      this.orderForm.goods.push({
        id: this.goodTmp.id,
        key: Date.now(),
        count: 1
      });
    },
    getSummaries({columns, data}) {
      const value = data.map(item => this.goodsList[item.id - 1].price * item.count).reduce((perv, curr) => perv + curr)
      return ['', '', '', '总价:', value.toString() + '元', ''];
    },
    handleChange() {
      this.goodTmp.code = this.mapping[this.goodTmp.id] || -1;
    },
    handleInput(val) {
      let length = val.toString().length;
      if (length === 11) {
        let num = Number(val);
        for (let item of this.goodsList) {
          if (item.code === num) {
            this.goodTmp.id = item.id;
            break;
          }
        }
      }
    },
    handleEnter() {
      let length = this.goodTmp.code.toString().length;
      if (length === 11) {
        this.addGood();
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