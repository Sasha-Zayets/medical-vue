<template>
  <div class="host tc-textarea"
      :class="[
        {'textarea-focus': focus},
        {'textarea-disabled': disabled},
        {'textarea-not-resize': !this.resize || this.autoGrow},
        {'textarea-readonly': readonly}
      ]"
      :style="[
        {'height': controlHeight()}
      ]"
  >
    <div class="tc-textarea-wrap">
    <textarea
      :name="name"
      placeholder="placeholder"
      v-model="value"
      [attr.maxlength]="charLimiter"
      class="textarea-control"
      @blur="onBlur(disabled)"
      @focus="onFocus(disabled)"
      :style="getStyles()"
      [attr.rows]="rows"
    ></textarea>

    <div class="char-limiter" v-if="charLimiter">
      <span class="limiter-before" v-if="limiter.before">{{ limiter.before }}</span>
      <span class="limiter-counter">{{ limiter.counter }}</span>
      <span class="limiter-after" v-if="limiter.after">{{ limiter.after }}</span>
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
    readonly: {
      type: Boolean,
      default: false
    },
    name: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: ''
    },
    charLimiter: {
      type: Number
    },
    required: {
      type: Boolean,
      default: false
    },
    innerValue: {
      type: String,
      default: ''
    },
    bgColor: {
      type: String || Array
    },
    borderColor: {
      type: String || Array
    },
    color: {
      type: String || Array
    },
    autoGrow: {
      type: Boolean,
      default: false
    },
    resize: {
      type: Boolean,
      default: false
    },
    height: {
      type: Number || String
    },
    rows: {
      type: Number
    }
  },
  methods: {
    onFocus(disabled) {
      if (!this.textareaFocus && !disabled) {
        this.element.nativeElement.querySelector('.textarea-control').focus();
        this.textareaFocus = true;

        this.setStyles(this.states.focus);
      }
    },
    onBlur(disabled) {
      this.textareaFocus = false;

      !disabled ? this.setStyles(this.states.default) : null;
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/sass/variables';

$_bg: (
  default: #EBEBEB,
  hover: #EBEBEB,
  focus: rgba(accent-palette(500),.01),
  disabled: rgba(#ccc,.1)
);
$_border: (
  default: #EBEBEB,
  hover: #EBEBEB,
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
$_lh: decimal-round($_module-rem / $_fs * 2);
$_padding-h: $_module-rem * 2;
$_padding-v: $_module-rem;
$_shape: 20px;
$_animation: $animation;
$_shadow-hover: $shadow-hover;
$_min-height: ($_module-rem * 8);

@mixin placeholder {
  ::-webkit-input-placeholder {@content}
  :-moz-placeholder           {@content}
  ::-moz-placeholder          {@content}
  :-ms-input-placeholder      {@content}
}

.host {
  border-radius: $_shape;
  color: map-get($_color, default);
  display: block;
  font-size: $_fs;
  line-height: $_lh;
  width: 100%;

  .tc-textarea-wrap {
    border-radius: inherit;
    cursor: text;
    height: 100%;
    outline: none;
    padding: 0;
    position: relative;
    width: 100%;

    .textarea-control {
      background: map-get($_bg, default);
      border: $_border-width $_border-style map-get($_border, default);
      border-radius: inherit;
      box-shadow : none;
      color: inherit;
      cursor: inherit;
      display: block;
      font: inherit;
      height: 100%;
      margin: 0;
      min-height: $_min-height;
      outline: none;
      padding: $_padding-v $_padding-h;
      transition:
        background .2s $_animation,
        border .2s $_animation,
        box-shadow .2s $_animation,
        color .2s $_animation;
      width: 100%;

      @include placeholder {
        color: $_placeholder-color;
      }
    }
    .char-limiter {
      color: $_placeholder-color;
      display: flex;
      font-size: .9em;
      justify-content: flex-end;
      margin: 0 -2px;
      pointer-events: none;

      span {
        display: block;
        margin: ($_module-rem / 2) 2px 0;
      }
    }
  }
  &:hover {
    color: map-get($_color, hover);

    .tc-textarea-wrap {
      .textarea-control {
        background: map-get($_bg, hover);
        border-color: map-get($_border, hover);
        box-shadow: $_shadow-hover;
      }
    }
  }
  &.textarea-focus {
    color: map-get($_color, focus);

    .tc-textarea-wrap {
      .textarea-control {
        background: map-get($_bg, focus);
        border-color: map-get($_border, focus);
        box-shadow: $_shadow-hover;
      }
    }
  }
  &.ng-invalid.ng-touched,
  .has-error & {
    .tc-textarea-wrap {
      .textarea-control {
        background-color: rgba($error-color, .1);
        border: 1px solid $error-color;
      }
    }
  }
  &.textarea-disabled,
  &.textarea-readonly {
    color: map-get($_color, disabled);

    .tc-textarea-wrap {
      cursor: not-allowed;

      .textarea-control {
        background-color: map-get($_bg, disabled);
        border-color:  map-get($_border, disabled);
        pointer-events: none;
        box-shadow: none;
      }
    }
  }
  &.textarea-not-resize {
    .tc-textarea-wrap {
      .textarea-control {
        resize: none;
      }
    }
  }
}

</style>
