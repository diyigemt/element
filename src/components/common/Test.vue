<template>
  <el-form label-position="left"
           ref="dynamicValidateForm"
           label-width="100px"
           class="demo-dynamic">
    <el-table stripe empty-text="空" :data="orderForm.goods">
      <el-table-column label="编号" type="index" width="50px" align="center"></el-table-column>
      <el-table-column label="商品">
        <template slot-scope="scope">
          <el-form-item>
            <el-select
                v-model="orderForm.goods[scope.$index].id"
                filterable
                placeholder="请输入关键词">
              <el-option
                  v-for="(item, index) in goodsList"
                  :key="item.id + index"
                  :label="item.name"
                  :value="item.id">
              </el-option>
            </el-select>
            <!--          <el-button @click.prevent="removeDomain(e)">删除</el-button>-->
          </el-form-item>
        </template>
      </el-table-column>
      <el-table-column label="单价" width="50px">
        <template slot-scope="scope">
          <span>{{goodsList[orderForm.goods[scope.$index].id - 1].price}}</span>
        </template>
      </el-table-column>
      <el-table-column label="数量" align="center">
        <template slot-scope="scope">
          <el-input-number v-model.number="orderForm.goods[scope.$index].count" :min="1"></el-input-number>
        </template>
      </el-table-column>
      <el-table-column label="金额">
        <template slot-scope="scope">
          <span>{{goodsList[orderForm.goods[scope.$index].id - 1].price * orderForm.goods[scope.$index].count}}</span>
        </template>
      </el-table-column>
    </el-table>
    <el-form-item>
      <el-button type="primary" @click="submitForm('dynamicValidateForm')">提交</el-button>
      <el-button @click="addGood">新增条目</el-button>
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
          id: 1,
          value: '产品1',
          key: Date.now(),
          count: 1
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
      this.orderForm.goods = [{id: 1, value: '产品1', key: Date.now(), count: 1}]
    },
    removeDomain(item) {
      let index = this.orderForm.goods.indexOf(item)
      if (index !== -1) {
        this.orderForm.goods.splice(index, 1)
      }
    },
    addGood() {
      this.orderForm.goods.push({
        id: 1,
        value: '产品1',
        key: Date.now(),
        count: 1
      });
    }
  }
}
</script>