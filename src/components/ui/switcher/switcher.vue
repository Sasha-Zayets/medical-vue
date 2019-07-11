<template>
  <div class="host tc-switcher"
      :class="[
      {'checked': this._value},
      {'disabled': disabled}
      ]"
  >
    <div class="tc-switcher-wrap" @click="switch(value)">
      <div class="tc-switcher-handle" style="getStyles()">
        <input type="checkbox" class="switcher-input" :value="value" attr.checked="value">

        <span class="check-detector" :style="getDetectorColor()"></span>
      </div>

      <div class="tc-switcher-label" :style="getLabelColor()">
        <ng-content></ng-content>
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
    _value: {
      type: Boolean,
      default: false
    },
    bgColor: {
      type: String || Array
    },
    borderColor: {
      type: String || Array
    },
    color: {
      type: String
    },
    labelColor: {
      type: String || Array
    }
  },
  data: () => ({
    currentBgColor: '',
    currentBorderColor: '',
    currentColor: '',
    currentLabelColor: '',
    states: ''
  }),
  methods: {
    writeValue(value) {
      if (value) {
        this.value = value
      }
    },
    switch(bool) {
      if (!this.disabled) {
        this.value = !bool

        this.setStyles(this.states[!bool ? 'focus' : 'hover'])
      }
    },
    getStyles() {
      return {
        'background-color': this.currentBgColor,
        'border-color': this.currentBorderColor
      }
    },
    getDetectorColor() {
      return {
        'background': this.currentColor
      }
    },
    getLabelColor() {
      return {
        'color': this.currentLabelColor
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
  default: main-palette(500),
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
$_shape: 500px;
$_animation: $animation;
$_height: $_module-rem * 2;
$_width: $_module-rem * 4;

.host {
  display: inline-flex;
  line-height: 1;
  vertical-align: top;
  transition: color .2s $_animation;

  .tc-switcher-wrap {
    align-items: center;
    cursor: pointer;
    display: flex;

    .tc-switcher-handle {
      align-items: center;
      background: map-get($_bg, default);
      border: $_border-width $_border-style map-get($_border, default);
      border-radius: $_shape;
      color: map-get($_border, default);
      cursor: inherit;
      display: flex;
      height: $_height;
      margin: 0;
      padding: 0 ($_width / 4);
      position: relative;
      transition:
        background .2s $_animation,
        border .2s $_animation,
        color .2s $_animation;
      width: $_width;

      .switcher-input {
        cursor: inherit;
        opacity: 0;
        position: absolute;
      }
      .check-detector {
        background: map-get($_color, default);
        border-radius: 50%;
        display: block;
        height: $_height / 1.6;
        left: - $_border-width;
        position: absolute;
        transform: translateX(($_height - ($_height / 1.6)) / 2);
        transition:
          background .2s $_animation,
          transform .2s $_animation;
        width: $_height / 1.6;
      }
    }
    .tc-switcher-label {
      color: map-get($_label-color, default);
      margin-left: 10px;
      transition: color .2s $_animation;

      &:empty {
        display: none;
      }
    }
    &:hover {
      .tc-switcher-handle {
        background: map-get($_bg, hover);
        border-color: map-get($_border, hover);
        color: map-get($_color, hover);

        .check-detector {
          background: map-get($_color, hover);
        }
      }
      .tc-switcher-label {
        color: map-get($_label-color, hover);
      }
    }
  }
  &.checked {
    .tc-switcher-wrap {
      .tc-switcher-handle {
        background: map-get($_bg, active);
        border-color: map-get($_border, active);

        .check-detector {
          background: map-get($_color, active);
          transform: translateX($_width - ($_height / 1.6) - (($_height - ($_height / 1.6)) / 2));
        }
      }
      .tc-switcher-label {
        color: map-get($_label-color, active);
      }
    }
  }
  &.disabled {
    .tc-switcher-wrap {
      cursor: not-allowed;

      .tc-switcher-handle {
        background: map-get($_bg, disabled);
        border-color: map-get($_border, disabled);

        .check-detector {
          background: map-get($_color, disabled);
        }
      }
      .tc-switcher-label {
        color: map-get($_label-color, disabled);
      }
    }
    &.checked {
      .tc-switcher-wrap {
        .tc-switcher-handle {
          .check-detector {
            background: map-get($_color, disabled);
          }
        }
      }
    }
  }
}

</style>
