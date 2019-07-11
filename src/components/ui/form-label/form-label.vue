<template>
  <div class="host tc-form-label">
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
  font-weight: 600;
  margin: 0 0 $module-rem;
}

</style>
