<template>
  <div style="height:100%">
    <router-view></router-view>
    <footer-tab></footer-tab>
  </div>
</template>
<script>
import FooterTab from '../components/footer'
export default {
  components: {
    FooterTab
  }
}
</script>