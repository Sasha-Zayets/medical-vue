<template>
  <div class="host tc-dropdown-link" :class="{'active': active}">
    <div class="dropdown-link-wrap" @click="toggleDropdown()">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    active: false
  }),
  methods: {
    // emits event to toggle menu
    toggleDropdown () {
      this.active = !this.active
      this.dropdownState.emit(this.active)
    },
    // returns button parameters
    getButtonParams () {
      return this.element.nativeElement.getBoundingClientRect()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../../assets/sass/variables';

.host {
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;
  transition:
    background .2s $animation,
    border .2s $animation,
    color .2s $animation;

  &.active {
    &:not(:only-child) {
      z-index: 9999;
    }
  }
  .marker {
    background: $info-color;
    border-radius: 50%;
    height: 6px;
    position: absolute;
    right: 5px;
    top: 5px;
    width: 6px;

    .rtl & {
      left: 5px;
      right: auto;
    }
  }
  .avatar {
    border-radius: 50%;
    height: 40px;
    overflow: hidden;
    width: 40px;
  }
  .name {
    font-size: 1rem;
    padding-left: $module-rem;
    white-space: nowrap;
  }
}

</style>
