<template>
  <div class="Details container">
    <router-link class="btn btn-default" to="/">返回</router-link>
    <h1 class="page-header">
      {{contaidata.name}}
      <span class="pull-right">
        <router-link :to="{path:'/contai/edit/'+ contaidata.id}" class="btn btn-default">编辑</router-link>
        <button @click="deleteContai(contaidata.id)" class="btn btn-danger">删除</button>
      </span>
    </h1>
    <ul class="list-group">
      <li class="list-group-item">
        <span class="glyphicon glyphicon-home">{{contaidata.email}}</span>
      </li>

      <li class="list-group-item">
        <span class="glyphicon glyphicon-map-marker">{{contaidata.phone}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Details',
  data() {
    return { contaidata: '', alert: '' }
  },
  props: ['msg'],
  methods: {
    fetchcontai(id) {
      this.$http.get('http://localhost:3000/users/' + id).then(function(res) {
        console.log(res)
        if (res.status == 200) {
          this.contaidata = res.body
        } else {
          alert('没有获取到数据')
        }
      })
    },
    deleteContai(id) {
      console.log(id)
      this.$http
        .delete('http://localhost:3000/users/' + id)
        .then(function(res) {
          console.log(res)
          if (res.status == 200) {
            this.$router.push({
              path: '/',
              query: { alert: '删除成功啦啦啦' }
            })
          } else {
            alert('没有获取到数据')
          }
        })
    }
  },
  created() {
    this.fetchcontai(this.$route.params.id)
  },
  components: {}
}
</script>

<style scoped>
</style>
