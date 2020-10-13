<script src="../../router/index.js"></script>
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
  </div>
</template>
<script>
export default {
  name: 'NewMember',
  components: {},
  props: [],
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
        gender: [],
        birthDay: [],
        points: [{
          pattern: /^\d*$/,
          message: '请输入整数!',
          trigger: 'blur'
        }],
        money: [{
          pattern: /^[-]?\d*\.\d{0,2}$/,
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
      }],
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
        // TODO 提交表单
      })
    },
    resetForm() {
      this.$refs['elForm'].resetFields()
    },
  }
}

</script>
<style>
</style>
