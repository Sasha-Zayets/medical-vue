<template>
  <div 
    class="host tc-rating"
    :class="[
      {'rating-disabled': disabled},
      {'rating-numbered': this.view === 'number'}
    ]"
  >
    <i 
      v-for="(icon, index) of icons"
      :key="index"
      :class="['icon', (view !== 'number') ? iconClass : 'number', {'active': value >= icon }]"
      @click="setValue(icon, disabled)"
      :style="getIconStyles(value >= icon)"
      @mouseover="addHover(icon, value)"
      @mouseleave="removeHover(value)"
    >
      {{ (view === 'number') ? icon : null }}
    </i>
  </div>
</template>
<script>
export default {
  props: {
    iconsNumber: {
      type: Number,
      default: 5
    },
    iconClass: {
      type: String,
      default: 'icofont-star'
    },
    view: {
      type: String
    },
    color: {
      type: String || Array,
      default: []
    },
    innerValue: {
      type: Number,
      default: 0
    }
  },
  created () {
    this.icons = Array.from(new Array(this.iconsNumber), (val, index) => index + 1)
    this.value = this.innerValue <= this.iconsNumber ? this.innerValue : 0
  },
  data: () => ({
    icons: []
  }),
  methods: {
    // add class 'hover'
    addHover (i, val, disabled = this.disabled) {
      if (!disabled) {
        this.icons.forEach((icon, index) => {
          const ITEM_REF = this.element.nativeElement.children[index]
          const COLOR = (index < val) ? this.color[2] : (i > index ? this.color[1] : this.color[0])

          this.renderer.setStyle(ITEM_REF, 'color', COLOR)

          if (i > index) {
            this.renderer.addClass(ITEM_REF, 'hover')
          } else {
            this.renderer.removeClass(ITEM_REF, 'hover')
          }
        })
      }
    },

    // remove class 'hover'
    removeHover (val, disabled = this.disabled) {
      if (!disabled) {
        this.icons.forEach((icon, index) => {
          const ITEM_REF = this.element.nativeElement.children[index]

          this.renderer.setStyle(ITEM_REF, 'color', index < val ? this.color[2] : this.color[0])
          this.renderer.removeClass(ITEM_REF, 'hover')
        })
      }
    },

    // get icon color
    getIconStyles (active) {
      return {
        'color': this.color.length ? (active ? this.color[2] : this.color[0]) : null
      }
    },
    // write value
    writeValue (value) {
      this.innerValue = value
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/sass/variables';

$_module-rem: $module-rem;
$_animation: $animation;
$_icon-fz: $main-lh * 1rem;
$_color: (
  default: #c1c1c1,
  hover: #ffeb3d,
  active: #faa110
);

.host {
	display: flex;
  font-size: $_icon-fz;
  margin: 0 (-$_module-rem / 4);

	.icon {
    color: map-get($_color, default);
    cursor: pointer;
    display: block;
		font-size: inherit;
    font-style: normal;
		margin: 0 ($_module-rem / 4);
		transition:
      border .2s $_animation,
      color .2s $_animation;

    &.number {
      border: 2px solid map-get($_color, default);
      min-width: $_module-rem * 3;
      padding: calc(#{$_module-rem} / 2 - 2px);
      text-align: center;
    }
    &.hover {
      color: map-get($_color, hover);

      &.number {
        border-color: map-get($_color, hover);
      }
    }
    &.active {
      color: map-get($_color, active);

      &.number {
        border-color: map-get($_color, active);
      }
    }
	}
  &.rating-numbered {
    font-size: 1rem;
  }
  &.rating-disabled {
    .icon {
      cursor: default;
    }
  }
}

</style>
