<template>
  <div class="public-host">
    <div class="content-box">
      <div class="content-header">
        <logo :src="'/assets/img/logo.svg'" :width="147" :height="33"></logo>
      </div>

      <div class="content-body">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
import logo from '@/components/logo/logo'
export default {
  components: {
    logo
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/sass/variables';

.public-host {
  background: url('~@/assets/content/login-page.jpg') 50% 50% no-repeat;
  background-size: cover;
  display: block;
  height: 100%;
  overflow: auto;
  width: 100%;

  .register-page & {
    background: url('~@/assets/content/register-page.jpg') 50% 50% no-repeat;
  }
  .content-box {
    background: #fff;
    box-shadow: $shadow;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    min-height: 100%;

    .content-header {
      padding-top: $module-rem * 2;
    }
    .content-body {
      align-items: center;
      display: flex;
      flex-grow: 1;
      padding: $module-rem ($module-rem * 4);
      width: 100%;

     & {
        > * {
          display: block;
          width: 100%;
        }

        a {
          display: none;
        }
      }
    }
  }
}
</style>
