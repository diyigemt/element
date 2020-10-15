<template>
  <div>
    <el-form ref="elForm" :model="formData" :rules="rules" size="medium" label-width="100px">
      <el-form-item label="用户名" prop="userName">
        <el-input v-model="formData.userName" placeholder="用户名" :maxlength="20" show-word-limit clearable
                  prefix-icon='el-icon-user' :style="{width: '100%'}"></el-input>
      </el-form-item>
      <el-form-item label="性别" prop="gender">
        <el-select v-model="formData.gender" clearable :style="{width: '100%'}">
          <el-option v-for="(item, index) in genderOptions" :key="index" :label="item.label"
                     :value="item.value" :disabled="item.disabled"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="出生日期" prop="birthDay">
        <el-date-picker v-model="formData.birthDay" format="yyyy-MM-dd" value-format="yyyy-MM-dd"
                        :style="{width: '100%'}"></el-date-picker>
      </el-form-item>
      <el-form-item label="用户积分" prop="points">
        <el-input v-model="formData.points" prefix-icon='el-icon-star-off' :style="{width: '100%'}">
        </el-input>
      </el-form-item>
      <el-form-item label="剩余金额" prop="money">
        <el-input v-model="formData.money" clearable prefix-icon='el-icon-refresh'
                  :style="{width: '100%'}"></el-input>
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="submitForm">提交</el-button>
        <el-button @click="resetForm">重置</el-button>
      </el-form-item>
    </el-form>
    <ConfirmBox v-show="false" @action="submit($event)" ref="confirmBox"></ConfirmBox>
  </div>
</template>
<script>
import {request} from "@/network/request";

import ConfirmBox from "@/components/common/ConfirmBox";
export default {
  name: 'NewMember',
  components: {ConfirmBox},
  props: {},
  data() {
    return {
      formData: {
        userName: "测试",
        gender: 1,
        birthDay: "2000-01-01",
        points: 0,
        money: 0
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
        }]
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
      }]
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  methods: {
    submitForm() {
      this.$refs['elForm'].validate(valid => {
        if (!valid) return
        let content = `确认创建新用户:?
                        用户名: ${this.formData.userName}\n
                        性别: ${this.genderOptions[this.formData.gender - 1].label}\n
                        出生日期: ${this.formData.birthDay}\n
                        用户积分: ${this.formData.points}\n
                        剩余金额: ${this.formData.money}`;
        this.$refs['confirmBox'].open({
          content: content
        });
      })
    },
    submit(state) {
      if (state) {
        // TODO 提交表单
        request({}).then(res => {
          this.$message({
            type: 'info',
            message: '创建成功'
          })
        }).catch(err => {
          let r = (new RegExp('\\d0\\d')).exec(err.toString());
          let message = typeof r !== 'undefined' ? r[0] : '000';
          this.$message({
            type: 'error',
            message: '操作失败! 服务器返回错误代码: '.concat(message)
          })
        })
      }
    },
    resetForm() {
      this.$refs['elForm'].resetFields();
    },
  }
}

</script>
<style>
</style>
