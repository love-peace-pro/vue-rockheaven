<template>
  <div class="home">
    <div>
      <el-container>
        <!-- 头部 -->
        <el-header>
          <headerNav></headerNav>
        </el-header>
        <!-- 轮播 -->
        <el-row class="justify-center">
          <el-col :span="18"><Carousel></Carousel> </el-col>
        </el-row>
        <el-row class="justify-center">
          <el-col :span="14" class="flex-column">
            <!-- 热门推荐 -->
            <HomeRecommend></HomeRecommend>
            <!-- 新碟上架-->
            <HomeRecommend></HomeRecommend>
            <!-- 榜单 -->
            <HomeRecommend></HomeRecommend>
          </el-col>
          <el-col :span="4"><Carousel></Carousel> </el-col>
        </el-row>
      </el-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNav from "@/components/HeaderNav.vue";
import Carousel from "@/components/Carousel.vue";
import HomeRecommend from "@/components/HomeRecommend.vue";

export default {
  name: "Home",
  components: {
    HeaderNav,
    Carousel,
    HomeRecommend
  },
};
</script>
<style lang="less" scoped>
/deep/ .el-header {
  padding: 0;
}
</style>
