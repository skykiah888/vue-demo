<template>
  <div class="Contai container">
    <div class="container">
      <Alert :msg="alert" v-if="alert"></Alert>
      <H2 class="page-header bottom-left">用户管理系统</H2>
      <input class="form-control" placeholder="搜索" type="text" v-model="fiterInput" />
      <table class="table table-striped">
        <thead>
          <tr>
            <th>姓名</th>
            <th>电话</th>
            <th>邮箱</th>
            <th>详情</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="index" v-for="(item, index) in foterBY(contaidata,fiterInput)">
            <td>{{item.name}}</td>
            <td>{{item.phone}}</td>
            <td>{{item.email}}</td>
            <td>
              <router-link
                :to="{path:'/contai/details/'+ item.id, params:{id:item.id}}"
                class="btn btn-default"
              >详情</router-link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Alert from '@/components/Alert.vue'
import Details from '@/components/Details.vue'
export default {
  data() {
    return {
      alert: '',
      contaidata: [],
      fiterInput: '',
      likai: ''
    }
  },
  methods: {
    fetchcontai() {
      this.$http.get('http://localhost:3000/users').then(function(res) {
        console.log(res)
        if (res.status == 200) {
          this.contaidata = res.body
        } else {
          alert('没有获取到数据')
        }
      })
    },
    foterBY(contaidata, value) {
      return contaidata.filter(function(ssss) {
        return ssss.name.match(value)
      })
    }
  },
  created() {
    this.fetchcontai()
    if (this.$route.query.alert) {
      this.alert = this.$route.query.alert
    }
  },
  updated() {
    // this.fetchcontai()
  },
  components: {
    Alert
  }
}
</script>

<style scoped>
</style>
