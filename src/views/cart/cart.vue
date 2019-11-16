<template>
  <div>

  </div>
</template>
<script>
export default {
  mounted () {
    setTimeout(() => {
      alert('技术原因没接口,找后端去吧')
      this.$router.go(-1);
    }, 100);
  },
}
</script>