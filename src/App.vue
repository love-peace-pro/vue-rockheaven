<!--
 * @Descripttion: 
 * @version: 
 * @Author: Zhenqing He
 * @Date: 2024-06-12 09:04:54
 * @LastEditors: Zhenqing He
 * @LastEditTime: 2024-06-12 10:00:06
-->
<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link ink to="/about">About</router-link>
    </div> -->
  <div></div>
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
