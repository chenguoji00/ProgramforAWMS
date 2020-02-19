<template>
  <div>
    <el-card shadow="never">
      <div slot="header" class="clearfix">
        <span style="float: left; padding: 3px 5px;">查询</span>
        <div style="float: right; padding: 3px 5px;" type="text"><</div>
      </div>
      <div id="elform" class="setheight_scroller">
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="用户类型">
            <el-select
              v-model="form.region"
              placeholder="请选择活动区域"
              style="width: 100%;"
            >
              <el-option label="全部" value="shanghai"></el-option>
              <el-option label="用户类型一" value="shanghai"></el-option>
              <el-option label="用户类型二" value="beijing"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="用户名称">
            <el-input v-model="form.name" placeholder="用户名称" />
          </el-form-item>
          <el-form-item label="真实姓名">
            <el-input v-model="form.realname" placeholder="真实姓名" />
          </el-form-item>
          <el-form-item label="有效状态">
            <el-select v-model="form.statetype" style="width: 100%;">
              <el-option label="有效" value="youxiao"></el-option>
              <el-option label="无效" value="wuxiao"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" style="background-color:rgb(39,174,96);border: none;" @click="onSubmit">查询</el-button>
            <el-button  style="background-color:rgb(45,194,232);color:#fff;border: none;">重置</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  name: "UserQuery",
  data() {
    return {
      tabHeight: 450,
      form: {
        name: "",
        region: "",
        realname: "",
        statetype: "youxiao"
      }
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!");
    }
  },
  mounted() {
    document.getElementById("elform").style["min-height"] =
      this.tabHeight + "px";
  },
  created() {
    this.tabHeight =
      document.documentElement.scrollHeight - 220 ||
      document.body.scrollHeight - 220;
  }
};
</script>

<style scoped>
.setheight_scroller {
  overflow: auto;
  padding-top: 5px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}
</style>
