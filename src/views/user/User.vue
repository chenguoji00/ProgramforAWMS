<template>
  <div>
    <el-row>
      <!--    用户查询表单    -->
      <el-col :span="5">
        <user-query></user-query>
      </el-col>
      <!--    用户查询表格    -->
      <el-col :span="19">
        <user-content :userTableData="userTableData"></user-content>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { apiparas } from "network/apiparams";
import { getUser } from "network/user";
import UserQuery from "./components/UserQuery";
import UserContent from "./components/UserContent";
export default {
  name: "User",
  components: { UserQuery, UserContent },
  data() {
    return {
      userTableData: []
    };
  },
  methods: {

  },
  created() {
    let jsonparas = [];
    apiparas.pushPara(jsonparas, "dict_id", "");
    let params = apiparas.getParas(   //配参数
      "default",
      "sys|get_binding_device",
      jsonparas
    );
    getUser(params).then(res => {
        if (res.errid == 0) {
          this.userTableData = res.result;
        }
      }).catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped></style>
