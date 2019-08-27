<template>
  <div class="Alert">
    <div class="alert alert-warning alert-dismissible" role="alert">
      <button aria-label="Close" class="close" data-dismiss="alert" type="button">
        <span aria-hidden="true">&times;</span>
      </button>
      {{msg}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: ['msg']
}
</script>

<style scoped>
</style>
