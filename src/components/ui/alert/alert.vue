<template>
  <div class="alert-host tc-alert" 
       :class="[
        {'outline': outline},
        getTheme
       ]" 
       :style="{
          color: tcColor, 
         'background-color': tcBgColor, 
         'border-color': tcBorderColor, 
         'border-style': tcBorderStyle,
         'font-size': `${tcFontSize}`
        }"
       v-if="show">
    <span class="alert-icon" v-if="beforeIcon"><i :class="beforeIcon"></i></span>

    <div class="content">
      <h5 class="title" v-if="title">{{ title }}</h5>

      <span class="message"><slot></slot></span>
    </div>

    <button class="no-style close" v-if="removable" @click="show = !show"><i class="icofont-close-line"></i></button>

    <span class="alert-icon" v-if="afterIcon"><i :class="afterIcon"></i></span>

  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String
    },
    view: {
      type: String,
      default: 'default'
    },
    removable: {
      type: Boolean
    },
    outline: {
      type: Boolean
    },
    beforeIcon: {
      type: String
    },
    afterIcon: {
      type: String
    },
    tcColor: {
      type: String
    },
    tcBgColor: {
      type: String
    },
    tcBorderColor: {
      type: String
    },
    tcBorderStyle: {
      type: String
    },
    tcFontSize: {
      type: String
    }
  },
  computed: {
    getOutline () {
      return this.outline
    },
    getTheme () {
      return `alert-${this.view}`
    }
  },
  data: () => ({
    show: true
  })
}
</script>
<style lang="scss" scoped>
@import '../../../assets/sass/variables';

$_border-width: 1px;
$_shape: $shape;
$_shape: $shape;
$_animation: $animation;

$_types: (
	default: (
	 bg: rgba(#ebebeb,.3),
   color: inherit,
   border-color: rgba(#ebebeb,.3)
  ),

  accent: (
    bg: accent-palette(500),
    color: accent-contrast(500),
    border-color: accent-palette(500)
  ),
  success: (
    bg: $success-color,
    color: $success-contrast,
    border-color: $success-color
  ),
  info: (
    bg: $info-color,
    color: $info-contrast,
    border-color: $info-color
  ),
  warning: (
    bg: $warning-color,
    color: $warning-contrast,
    border-color: $warning-color
  ),
  error: (
    bg: $error-color,
    color: $error-contrast,
    border-color: $error-color
  )
);

.alert-host {
	border: $_border-width solid transparent;
	display: flex;
	border-radius: $_shape;
	position: relative;
	padding: 0 $module-rem;

  .content {
    align-self: center;
    display: block;
    flex: 1;
    padding: calc(#{$module-rem} * 2 - #{$_border-width}) $module-rem;

    .title {
      font-size: 1.25em;
      font-weight: 500;
      margin-bottom: $module-rem / 2;
    }
  }
  .close {
    align-self: flex-start;
    color: inherit;
    cursor: pointer;
    font-size: 1.25em;
    line-height: 1;
    margin: $module-rem;
    opacity: 0;
    transition: opacity .2s $_animation;
  }
  .alert-icon {
    align-items: center;
    background: rgba(#fff,.2);
    display: flex;
    font-size: 1.43em;
    line-height: 1;
    min-height: 100%;
    padding: $module-rem ($module-rem * 1.5);
  }
	@each $_type, $_color in $_types {
    &.alert-#{$_type} {
      background: map-get($_color, bg);
			color: map-get($_color, color);
			border-color: map-get($map: $_color, $key: border-color);

      &.outline {
				background: transparent;
				color: map-get($_color, bg);
			}
    }
	}
  &.with-before-icon {
    padding-left: 0;
  }
  &.with-after-icon {
    padding-right: 0;
  }
  &:hover {
    .close {
      opacity: 1;
    }
  }
}

</style>
