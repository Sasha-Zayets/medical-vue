<template>
  <div class="input-host tc-input"
      :class="[
        {'input-focus': inputFocus},
        {'input-disabled': disabled},
        {'input-readonly': readonly},
        sizes
      ]"
  >
    <div class="tc-input-wrap" 
        @click="onFocus(disabled || readonly)" 
        :style="getStyles()"  
        @mouseenter="onMouseEnter()"
        @mouseleave="onMouseLeave()"> 
      <div
        class="input-prefix input-icon"
        :style="{ 'color': properties.prefixIconColor }"
        v-if="properties.prefixIconValue"
      >
        <span :class="properties.prefixIconValue"></span>
      </div>

      <div class="input-prefix" v-if="properties.prefixValue" :style="{ 'color': properties.prefixColor }">
        {{ properties.prefixValue }}
      </div>

      <div class="input-infix">
        <input
          :type="type"
          :name="name"
          :placeholder="placeholder"
          class="input-control"
          v-model="val"
          :maxlength="charLimiting"
          :readonly="readonly ? true : null"
          :required="required ? true : null"
          @focus="onFocus(disabled || readonly)"
          @blur="onBlur(disabled || readonly)"
          @keypress="changeCharLength(charLimiting, val.length)"
        >
      </div>

      <div class="input-suffix" v-if="properties.suffixValue" :style="{ 'color': properties.suffixColor }">
        {{ properties.suffixValue }}
      </div>

      <div
        class="input-suffix input-icon"
        :style="{ 'color': properties.suffixIconColor }"
        v-if="properties.suffixIconValue"
      >
        <span :class="properties.suffixIconValue"></span>
      </div>

      <div class="char-limiting" v-if="charLimiting > 0">{{ charLength }}</div>
    </div>
  </div>  
</template>
<script>
export default {
  props: {
    value: {
      type: [String, Boolean],
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String
    },
    charLimiting: {
      type: Number
    },
    prefix: {
      type: [String, Array]
    },
    suffix: {
      type: [String, Array]
    },
    prefixIcon: {
      type: [String, Array]
    },
    suffixIcon: {
      type: [String, Array]
    },
    size: {
      type: String,
      default: 'md'
    },
    required: {
      type: Boolean,
      default: false
    },
    autoSize: {
      type: Boolean,
      default: false
    },
    innerValue: {
      type: String,
      default: ''
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
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    val: '',
    charLength: '',
    simpleInput : true,
    inputFocus : false,
    properties : {
      prefixValue: '',
      prefixColor: '',
      suffixValue: '',
      suffixColor: '',
      prefixIconValue: '',
      prefixIconColor: '',
      suffixIconValue: '',
      suffixIconColor: ''
    },
    states : {
      default: 'DEFAULT',
      hover: 'HOVER',
      focus: 'FOCUS',
      disabled: 'DISABLED'
    },
    PROPERTIES_NAMES: ['prefix', 'suffix', 'prefixIcon', 'suffixIcon', 'placeholder']
  }),
  mounted () {
    this.changeCharLength(this.charLimiting, this.innerValue.length)
    this.changeValue(this.value)

    this.PROPERTIES_NAMES.forEach(property => {
      const PROPERTY = this[property]

      this.properties[`${property}Value`] = PROPERTY instanceof Array ? PROPERTY[0] : PROPERTY
      this.properties[`${property}Color`] = PROPERTY instanceof Array ? PROPERTY[1] : null
    })

    this.setStyles(!this.disabled ? this.states.default : this.states.disabled)
  },
  computed: {
    sizes () {
      return `input-${this.size}`
    }
  },
  methods: {
    changeCharLength (limit, valLength) {
      this.charLength = (limit - valLength >= 0) ? limit - valLength : 0
    },
    onMouseEnter() {
      (!this.inputFocus && !this.disabled && !this.readonly) ? this.setStyles(this.states.hover) : null
    },
    onMouseLeave() {
      (!this.inputFocus && !this.disabled && !this.readonly) ? this.setStyles(this.states.default) : null
    },
    changeValue (value) {
      this.val = value
    },
    setDisabledState (isDisabled) {
      this.disabled = isDisabled
    },

    onFocus (disabled) {
      if (!this.inputFocus && !disabled) {
        this.inputFocus = true

        this.setStyles(this.states.focus)
      }
    },

    onBlur (disabled) {
      this.inputFocus = false
      this.changeCharLength(this.charLimiting, this.val.length)
      if (!disabled) {
        //this.blur.emit()
        //this.onTouched()
        this.setStyles(this.states.default)
      }
    },
    resizable (el, factor) {
      const INT = Number(factor) || 7.7

      function resize() {
        el.parentElement.style.maxWidth = ((el.value.length * INT) + 4) + 'px'
      }

      const e = 'keyup, keypress, focus, blur, change'.split(',')

      /*for (let i = 0; i < e.length; i++) {
        el.addEventListener(e[i], resize, false)
      }*/

      resize()
    },

    setStyles (st, bg = this.bgColor, border = this.borderColor, color = this.color) {
      let styleIndex = 0;

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
    },

    getStyles () {
      return {
        'background-color': this.currentBgColor,
        'border-color': this.currentBorderColor,
        'color': this.currentColor
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
  focus: #fff,
  disabled: rgba(#ccc,.1)
);
$_border: (
  default: #ebebeb,
  hover: #ebebeb,
  focus: accent-palette(500),
  disabled: rgba(#ccc,.5)
);
$_color: (
  default: main-palette(500),
  hover: main-palette(500),
  focus: main-palette(500),
  disabled: #bdbdbd
);

$_module-rem: $module-rem;
$_placeholder-color: #a8a8a8;
$_border-style: solid;
$_border-width: 1px;
$_fs: 1rem;
$_lh: $_module-rem * 2 / $_fs;
$_padding-h: $_module-rem * 2;
$_padding-v: $_module-rem;
$_shape: 20px;
$_animation: $animation;
$_shadow-hover: $shadow-hover;

// size sm
$_fs-sm: ($_fs * .9);
$_lh-sm: $_module-rem * 2 / $_fs-sm;
$_shape-sm: ($_shape * .8);
$_padding-v-sm: ($_module-rem / 2);

// size lg
$_fs-lg: ($_fs * 1.3);
$_lh-lg: $_module-rem * 2 / $_fs-lg;
$_shape-lg: ($_shape * 1.5);
$_padding-v-lg: $_module-rem * 1.5;

@-webkit-keyframes autofill {
  to {
    color: #666;
    background: transparent;
  }
}
input:-webkit-autofill {
  -webkit-animation-name: autofill;
  -webkit-animation-fill-mode: both;
}
@mixin placeholder {
  ::-webkit-input-placeholder {@content}
  :-moz-placeholder           {@content}
  ::-moz-placeholder          {@content}
  :-ms-input-placeholder      {@content}
}

.input-host {
  border-radius: $_shape;
  color: map-get($_color, default);
  display: block;
  font-size: $_fs;
  line-height: $_lh;
  outline: none;
  width: 100%;

  .tc-input-wrap {
    align-items: center;
    background: map-get($_bg, default);
    border: $_border-width $_border-style map-get($_border, default);
    border-radius: inherit;
    cursor: text;
    display: flex;
    outline: none;
    padding: 0 $_padding-h;
    padding: 0 calc(#{$_padding-h} - .2em);
    position: relative;
    transition:
      background .2s $_animation,
      border .2s $_animation,
      box-shadow .2s $_animation,
      color .2s $_animation;
    will-change: background, border, box-shadow, color;
    width: 100%;

    .input-infix {
      flex: auto;
      min-width: 5px;
    }
    .input-control {
      background: none;
      border: 0;
      border-radius: inherit;
      box-shadow: none;
      color: inherit;
      cursor: inherit;
      display: block;
      font: inherit;
      margin: -$_border-width 0;
      outline: none;
      padding: $_padding-v .2em;
      width: 100%;

      @include placeholder {
        color: $_placeholder-color;
      }
    }
    .input-prefix,
    .input-suffix {
      color: $_placeholder-color;
      flex: none;
      padding: 0 .2em;
    }
    .input-icon {
      font-size: 1.3em;
    }
    .char-limiting {
      align-items: center;
      color: $_placeholder-color;
      display: flex;
      font-size: .9em;
      justify-content: center;
      padding: 0 .2em;
      pointer-events: none;
    }
  }
  &:hover {
    color: map-get($_color, hover);

    .tc-input-wrap {
      background: map-get($_bg, hover);
      border-color: map-get($_border, hover);
      box-shadow: $_shadow-hover;
    }
  }
  &.input-focus {
    color: map-get($_color, focus);

    .tc-input-wrap {
      background: map-get($_bg, focus);
      border-color: map-get($_border, focus);
      box-shadow: $_shadow-hover;
    }
  }
  &.ng-invalid.ng-touched,
  .has-error & {
    .tc-input-wrap {
      background-color: rgba($error-color, .1);
      border: 1px solid $error-color;
    }
  }
  &.input-sm {
    border-radius: $_shape-sm;
    font-size: $_fs-sm;
    line-height: $_lh-sm;

    .tc-input-wrap {
      .input-control {
        padding-top: $_padding-v-sm;
        padding-bottom: $_padding-v-sm;
      }
      .input-icon {
        font-size: 1.1em;
      }
    }
  }
  &.input-lg {
    border-radius: $_shape-lg;
    font-size: $_fs-lg;
    line-height: $_lh-lg;

    .tc-input-wrap {
      .input-control {
        padding-top: $_padding-v-lg;
        padding-bottom: $_padding-v-lg;
      }
    }
  }
  &.input-disabled,
  &.input-readonly {
    color: map-get($_color, disabled);

    .tc-input-wrap {
      background-color: map-get($_bg, disabled);
      border-color:  map-get($_border, disabled);
      box-shadow: none !important;
      cursor: not-allowed;

      .input-control {
        pointer-events: none;
      }
    }
  }
}

</style>
