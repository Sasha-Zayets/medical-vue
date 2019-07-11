<template>
  <div class="avatar-host" :style="styles" :class="classes">
    <img :src="src" :alt="alt" :width="size" :height="size" v-if="src">

    <div class="initials" v-if="!src">{{ initials }}</div>

    <span class="avatar-loader"><i class="fa fa-spinner fa-pulse"></i></span>

  </div>
</template>
<script>
export default {
  props: {
    src: {
      type: String
    },
    alt: {
      type: String
    },
    size: {
      type: Number,
      default: 40
    },
    initials: {
      type: String
    },
    load: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    styles () {
      return {
        height: `${this.size}px`,
        width: `${this.size}px`,
        'font-size': `${this.size / 2}px`
      }
    },
    classes () {
      if(this.load) {
        return `avatar-loading`
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/sass/variables';

$_module-rem: $module-rem;

.avatar-host {
  align-items: center;
  background: rgba(#000,.1);
  border-radius: 50%;
  display: flex;
  font-size: 30px;
  font-weight: 700;
  height: $_module-rem * 4;
  justify-content: center;
  line-height: 1;
  margin: 0 ($_module-rem * 2) 0 0;
  overflow: hidden;
  position: relative;
  text-transform: uppercase;
  width: $_module-rem * 4;

  img {
    max-height: 100%;
    max-width: 100%;
  }
  .avatar-loader {
    align-items: center;
    border-radius: inherit;
    color: rgba(#000,.5);
    display: flex;
    font-size: inherit;
    height: 100%;
    justify-content: center;
    left: 0;
    position: absolute;
    top: 0;
    visibility: hidden;
    width: 100%;
  }
  &.avatar-loading {
    img,
    .initials {
      visibility: hidden;
    }
    .avatar-loader {
      visibility: visible;
    }
  }
}

</style>
