<template>
  <div class="checkbox-host tc-checkbox"
    :class="[
      {'disabled': disabled},
      {'checked': val }
    ]"
  >
    <div class="tc-checkbox-wrap" 
         @click="switchs(val)"
         @mouseenter="onMouseEnter()"
         @mouseleave="onMouseLeave()">
      <div class="tc-checkbox-handle" :style="getStyles()">
        <input type="checkbox" class="checkbox-input" :value="val">

        <span class="check-detector icofont-check-alt"></span>
      </div>

      <div class="tc-checkbox-label" :style="getLabelColor()">
        <slot></slot>
      </div>
    </div>

  </div>
</template>
<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    value: {
      type: [Boolean, String],
      default: false
    },
    bgColor: {
      type: [String, Array]
    },
    borderColor: {
      type: [String, Array]
    },
    color: {
      type: [String, Array]
    },
    labelColor: {
      type: [String, Array]
    }
  },
  data: () => ({
    val: '',
    states: {
      default: 'DEFAULT',
      hover: 'HOVER',
      focus: 'FOCUS',
      disabled: 'DISABLED'
    }
  }),
  mounted () {
    this.val = this.value
    this.setStyles(this.disabled ? this.states.disabled : (this._value ? this.states.focus : this.states.default))
  },
  computed: {
    values () {
      return this.value
    }
  },
  methods: {
    switchs(bool) {
      if (!this.disabled) {
        this.val = !bool

        this.setStyles(this.states[!bool ? 'focus' : 'hover'])
        this.$emit('newValue', this.val)
      }
    },
    onMouseEnter() {
      if (!this.disabled) {
        this.setStyles(this.states[this.val ? 'focus' : 'hover'])
      }
    },
    onMouseLeave() {
      if (!this.disabled) {
        this.setStyles(this.states[this.val ? 'focus' : 'hover'])
      }
    },
    setStyles(
      st,
      bg = this.bgColor,
      border = this.borderColor,
      color = this.color,
      labelColor = this.labelColor
    ) {
      let styleIndex = 0

      switch (st) {
        case this.states.hover:
          styleIndex = 1
          break;
        case this.states.focus:
          styleIndex = 2
          break;
        case this.states.disabled:
          styleIndex = 3
          break;
        default:
          styleIndex = 0
      }

      this.currentBgColor = bg instanceof Array ? bg[styleIndex] : bg
      this.currentBorderColor = border instanceof Array ? border[styleIndex] : border
      this.currentColor = color instanceof Array ? color[styleIndex] : color
      this.currentLabelColor = labelColor instanceof Array ? labelColor[styleIndex] : labelColor
    },
    getStyles() {
      return {
        'background-color': this.currentBgColor,
        'border-color': this.currentBorderColor,
        'color': this.currentColor
      }
    },
    getLabelColor() {
      return {
        'color': this.currentLabelColor
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/sass/variables';

$_bg: (
  default: #ebebeb,
  hover: #ebebeb,
  active: accent-palette(500),
  disabled: rgba(#ccc,.1)
);
$_border: (
  default: #ebebeb,
  hover: #ebebeb,
  active: accent-palette(500),
  disabled: rgba(#ccc,.5)
);
$_color: (
  default: accent-palette(500),
  hover: accent-palette(500),
  active: accent-contrast(500),
  disabled: #bdbdbd
);
$_label-color: (
  default: inherit,
  hover: inherit,
  active: inherit,
  disabled: #bdbdbd
);

$_module-rem: $module-rem;
$_border-style: solid;
$_border-width: 1px;
$_fs: 1rem;
$_height: $_module-rem * 2;
$_width: $_module-rem * 2;
$_shape: 3px;
$_animation: $animation;

.checkbox-host {
  display: inline-flex;
  line-height: 1;
  transition: color .2s $_animation;

  .tc-checkbox-wrap {
    align-items: center;
    cursor: pointer;
    display: flex;

    .tc-checkbox-handle {
      align-items: center;
      background: map-get($_bg, default);
      border: $_border-width $_border-style map-get($_border, default);
      border-radius: $_shape;
      color: map-get($_border, default);
      cursor: inherit;
      display: flex;
      height: $_height;
      justify-content: center;
      margin: 0;
      position: relative;
      transition:
        background .2s $_animation,
        border .2s $_animation,
        color .2s $_animation;
      width: $_width;

      .checkbox-input {
        cursor: inherit;
        opacity: 0;
        position: absolute;
      }
      .check-detector {
        display: block;
        font-size: 1.6rem;
        transform: scale(0);
        transition: transform .2s $_animation;
      }
    }
    .tc-checkbox-label {
      color: map-get($_label-color, default);
      margin-left: 10px;
      transition: color .2s $_animation;

      &:empty {
        display: none;
      }
    }
    &:hover {
      .tc-checkbox-handle {
        background: map-get($_bg, hover);
        border-color: map-get($_border, hover);
        color: map-get($_color, hover);

        .check-detector {
          transform: scale(1);
        }
      }
      .tc-checkbox-label {
        color: map-get($_label-color, hover);
      }
    }
  }
  &.checked {
    .tc-checkbox-wrap {
      .tc-checkbox-handle {
        background: map-get($_bg, active);
        border-color: map-get($_border, active);
        color: map-get($_color, active);

        .check-detector {
          transform: scale(1);
        }
      }
      .tc-checkbox-label {
        color: map-get($_label-color, active);
      }
    }
  }
  &.disabled {
    .tc-checkbox-wrap {
      cursor: not-allowed;

      .tc-checkbox-handle {
        background: map-get($_bg, disabled);
        border-color: map-get($_border, disabled);
        color: map-get($_color, disabled);

        .check-detector {
          transform: scale(0);
        }
      }
      .tc-checkbox-label {
        color: map-get($_label-color, disabled);
      }
    }
    &.checked {
      .tc-checkbox-wrap {
        .tc-checkbox-handle {
          .check-detector {
            transform: scale(1);
          }
        }
      }
    }
  }
}

</style>
