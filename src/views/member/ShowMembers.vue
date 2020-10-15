<template>
  <div>
    <PageHeader :content="'查看会员信息'" :from-path="fromPath"></PageHeader>
    <el-divider></el-divider>
    <div class="shadow">
      <div class="search-box">
        <SearchBox :submit-name="'搜索'"
                   :label-names="['用户名:', '搜索方式:']"
                   :placeholders="['', '按用户名搜索']"
                   :type="2"
                   :options="[{'label': '按用户名搜索', 'value': 'userName'}, {'label': '按用户id搜索', 'value': 'userId'}]"
                   @submit="handleSearch($event)"
        ></SearchBox>
      </div>
      <div>
        <TableWithPagination name="会员"
               :table-data="userData"
               :prop-name="propName"
               :label-name="labelName"
               :limit="8" @btnClick="handleEdit($event)"></TableWithPagination>
      </div>
    </div>
  </div>
</template>

<script>
import PageHeader from "@/components/common/PageHeader";
import SearchBox from "@/components/common/SearchBox";
import TableWithPagination from "@/components/content/TableWithPagination";

//TODO delete
import {tmpUserData} from "@/config/tmp-config";
let tmpPropName = ['name', 'registerDay', 'remain', 'points'];
let tmpLabelName = ['用户名', '注册日期', '剩余金额', '当前积分']
export default {
  name: "ShowMembers",
  data() {
    return {
      fromPath: '',
      userData: tmpUserData,
      propName: tmpPropName,
      labelName: tmpLabelName
    }
  },
  methods: {
    handleSearch(target) {
      //TODO search user
    },
    handleEdit(id ,event) {
      //TODO jump to editPage
      this.$router.push({
        name: 'baseInfo',
        params: {id: id}
      })
    }
  },
  mounted() {
    //TODO get user info
  },
  beforeRouteEnter(to, from, next) {
    const that = from;
    next(vm => {vm.fromPath = that.path});
  },
  components: {
    PageHeader,
    SearchBox,
    TableWithPagination,
  }
}
</script>

<style scoped>
.search-box {
  text-align: left;
}
</style>