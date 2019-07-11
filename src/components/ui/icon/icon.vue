<template>
  <div class="tc-icon-host tc-icon">
    <div :class="['tc-icon-wrap', iconClass, 'tc-icon']" 
        :style="{
          'padding': padding, 
          'font-size': `${tcFontSize}px`, 
          'color' : `${tcColor}`,
          'background-color': `${bg}`,
          'border-radius': share
          }"
          ></div>
  </div>
</template>
<script>
export default {
  props: {
    iconClass: {
      type: String
    },
    padding: {
      type: [String, Number]
    },
    tcFontSize: {
      type: [Number, String]
    },
    tcColor: {
      type: [String, Array],
      default: 'black'
    },
    tcBgColor: {
      type: [String, Array]
    },
    tcShape: {
      type: [Number, String]
    }
  },
  data: () => ({
    bg: ''
  }),
  created () {
    this.newBg()
  },
  computed: {
    share () {
      if(typeof this.tcShape == Number) {
        return `${this.tcShape}px`
      } else {
        return this.tcShape
      }
    }
  },
  methods: {
    newBg () {
      if(typeof this.tcBgColor == Array) {
        this.bg = this.tcBgColor[1]
      } else {
        this.bg = this.tcBgColor
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/sass/variables';

$_module-rem: $module-rem;
$_border-width: 1px;
$_border-style: solid;
$_fs: #{$main-lh}rem;
$_padding: $_module-rem / 2;
$_shape: $shape;
$_transition: $animation;

.tc-icon-host {
  border-radius: $_shape;
  display: inline-flex;
  font-size: $_fs;
  padding: $_padding;
  transition:
    background .2s $_transition,
    border .2s $_transition,
    color .2s $_transition;
  vertical-align: top;

  .tc-icon-wrap {
    line-height: 1;
  }
  &.custom-border-color {
    border: $_border-width $_border-style transparent;
  }
}

</style>