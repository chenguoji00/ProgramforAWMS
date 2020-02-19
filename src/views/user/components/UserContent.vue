<template>
  <div>
    <el-card shadow="never" ref="user-table" id="user-table">
      <el-row>
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="用户管理" name="first"></el-tab-pane>
        </el-tabs>
        <el-col>

<!--按钮-->
          <el-button type="primary" icon="el-icon-plus" size="mini" @click="plusUser" >增加</el-button>
          <el-button type="warning" icon="el-icon-edit" size="mini">修改</el-button>
          <el-button type="info" icon="el-icon-search" size="mini">搜索</el-button>
          <el-button type="danger" icon="el-icon-delete" size="mini">删除</el-button>
<!--表格-->
          <el-table :data="userTableData" :height="tableHeight" stripe style="width: 100%">
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column prop="company_name" label="公司" show-overflow-tooltip min-width="110px"></el-table-column>
            <el-table-column prop="detail_name"  label="产品类型" show-overflow-tooltip ></el-table-column>
            <el-table-column prop="price" label="金额" show-overflow-tooltip ></el-table-column>
            <el-table-column prop="binding_qty" label="可用数量" show-overflow-tooltip ></el-table-column>
            <el-table-column prop="start_date" label="开始日期" show-overflow-tooltip ></el-table-column>
            <el-table-column prop="end_date" label="结束日期" show-overflow-tooltip ></el-table-column>
          </el-table>
<!--分页-->
          <div style="width: 100%;overflow: auto;">
            <el-pagination
              :current-page="currentPage"
              :page-sizes="[10, 20, 50, 100]"
              :page-size="pagesize"
              layout="total, sizes, prev, pager, next, jumper"
              :total="charLength"
            >
            </el-pagination>
          </div>
        </el-col>
      </el-row>
    </el-card>

<!--    新增dialog-->
  <user-add-dialog :visible.sync ="dialogVisible" ></user-add-dialog>
  </div>
</template>

<script>
import UserAddDialog from "./UserAddDialog";
export default {
  name: "UserContent",
  components: {UserAddDialog},
  props: {
    userTableData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      activeName: "first",
      tabHeight: 450,
      userTableData1: this.userTableData,
      tableHeight: 450,
      tableData: [],
      currentPage: 1,
      pagesize: 20,
      charLength: 0,
      dialogVisible: false,
    };
  },
  watch: {
    userTableData(nval) {
      this.charLength = nval.length;
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    handleSelectionChange() {},
    rowClick() {},
    plusUser() {
      this.dialogVisible = true;
    },
},
  mounted() {
    document.getElementById("user-table").style["min-height"] =
      this.tabHeight + "px";
  },
  created() {
    this.tableHeight =
      document.documentElement.scrollHeight - 280 ||
      document.body.scrollHeight - 280;
    this.tabHeight =
      document.documentElement.scrollHeight - 117 ||
      document.body.scrollHeight - 117;
  }
};
</script>

<style scoped>
  .el-form-item {
     margin-bottom: 0px;
  }
</style>
