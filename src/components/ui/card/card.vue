<template>
  <div class="card-host tc-card"
    :class="[
      {'outline': outline},
      {'bg-image': bgImg},
      {'text-right': this.align === 'right'},
      {'text-center': this.align === 'center'},
      getTheme
    ]"
    :style="{
      'background-image': bgImage,
      'background-color': tcBgColor,
      'border-radius': `${shape}px`,
      'color': tcColor,
      'border': `1px solid ${tcBorderColor}`,
      'border-color': `${tcBorderColor}`,
      gradients
    }"
  >
    <img :src="img" v-if="img" class="card-img">

    <div class="card-header" v-if="title">
      <h3 class="card-title">{{ title }}</h3>
    </div>

    <div class="card-content" :style="{ 'padding': padding }">
      <slot></slot>
    </div>
  </div>  
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    outline: {
      type: Boolean
    },
    bgImg: {
      type: String
    },
    view: {
      type: String,
      default: 'default'
    },
    img: {
      type: String
    },
    padding: {
      type: Number
    },
    tcGradient: {
      type: [Array],
      required: false
    },
    align: {
      type: String
    },
    tcColor: {
      type: String
    },
    shape: {
      type: Number,
      required: false
    },
    tcBgColor: {
      type: String,
      required: false
    },
    tcBorderColor: {
      type: String,
      required: false
    },
    gradient: {
      type: String
    }
  },
  computed: {
    getTheme () {
      return `card-${this.view}`
    },
    bgImage () {
      return !this.gradient ? (this.bgImg ? `url(${this.bgImg})` : null) : this.gradient
    },
    gradients () {
      return `background-image: linear-gradient(to right, rgb(237, 85, 100) 0%, rgb(237, 131, 208) 100%);"`
    }
  }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/sass/typography';

@import '../../../assets/sass/variables';

$_module-rem: $module-rem;
$_shape: $shape;
$_shadow: $shadow;
$_title-fs: 2rem;
$_title-fw: 500;

$_types: (
  default: (
    bg: transparent,
    color: inherit
  ),
  accent: (
    bg: accent-palette(500),
    color: accent-contrast(500)
  ),
  success: (
    bg: $success-color,
    color: $success-contrast,
  ),
  info: (
    bg: $info-color,
    color: $info-contrast,
  ),
  warning: (
    bg: $warning-color,
    color: $warning-contrast,
  ),
  error: (
    bg: $error-color,
    color: $error-contrast,
  )
);

.card-host {
  background: transparent 50% 50% no-repeat;
  background-size: cover;
  border-radius: $_shape;
	display: block;
	margin-bottom: $_module-rem * 4;
	position: relative;
  h6 {
    font-weight: 600;
  }
  h4 {
    font-size: 1.71428572rem;
    line-height: 1.25;
    font-family: "Lato", sans-serif;
    font-weight: 700;
  }
  .card-img {
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    width: 100%;
  }
  .card-header {
    margin: 0;

    .card-title {
      font-size: $_title-fs;
      font-weight: $_title-fw;
      margin: 0;
    }
  }
  .card-content {
    //color: rgb(157, 157, 157);
    display: block;
    padding: ($_module-rem * 2) 0 0;
    position: relative;
    width: 100%;

    &:first-child {
      padding-top: 0;
    }
  }
  .bg-image {
    border-radius: inherit;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  img {
    max-width: 100%;
    height: auto;
  }

  @each $type, $color in $_types {
    &.card-#{$type} {
      background: map-get($color, bg);
      box-shadow: $_shadow;
      color: map-get($color, color);

      .card-header {
        padding: $_module-rem ($_module-rem * 2) 0;
      }
      .card-content {
        padding: $_module-rem * 2;
      }
      &.outline {
        border-color: map-get($color, bg);
      }
    }
  }
  &.custom-bg-color,
  &.custom-border-color,
  &.custom-gradient,
  &.outline,
  &.bg-image {
    box-shadow: $_shadow;

    .card-header {
      padding: $_module-rem ($_module-rem * 2) 0;
    }
    .card-content {
      padding: $_module-rem * 2;
    }
  }
	&.outline {
		background: none;
    border: 1px solid main-palette(500);
    color: inherit;
	}
}



</style>
