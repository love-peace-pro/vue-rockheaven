<template>
  <div class="home">
    <!-- header -->
    <div>
      <el-container>
        <el-header>
          <headerNav></headerNav>
        </el-header>
      </el-container>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNav from "@/components/HeaderNav.vue";

export default {
  name: "Home",
  components: {
    HeaderNav
  }
};
</script>
