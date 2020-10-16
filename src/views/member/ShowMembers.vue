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
               :limit="8"
               @btnClick="handleEdit($event)"
               @delClick="handleDelete($event)"></TableWithPagination>
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
import {request} from "@/network/request";
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
        query: {id: id}
      })
    },
    handleDelete(id ,event) {
      let userName = '';
      for (let index of this.userData) {
        if (index.id === id) {
          userName = index.name;
        }
      }
      const h = this.$createElement;
      this.$confirm('', {
        title: '提示',
        message: h('p', {style: 'color: red'}, `确认删除用户 ${userName}?`),
        type: 'warning',
        beforeClose: (action, instance, done) => {
          if (action === 'confirm') {
            instance.confirmButtonLoading = true;
            instance.confirmButtonText = '通信中...';
            //TODO 删除
            request({}).then(res => {
              done();
              this.$message({
                type: 'success',
                message: '删除成功'
              });
            }).catch(err => {
              this.$message({
                type: 'error',
                message: `操作失败! 服务器返回错误代码: ${err}`
              })
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
    }
  },
  mounted() {
    //TODO get user info
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {vm.fromPath = from.path});
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