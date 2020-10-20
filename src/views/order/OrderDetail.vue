<template>
  <div>
    <PageHeader :content="'查看订单详情'" :from-path="fromPath"></PageHeader>
    <el-divider></el-divider>
    <div class="shadow">
      <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
        <el-form-item label="启用编辑" prop="edit">
          <div style="text-align: left;">
            <el-switch v-model="editEnable"
                       active-color="#13ce66"
                       inactive-color="#ff4949"
                       active-text="启用编辑"
                       inactive-text="关闭编辑">
            </el-switch>
          </div>
        </el-form-item>
        <el-form-item label="创建时间" prop="createTime">
          <el-date-picker :disabled="readonly" v-model="formData.createTime" type="datetime" value-format="yyyy-MM-dd HH:mm:ss"
                          :style="{width: '100%'}" placeholder="请选择创建时间"
                          clearable></el-date-picker>
        </el-form-item>
        <el-form-item label="用户名" prop="userName" required>
          <el-input :readonly="readonly" v-model="formData.userName" placeholder="用户名用户名" :maxlength="20" show-word-limit clearable
                    prefix-icon='el-icon-user' :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item label="金额" prop="money">
          <el-input :readonly="readonly" v-model="formData.money" placeholder="金额" clearable prefix-icon='el-icon-refresh'
                    :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item label="详细信息" prop="detail">
          <el-input :readonly="readonly" v-model="formData.detail" type="textarea" :autosize="{minRows: 4, maxRows: 8}"
                    :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item label="折扣" prop="discount">
          <el-input :readonly="readonly" v-model="formData.discount" clearable :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item label="积分" prop="points">
          <el-input :readonly="readonly" v-model="formData.points" placeholder="积分" readonly clearable
                    prefix-icon='el-icon-shopping-cart-1' :style="{width: '100%'}"></el-input>
        </el-form-item>
        <el-form-item size="large">
          <el-button :disabled="readonly" type="primary" @click="submitForm">提交</el-button>
          <el-button :disabled="readonly" @click="resetForm">重置</el-button>
          <el-button :disabled="readonly" type="danger" @click="handleDelete()">删除订单</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {tmpOrderDetail} from "@/config/tmp-config";
import {confirmBox} from '@/common/utils';
import PageHeader from "@/components/common/PageHeader";
import {request} from "@/network/request";
export default {
  name: "OrderDetail",
  components: {PageHeader},
  data() {
    return {
      fromPath: '',
      orderDetail: tmpOrderDetail,
      id: -1,
      editEnable: false,
      formData: {
        createTime: "2018-11-01 14:55:38",
        userName: "测试",
        money: 0,
        detail: undefined,
        discount: 0,
        points: 0
      },
      formDatas: {
        createTime: "2018-11-01 14:55:38",
        userName: "测试",
        money: 0,
        detail: undefined,
        discount: 0,
        points: 0
      },
      rules: {
        createTime: [],
        userName: [{
          pattern: /^.{1,20}$/,
          message: '请至少输入一个字符!',
          trigger: 'blur'
        }],
        money: [],
        detail: [],
        discount: [{
          pattern: /^[0-9][.]?[0-9]{0,2}$/,
          message: '格式:*.**',
          trigger: 'blur'
        }],
        points: [],
      },
    }
  },
  methods: {
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        // TODO 提交表单
        let content = `确认修改订单信息?\n
                        创建时间: ${this.formDatas.createTime} ==> ${this.formData.createTime}\n
                        用户名: ${this.formDatas.userName} ==> ${this.formDatas.userName}\n
                        金额: ${this.formDatas.money} ==> ${this.formData.money}\n
                        详细信息: ${this.formDatas.detail || '无'} ==> ${this.formData.detail}\n
                        折扣: ${this.formDatas.discount} ==> ${this.formData.discount}\n
                        积分: ${this.formDatas.points} ==> ${this.formData.points}`;
        confirmBox(this.$createElement, {content: content}).then(() => {
          // TODO 提交表单
          request({}).then(res => {
            this.$message({
              type: 'info',
              message: '成功'
            });
          }).catch(err => {
            this.$message({
              type: 'error',
              message: `操作失败! 服务器返回错误代码: ${err}`
            });
          });
        }).catch((err) => {
          this.$message({
            type: 'info',
            message: '已取消'
          });
        });
      });
    },
    handleDelete() {
      this.$confirm('', {
        title: '提示',
        message: `确认删除该订单信息?`,
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = '通信中...';
            //TODO 删除
            request({
              url: ''
            }).then(res => {
              done();
              this.$message({
                type: 'success',
                message: '删除成功'
              });
              // TODO 直接在数据中删除 or 重新请求数据?
            }).catch(err => {
              this.$message({
                type: 'error',
                message: `操作失败! 服务器返回错误代码: ${err}`
              });
              done();
            });
            instance.confirmButtonLoading = false;
          } else {
            done();
          }
        }
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消'
        });
      });
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    }
  },
  computed: {
    readonly() {
      return !this.editEnable;
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {vm.fromPath = `${from.path}?id=${from.query.id || ''}`; vm.id = to.query.id || -1;});
  }
}
</script>

<style scoped>

</style>