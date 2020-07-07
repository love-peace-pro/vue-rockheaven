<template>
  <div class="head-color justify-center">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo width_60 justify-spacebetween height_100"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <div class="title align-center">
        <i class="el-icon-star-off"></i>
        <span>测试一下标题</span>
      </div>
      <el-menu-item index="1">发现音乐</el-menu-item>
      <el-submenu index="2">
        <template slot="title">我的音乐</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">选项3</el-menu-item>
        <el-submenu index="2-4">
          <template slot="title">选项4</template>
          <el-menu-item index="2-4-1">选项1</el-menu-item>
          <el-menu-item index="2-4-2">选项2</el-menu-item>
          <el-menu-item index="2-4-3">选项3</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="3" disabled>朋友</el-menu-item>
      <el-menu-item index="4">商城</el-menu-item>
      <el-input
        placeholder="搜索"
        prefix-icon="el-icon-search"
        class="width_15 align-center "
        v-model="search"
      >
      </el-input>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "headerNav",
  data: function() {
    return { activeIndex: "1", activeIndex2: "1", search: "" };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="less" scoped>
.head-color {
  background-color: rgb(84, 92, 100);
}
.title {
  font-size: 20px;
  color: white;
}
.title i {
  margin-right: 2rem;
}
/deep/ .el-menu.el-menu--horizontal {
  border-bottom: 0;
}
</style>
