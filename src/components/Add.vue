<template>
  <div class="Add container">
    <h1 class="page-header">添加用户</h1>
    <form v-on:submit.stop.prevent="addCustomer">
      <div class="well">
        <h4>用户信息</h4>
        <div class="form-group">
          <label for>姓名</label>
          <input class="form-control" placeholder="姓名" type="text" v-model="customer.name" />
          <label for>电话</label>
          <input class="form-control" placeholder="电话" type="text" v-model="customer.phone" />
          <label for>邮箱</label>
          <input class="form-control" placeholder="邮箱" type="text" v-model="customer.email" />
          <label for>学历</label>
          <input class="form-control" placeholder="学历" type="text" v-model="customer.education" />
          <label for>学校</label>
          <input class="form-control" placeholder="学校" type="text" v-model="customer.school" />
          <label for>职业</label>
          <input class="form-control" placeholder="职业" type="text" v-model="customer.zhiye" />
          <label for>个人简介</label>
          <!-- <input class="form-control" placeholder="个人简介" type="text" v-model="customer.jianjie" /> -->
          <textarea class="form-control" cols="80" id name rows="5"></textarea>
        </div>
        <input class="btn btn-primary" type="submit" value="添加" />
      </div>
    </form>
  </div>
</template>

<script>
import Alert from '@/components/Alert.vue'
export default {
  name: 'Add',
  data() {
    return {
      customer: {}
    }
  },
  methods: {
    addCustomer(e) {
      if (!this.customer.name || !this.customer.phone || !this.customer.email) {
        console.log('请添加对应信息')
      } else {
        let newCustomer = {
          name: this.customer.name,
          phone: this.customer.phone,
          email: this.customer.email,
          website: this.customer.education
        }

        this.$http
          .post('http://localhost:3000/users', newCustomer)
          .then(function(res) {
            console.log(res)
            if (res.status == 201) {
              this.$router.push({
                path: '/',
                query: { alert: '用户信息添加成功' }
              })
            } else {
              alert('添加失败')
            }
          })
      }
    }
  },
  created() {},
  components: {
    Alert
  }
}
</script>

<style scoped>
</style>
