<template >
  <div class="Header container">
    <nav class="navbar navbar-default" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
          <router-link class="navbar-brand" to="/">用户管理系统</router-link>
        </div>
        <div>
          <ul class="nav navbar-nav">
            <li :key="index" v-for="(item, index) in list">
              <router-link :to="item.path" exact-active-class="_active">{{item.name}}</router-link>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li>
              <router-link exact-active-class="_active" to="/add">添加用户</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          name: '主页',
          path: '/'
        },
        {
          name: '关于我们',
          path: '/about'
        }
      ]
    }
  },
  methods: {
    onclick(index) {
      console.log(index)
    }
  }
}
</script>

<style>
._active {
  color: red !important;
}
</style>
