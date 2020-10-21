<template>
  <el-form :model="orderForm"
           label-position="left"
           ref="dynamicValidateForm"
           label-width="100px"
           class="demo-dynamic">
    <el-form-item
        v-for="(e, index) in orderForm.goods"
        :label="'域名' + index"
        :key="e.key"
        :prop="'domains.' + index + '.value'"
        :rules="{
      required: true, message: '域名不能为空', trigger: 'blur'
    }">
      <el-select
          v-model="e.type"
          filterable
          placeholder="请输入关键词">
        <el-option
            v-for="(item, index) in goodsList"
            :key="item.id + index"
            :label="item.name"
            :value="item.type">
        </el-option>
      </el-select>
      <el-input v-model="e.value" style="width: 80%"></el-input><el-button @click.prevent="removeDomain(e)">删除</el-button>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
      <el-button @click="addDomain">新增域名</el-button>
      <el-button @click="resetForm('dynamicValidateForm')">重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
import {tmpGoodsList} from "@/config/tmp-config";

export default {
  name: 'Test',
  data() {
    return {
      orderForm: {
        goods: [{
          value: '',
          key: Date.now(),
          type: 1
        }]
      },
      goodsList: tmpGoodsList
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    removeDomain(item) {
      let index = this.orderForm.goods.indexOf(item)
      if (index !== -1) {
        this.orderForm.goods.splice(index, 1)
      }
    },
    addDomain() {
      this.orderForm.goods.push({
        value: '',
        key: Date.now()
      });
    }
  }
}
</script>