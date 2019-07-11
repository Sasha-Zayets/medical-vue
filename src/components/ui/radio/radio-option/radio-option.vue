<template>
  <div class="host tc-radio-option"
      :class="[
        {'disabled': disabled},
        {'checked': checked}
      ]"
  >
    <label class="tc-radio-wrap" @click="switchs(val)">
      <input
        type="radio"
        :name="name"
        class="radio-input"
        v-model="val"
        :checked="checked ? true : null"
        :disabled="disabled ? true : null"
      >

      <div class="tc-radio-handle" :style="getStyles()">
        <span class="check-detector" :style="getMarkerColor()"></span>
      </div>

      <div class="tc-radio-label" :style="getLabelColor()"><slot></slot></div>
    </label>

  </div>
</template>
<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    label: {
      type: String,
      default: ''
    },
    value: {
      type: String,
      default: ''
    },
    bgColor: {
      type: [String, Array],
      default: ''
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
    checked: false,
    currentBgColor: '',
    currentBorderColor: '',
    currentColor: '',
    currentLabelColor: '',
    val: '',
    state: {
      default: 'DEFAULT',
      hover: 'HOVER',
      focus: 'FOCUS',
      disabled: 'DISABLED'
    }
  }),
  mounted () {
    this.val = this.value
    this.setStyles(this.disabled ? this.states.disabled : (this.checked ?  this.states.focus : this.states.default))
  },
  methods: {
    switchs (value) {
      if (!this.disabled && !this.checked) {
       
      }
    },

    changeAttr (checked) {
      //this.renderer.setProperty(this.elementRef, 'checked', checked)
      this.setStyles(this.states[this.disabled ? 'disabled' : (checked ? 'focus' : 'default')])
    },
    
    setStyles (
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
          break
        case this.states.focus:
          styleIndex = 2
          break
        case this.states.disabled:
          styleIndex = 3
          break
        default:
          styleIndex = 0
      }

      this.currentBgColor = bg instanceof Array ? bg[styleIndex] : bg
      this.currentBorderColor = border instanceof Array ? border[styleIndex] : border
      this.currentColor = color instanceof Array ? color[styleIndex] : color
      this.currentLabelColor = labelColor instanceof Array ? labelColor[styleIndex] : labelColor
    },

    getStyles () {
      return {
        'background-color': this.currentBgColor,
        'border-color': this.currentBorderColor
      }
    },
    getMarkerColor () {
      return {
        'background-color': this.currentColor
      }
    },
    getLabelColor () {
      return {
        'color': this.currentLabelColor
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../../assets/sass/variables';

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
$_border-width: 2px;
$_fs: 1rem;
$_shape: 50%;
$_animation: $animation;
$_height: $_module-rem * 2;
$_width: $_module-rem * 2;

.host {
  color: #AAAFB4;
  cursor: pointer;
  display: inline-flex;
  line-height: 1;
  margin: $_module-rem / 2;
  transition: color .2s $animation;

  .tc-radio-wrap {
    align-items: center;
    cursor: pointer;
    display: flex;
    margin: 0;

    .radio-input {
      cursor: pointer;
      opacity: 0;
      position: absolute;
    }
    .tc-radio-handle {
      align-items: center;
      background: map-get($_bg, default);
      border: $_border-width $_border-style map-get($_border, default);
      border-radius: $_shape;
      cursor: pointer;
      display: flex;
      height: $_height;
      justify-content: center;
      margin: 0;
      padding: 3px;
      position: relative;
      transition:
        background .2s $animation,
        border .2s $animation;
      width: $_width;

      .check-detector {
        background: map-get($_color, default);
        border-radius: $_shape;
        display: block;
        height: 100%;
        padding: 0;
        transform: scale(0);
        transition:
          background .2s $animation,
          transform .2s $animation;
        width: 100%;
      }
    }
    .tc-radio-label {
      margin-left: 10px;
      transition: color .2s $animation;

      &:empty {
        display: none;
      }
    }
    &:hover {
      .tc-radio-handle {
        background: map-get($_bg, hover);
        border-color: map-get($_border, hover);

        .check-detector {
          background: map-get($_color, hover);
          transform: scale(1);
        }
      }
    }
  }
  &.checked {
    .tc-radio-wrap {
      .tc-radio-handle {
        background: map-get($_bg, active);
        border-color: map-get($_border, active);

        .check-detector {
          background: map-get($_color, active);
          transform: scale(1);
        }
      }
      .w-radio-label {
        color: map-get($_label-color, active);
      }
    }
  }
  &.disabled {
    .tc-radio-wrap {
      .tc-radio-handle {
        background: map-get($_bg, disabled);
        border-color: map-get($_border, disabled);

        .check-detector {
          background: map-get($_color, disabled);
          transform: scale(0);
        }
      }
    }
    &.checked {
      .tc-radio-wrap {
        .tc-radio-handle {
          background: map-get($_bg, disabled);
          border-color: map-get($_border, disabled);

          .check-detector {
            background: map-get($_color, disabled);
          }
        }
        .w-radio-label {
          color: map-get($_label-color, disabled);
        }
      }
    }
  }
  .tc-radio-horizontal > & {
    margin: 0 5px;
  }
}

</style>
