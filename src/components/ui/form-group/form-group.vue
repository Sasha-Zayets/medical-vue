<template>
  <div class="host tc-form-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
}
</script>
<style lang="scss" scoped>
@import '../../../assets/sass/variables';

.host {
  display: block;
  margin: 0 0 ($module-rem * 2);
}

</style>
