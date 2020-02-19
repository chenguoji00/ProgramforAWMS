<template>
  <div>
    <el-row style="background:rgb(45,195,232);">
      <el-col :xs="3" :sm="3" :md="3" :lg="3" :xl="3">
        <div class="logo">
          ERP综合平台
        </div>
      </el-col>
      <el-col :xs="21" :sm="21" :md="21" :lg="21" :xl="21">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="rgb(45,195,232)"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <el-menu-item index="1" route="/user">用户</el-menu-item>
          <el-menu-item index="4" route="/order">订单中心</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>

    <el-row :span="24">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <template v-for="(item, index) in breadcrumbData">
          <el-breadcrumb-item :key="index">
            <span style="line-height:30px;">{{ item }}</span>
          </el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "HomeHeader",
  data () {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      breadcrumbData: [
        "首页", "用户"
      ]
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
      console.log(this.$route);
      if(key ==1) {
        this.breadcrumbData = ["首页", "用户"]
      }else {
        this.breadcrumbData = ["首页", "订单"]
      }
    }
  }
};
</script>

<style scoped>
  .logo {
    background-color: rgb(49, 195, 255);
    padding-top: 15px;
    color: #fff;
    font-size: 22px;
    text-align: center;
  }
</style>
