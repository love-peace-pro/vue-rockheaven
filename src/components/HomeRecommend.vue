<template>
  <div id="homeRecommend">
    <!-- title -->
    <div class="align-center recommend">
      <i class="el-icon-star-off i_2"></i>
      <h2 class="title">{{ title }}</h2>
      <el-breadcrumb class="breadcrumb" separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">迷幻</el-breadcrumb-item>
        <el-breadcrumb-item>前卫</el-breadcrumb-item>
        <el-breadcrumb-item>Jazz</el-breadcrumb-item>
        <el-breadcrumb-item>Blues</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="justify-flex-end width_60">
        <span>更多</span>
        <i class="el-icon-right" style="color: #C10D0C;"></i>
      </div>
    </div>
    <!-- content -->
    <div class="content">
      <el-container style="height: 32rem;">
        <el-main class="flex-wrap"
          ><CollectionsList v-for="i in 10" :key="i"></CollectionsList
        ></el-main>
      </el-container>
    </div>
  </div>
</template>
<script>
import CollectionsList from "@/components/CollectionsList";
export default {
  data() {
    return { title: "热门推荐" };
  },
  components: {
    CollectionsList,
  },
};
</script>
<style scoped>
.title {
  margin: 0.8rem 0.4rem 0.8rem 0.8rem;
}
.breadcrumb {
  margin-left: 1rem;
}
.recommend {
  border-bottom: 2px solid #c10d0c;
  margin: 1rem;
}
.content {
  margin: 1rem;
}
</style>
