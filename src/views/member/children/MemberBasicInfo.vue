<template>
  <div>
    <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
      <el-form-item label="启用编辑">
        <div style="text-align: left;">
          <el-switch v-model="editEnable"
                     active-color="#13ce66"
                     inactive-color="#ff4949"
                     active-text="启用编辑"
                     inactive-text="关闭编辑">
          </el-switch>
        </div>
      </el-form-item>
      <el-form-item label="用户名" prop="userName">
        <el-input :readonly="readonly" v-model="formData.userName" placeholder="用户名" :maxlength="20" show-word-limit clearable
          prefix-icon='el-icon-user' :style="{width: '100%'}"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-select :disabled="readonly" v-model="formData.gender" clearable :style="{width: '100%'}">
          <el-option v-for="(item, index) in genderOptions" :key="index" :label="item.label"
            :value="item.value" :disabled="item.disabled"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="出生日期" prop="birthDay">
        <el-date-picker :disabled="readonly" v-model="formData.birthDay" format="yyyy-MM-dd" value-format="yyyy-MM-dd"
          :style="{width: '100%'}"></el-date-picker>
      </el-form-item>
      <el-form-item label="用户积分" prop="points">
        <el-input :readonly="readonly" v-model="formData.points" prefix-icon='el-icon-star-off' :style="{width: '100%'}">
        </el-input>
      </el-form-item>
      <el-form-item label="剩余金额" prop="money">
        <el-input :readonly="readonly" v-model="formData.money" clearable prefix-icon='el-icon-refresh'
          :style="{width: '100%'}"></el-input>
      </el-form-item>
      <el-form-item label="总订单数" prop="orderCount">
        <el-input :readonly="readonly" v-model="formData.orderCount" clearable prefix-icon='el-icon-shopping-cart-1'
          :style="{width: '100%'}"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button :disabled="readonly" type="primary" @click="submitForm">提交</el-button>
        <el-button :disabled="readonly" @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import {request} from "@/network/request";
import {confirmBox} from "@/common/utils";

export default {
  name: 'MemberBasicInfo',
  components: {},
  props: {
    formDatas: {
      type: Object,
      default: () => {return {
        userName: "测试",
        gender: 1,
        birthDay: "2000-01-01",
        points: 0,
        money: 0
      }}
    }
  },
  data() {
    return {
      formData: {
        userName: "测试",
        gender: 1,
        birthDay: "2000-01-01",
        points: 0,
        money: 0,
        orderCount: 0,
      },
      rules: {
        userName: [{
          pattern: /^.{1,20}$/,
          required: true,
          message: '请至少输入一个字符!',
          trigger: 'blur'
        }],
        gender: [{
          required: true,
          message: '请选择性别!',
          trigger: 'blur'
        }],
        birthDay: [],
        points: [{
          pattern: /^\d*$/,
          message: '请输入整数!',
          trigger: 'blur'
        }],
        money: [{
          pattern: /^[-]?\d*[.]?\d{0,2}$/,
          required: true,
          message: '请至少输入0,最多有两位小数!',
          trigger: 'blur'
        }],
        orderCount: [],
      },
      genderOptions: [{
        "label": "男",
        "value": 1
      }, {
        "label": "女",
        "value": 2
      }, {
        "label": "其他",
        "value": 3
      }],
      editEnable: false,
      id: -1
    }
  },
  computed: {
    readonly() {
      return !this.editEnable;
    }
  },
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        // TODO 提交表单
        let content = `确认修改信息? 请仔细检查用户积分及剩余金额!!\n
                        用户名: ${this.formDatas.userName} ==> ${this.formData.userName}\n
                        性别: ${this.genderOptions[this.formDatas.gender - 1].label} ==> ${this.genderOptions[this.formData.gender - 1].label}\n
                        出生日期: ${this.formDatas.birthDay} ==> ${this.formData.birthDay}\n
                        用户积分: ${this.formDatas.points} ==> ${this.formData.points}\n
                        剩余金额: ${this.formDatas.money} ==> ${this.formData.money}`;
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
    resetForm() {
      this.$refs['elForm'].resetFields()
    },
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {vm.id = to.query.id || -1;});
  }
}

</script>
<style>
</style>
