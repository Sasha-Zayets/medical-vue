<template>
  <div class="host tc-form-description">
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
  margin: $module-rem 0 0;
}

</style>
