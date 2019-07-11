<template>
  <div class="logo-host">
    <div class="logo-wrap">
      <img :src="'/img/logo.svg'" :alt="alt" :width="width" :height="height" class="logo-img">
    </div>
  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String
    },
    alt: {
      type: String,
      default: ''
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/sass/variables';

.logo-host {
  display: block;
  height: $module-rem * 6;
  position: relative;

  .logo-wrap {
    align-items: center;
    color: inherit;
    display: flex;
    height: 100%;
    padding: $module-rem ($module-rem * 4);
    text-decoration: none;

    .logo-img {
      height: auto;
      max-height: 100%;
      max-width: 100%;
      vertical-align: top;
      width: auto;
    }
    .logo-text {
      display: block;
      font-size: 20px;
      line-height: 1;
      margin-left: ($module-rem * 2);
    }
  }
}

</style>
