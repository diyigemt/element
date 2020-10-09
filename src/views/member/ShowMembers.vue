<template>
  <div>
    <PageHeader :content="'查看会员信息'"></PageHeader>
    <el-divider></el-divider>
    <div class="shadow">
      <div class="search-box">
        <SearchBox :submit-name="'搜索'" :label-names="['用户名:', '搜索方式:']" :placeholders="['', '请选择搜索方式']" :type="2"
                   :options="[{'label': '按用户名搜索', 'value': 'userName'}, {'label': '按用户id搜索', 'value': 'userId'}]"
        ></SearchBox>
      </div>
      <div>
        <Table :name="'用户'"
               :table-data="userData"
               :prop-name="propName"
               :label-name="labelName"></Table>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";
import SearchBox from "@/components/common/SearchBox";
import Table from "@/components/content/Table";
//TODO delete
import {tmpUserData} from "@/config/tmp-config";
let tmpPropName = ['name', 'registerDay', 'remain', 'points'];
let tmpLabelName = ['用户名', '注册日期', '剩余金额', '当前积分']
export default {
  name: "ShowMembers",
  data() {
    return {
      userData: tmpUserData,
      propName: tmpPropName,
      labelName: tmpLabelName
    }
  },
  components: {
    PageHeader,
    SearchBox,
    Table
  }
}
</script>

<style scoped>
.search-box {
  text-align: left;
}
</style>