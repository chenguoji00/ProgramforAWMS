<template>
  <el-dialog
    title="新增"
    :visible.sync="visible"
    width="80%"
    :before-close="handleClose"
  >
    <el-form ref="form" :model="userData" label-width="80px">
      <el-row>
        <el-col :span="12">
          <el-form-item label="用户类型" prop="usertype">
            <el-input
              v-model="userData.usertype"
              auto-complete="off"
              placeholder="请输入用户类型"
              size="mini"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="用户名称" prop="username">
            <el-input
              v-model="userData.username"
              auto-complete="off"
              placeholder="请输入用户名称"
              size="mini"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="真实姓名" prop="realname">
            <el-input
              v-model="userData.realname"
              auto-complete="off"
              placeholder="请输入真实姓名"
              size="mini"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="性别" prop="usersex">
            <el-input
              v-model="userData.usersex"
              auto-complete="off"
              placeholder="请输入性别"
              size="mini"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="出生日期" prop="birthday">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="userData.birthday"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="电话" prop="userphone">
            <el-input
              v-model="userData.userphone"
              auto-complete="off"
              placeholder="请输入电话"
              size="mini"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="供应商" prop="supplier">
            <el-input
              v-model="userData.supplier"
              auto-complete="off"
              placeholder="请输入供应商"
              size="mini"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="客户" prop="client">
            <el-input
              v-model="userData.client"
              auto-complete="off"
              placeholder="请输入客户"
              size="mini"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="承运商" prop="supplier">
            <el-input
              v-model="userData.Carrier"
              auto-complete="off"
              placeholder="请输入承运商"
              size="mini"
            ></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="货主" prop="Consignor">
            <el-input
              v-model="userData.Consignor"
              auto-complete="off"
              placeholder="请输入货主"
              size="mini"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="12">
          <el-form-item label="有效期至" prop="expirationdate">
            <el-date-picker
              type="date"
              placeholder="选择日期"
              v-model="userData.expirationdate"
              style="width: 100%;"
            ></el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="有效状态" prop="activestate">
            <el-input
              v-model="userData.activestate"
              auto-complete="off"
              placeholder="请输入有效状态"
              size="mini"
            ></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="系统类型" prop="systemtype">
            <el-select
              v-model="userData.systemtype"
              placeholder="请选择系统类型"
            >
              <el-option label="WEB" value="shanghai"></el-option>
              <el-option label="安卓" value="beijing"></el-option>
            </el-select>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <el-form-item label="有效期至" prop="expirationdate">
            <el-input
              type="textarea"
              :rows="2"
              placeholder="请输入内容"
              v-model="userData.textarea"
            >
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <br />
      <el-row>
        <div class="rolelist">角色列表</div>
        <el-tree
          :props="props"
          :load="loadNode"
          lazy
          show-checkbox
          @check-change="handleCheckChange"
        >
        </el-tree>
      </el-row>
    </el-form>

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  name: "UserAddDialog",
  props: {
    visible: {
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
      userData: {
        username: "",
        usertype: "",
        realname: "",
        usersex: "",
        birthday: "",
        userphone: "",
        supplier: "", //供应啥
        client: "", //客户
        Carrier: "", //承运商
        Consignor: "", //货主
        expirationdate: "", //有效期至
        activestate: "", //有效状态
        systemtype: "",
        textarea: ""
      },
      props: {
        label: "name",
        children: "zones"
      },
      count: 1
    };
  },
  methods: {
    handleCheckChange(data, checked, indeterminate) {
      console.log(data, checked, indeterminate);
    },
    handleNodeClick(data) {
      console.log(data);
    },
    loadNode(node, resolve) {
      if (node.level === 0) {
        return resolve([{ name: "region1" }, { name: "region2" }]);
      }
      if (node.level > 3) return resolve([]);

      var hasChild;
      if (node.data.name === "region1") {
        hasChild = true;
      } else if (node.data.name === "region2") {
        hasChild = false;
      } else {
        hasChild = Math.random() > 0.5;
      }

      setTimeout(() => {
        var data;
        if (hasChild) {
          data = [
            {
              name: "zone" + this.count++
            },
            {
              name: "zone" + this.count++
            }
          ];
        } else {
          data = [];
        }
        resolve(data);
      }, 500);
    },
    handleClose() {
      this.$emit('update:visible', false);
    }
  }
};
</script>

<style scoped></style>
