<template>
  <div>
    <!--    头组件-->
    <home-header></home-header>
    <!--    Home子路由跳转-->
    <router-view></router-view>
  </div>
</template>

<script>
import HomeHeader from "@/components/content/homeHeader/HomeHeader";
export default {
  name: "Home",
  components: { HomeHeader },
  data() {
    return {};
  },
  methods: {

  }
};
</script>

<style scoped></style>
