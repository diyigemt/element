<template>
  <el-form :inline="true" :model="searchForm" size="small" class="demo-form-inline">
    <el-form-item :label="labelName(0)">
      <el-input v-model="searchForm.content" :placeholder="placeholder(0)"></el-input>
    </el-form-item>
    <el-form-item v-if="this.type === 2" :label="labelName(1)">
      <el-select v-model="searchForm.type" :placeholder="placeholder(1)">
        <el-option v-for="(e, index) in options" :label="e.label" :value="e.value" :key="e + index"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">{{ submitName }}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
  export default {
    name: "SearchBox",
    props: {
      submitName: {type: String, default: '提交'},
      labelNames: {type: String | Array, default: '搜索内容 :'},
      placeholders: String | Array,
      type: {
        type: Number, //1:单独搜索 2:分类搜索
        default: 1,
        validator: (val) => [1, 2].indexOf(val) > -1
      },
      options: Array
    },
    data() {
      return {
        searchForm: {
          content: '',
          type: typeof this.options !== "undefined" ? this.options[0].value : ''
        }
      }
    },
    methods: {
      onSubmit() {
        this.$emit('submit', this.searchForm);
      },
      labelName(index) {
        if (typeof this.labelNames === "string") return this.labelNames;
        return this.labelNames[index];
      },
      placeholder(index) {
        if (typeof this.placeholders === "undefined") return '';
        return this.placeholders[index];
      }
    }
  }
</script>

<style scoped>

</style>