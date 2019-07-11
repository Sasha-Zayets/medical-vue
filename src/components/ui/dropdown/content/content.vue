<template>
  <div class="host tc-dropdown-content"
    :class="[
      {'tc-dropdown-content-inside': appendToBody},
      {'tc-dropdown-global-positioning': globalPositioning},
      {'fade-animation': this.animation === 'fade' ? true : false},
      {'fadeInUp-animation': this.animation === 'fadeInUp' ? true : false},
      {'fadeInDown-animation': this.animation === 'fadeInDown' ? true : false},
      {'fadeInLeft-animation': this.animation === 'fadeInLeft' ? true : false},
      {'fadeInRight-animation': this.animation === 'fadeInRight' ? true : false},
      {'zoom-animation': this.animation === 'zoom' ? true : false}
    ]"
  >
    <div class="dropdown-content-wrap" :style="{ 'width': width }">
      <slot></slot>
    </div>

    <div class="dropdown-overlay" @click="hide()" @keypress="eventHandler($event.keyCode)">
      <span class="overlay-bg" v-if="overlay"></span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    opened: {
      type: Boolean,
      default: false
    },
    appendToBody: {
      type: Boolean,
      default: true
    },
    globalPositioning: {
      type: Boolean,
      default: false
    },
    overlay: {
      type: Boolean,
      default: true
    },
    offset: {
      type: [Array, Number]
    },
    animation: {
      type: String,
      default: 'fade'
    },
    align: {
      type: String,
      default: 'left'
    },
    width: {
      type: [Number, String],
      default: 280
    },
    maxWidth: {
      type: [Number, String],
      default: '100%'
    },
    maxHeight: {
      type: [Number, String],
      default: 400
    }
  },
  // created() {
  //    // append dropdown content to the body
  //   if (this.appendToBody || this.globalPositioning) {
  //     document.body.appendChild($element.nativeElement)
  //   }

  //   if (typeof this.width === 'number') {
  //     this.width = this.width + 'px'
  //   }
  // },
  // update () {
  //   if (this.position) {
  //     const element = this.getContentElement()
  //     const position = this.calcPositionOffset(this.position)

  //     if (position) {
  //       this.renderer.setStyle(element, 'top', `${ position.top }px`)
  //       this.renderer.setStyle(element, 'left', `${ position.left }px`)
  //     }
  //   }
  // },
  // methods: {
  //   show () {
  //     this.opened = true
  //   },
  //   // hide dropdown content
  //   hide () {
  //     this.opened = false
  //     this.closeDropdown.emit(false)
  //   },
  //   // get dropdown children elements
  //   getContentElement () {
  //     return this.$element.nativeElement.children[0]
  //   },
  //   // updates the dropdown content position
  //   updatePosition (position) {
  //     this.position = position
  //   },
  //   // calculation dropdown position
  //   calcPositionOffset (position) {
  //     if (!position) {
  //       return
  //     }

  //     const element = this.getContentElement()
  //     const supportPageOffset = window.pageXOffset !== undefined
  //     const isCSS1Compat = ((document.compatMode || '') === 'CSS1Compat')
  //     const x = supportPageOffset ? window.pageXOffset : isCSS1Compat ? document.documentElement.scrollLeft : document.body.scrollLeft
  //     const y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop
  //     const clientWidth = element.clientWidth
  //     const clientHeight = element.clientHeight
  //     const buttonHeight = position.height
  //     const buttonWidth = position.width

  //     let { top, left } = this.applyOffset(
  //       buttonHeight + (this.appendToBody ? (position.top + y) : 0),
  //       (this.appendToBody) ? position.left + x : 0
  //     )

  //     if (this.align === 'right') {
  //       left -= clientWidth - buttonWidth
  //     } else if (this.align === 'center') {
  //       left -= (clientWidth - buttonWidth) / 2
  //     }

  //     return { top, left }
  //   },
  //   // calculation dropdown offset
  //   applyOffset (top, left) {
  //     const offset = this.offset

  //     if (
  //       !offset ||
  //       !(offset instanceof Array) ||
  //       (offset instanceof Array && (offset.length === 0) || (typeof offset[0] !== 'number'
  //         || !this.appendToBody))
  //     ) {
  //       return { top, left }
  //     }

  //     top += offset[0]

  //     if ((typeof offset[1] === 'number') && (offset[1] !== 0)) {
  //       left += offset[1]
  //     }

  //     return { top, left }
  //   }
  // },
  data: () => ({
    closeDropdown: false
  })
}
</script>
<style lang="scss" scoped>
@import '../../../../assets/sass/variables';

$_overlay-bg: rgba(main-palette(500),.1);
$_bg: #fff;
$_border-color: rgba(main-palette(500),.1);
$_shape: $shape;
$_transition: $animation;
$_shadow: $shadow;

.host {
  bottom: 0;
  height: 100%;
  left: 0;
  overflow-x: hidden;
  position: absolute;
  right: 0;
  transition: 0s visibility .3s $_transition;
  visibility: hidden;

  .dropdown-content-wrap {
    background: $_bg;
    border-radius: $_shape;
    box-shadow: $_shadow;
    left: 50%;
    margin: 0;
    opacity: 0;
    padding: $module-rem 0;
    position: absolute;
    top: 0;
    transition: .2s opacity 0s $_transition;
    width: 280px;
    z-index: 9998;
    @media #{$max767} {
      left: 0 !important;
      width: 100% !important;
    }

    & {
      .menu-list {
        font-size: 13px;
        list-style-type: none;
        margin: 0;
        padding: 10px 0;

        li {
          a {
            color: rgba(#333, .65);
            display: block;
            padding: 5px 15px;
            text-decoration: none;

            &:hover {
              color: #333;
            }
          }
        }
      }
      .menu-header,
      .menu-footer {
        margin: 0;
        padding: $module-rem ($module-rem * 2);
      }
      .menu-header {
        align-items: center;
        border-radius: $_shape $_shape 0 0;
        color: main-palette(500);
        display: flex;
        justify-content: space-between;
      }
      .menu-footer {
        border-radius: 0 0 $_shape $_shape;
      }
      .list {
        list-style-type: none;
        margin: 0;
        max-height: 280px;
        overflow: auto;
        padding: 0;

        > li {
          > a {
            color: $main-color;
            color: var(--main-color);
            display: flex;
            padding: $module-rem ($module-rem * 2);
            text-decoration: none;
            transition:
              background .2s $_transition,
              color .2s $_transition;

            .icon,
            .avatar,
            .tc-icon {
              align-self: flex-start;
              margin-right: $module-rem;
            }
            .icon {
              background: rgba(main-palette(500),.1);
              border-radius: 50%;
              font-size: 1rem;
              height: auto;
              padding: $module-rem;
              transition: background .2s $_transition;
              width: auto;
            }
            .avatar {
              border-radius: 50%;
              height: 40px;
              width: 40px;
            }
            .content {
              font-size: .85rem;

              .desc {
                display: block;
              }
              .date,
              .size {
                display: block;
                font-size: .75rem;
                margin-top: 4px;
                opacity: .6;
              }
              .meta {
                align-items: flex-end;
                display: flex;
                justify-content: space-between;
                line-height: 1.3;
                margin-bottom: 4px;

                .date {
                  margin: 0 0 0 11px;
                }
              }
            }
            &:hover {
              color: accent-palette(500);

              .icon {
                background: accent-palette(500);
                color: accent-contrast(500);
              }
            }
          }
          &:first-child {
            > a {
              border-top: 0;
            }
          }
          .empty-item {
            display: block;
            padding: $module-rem ($module-rem * 2);
          }
        }
      }
      .author-info {
        padding: ($module-rem * 2) ($module-rem) 0;
        text-align: center;

        .author-name {
          font-size: 1rem;
        }
      }
    }
  }
  .dropdown-overlay {
    bottom: 0;
    left: 0;
    opacity: 0;
    position: fixed;
    right: 0;
    top: 0;
    transition: .1s opacity .2s $_transition;
    z-index: 9997;

    .overlay-bg {
      background: $_overlay-bg;
      display: block;
      height: 100%;
      width: 100%;
    }
  }
  &.fadeInUp-animation,
  &.fadeInDown-animation,
  &.fadeInLeft-animation,
  &.fadeInRight-animation,
  &.zoom-animation {
    .dropdown-content-wrap {
      transition:
        .2s opacity 0s $_transition,
        .2s transform 0s $_transition;
    }
  }
  &.fadeInUp-animation {
    .dropdown-content-wrap {
      transform: translateY(30px);
    }
  }
  &.fadeInDown-animation {
    .dropdown-content-wrap {
      transform: translateY(-30px);
    }
  }
  &.fadeInLeft-animation {
    .dropdown-content-wrap {
      transform: translateX(100%);
    }
  }
  &.fadeInRight-animation {
    .dropdown-content-wrap {
      transform: translateX(-100%);
    }
  }
  &.zoom-animation {
    .dropdown-content-wrap {
      transform: scale(0);
    }
  }
  &.opened {
    visibility: visible;
    transition: 0s visibility 0s $_transition;

    .dropdown-content-wrap {
      opacity: 1;
      transition: .2s opacity .1s $_transition;
    }
    .dropdown-overlay {
      opacity: 1;
      transition: .1s opacity 0s $_transition;
    }
    &.fadeInUp-animation,
    &.fadeInDown-animation,
    &.fadeInLeft-animation,
    &.fadeInRight-animation {
      .dropdown-content-wrap {
        transform: translate(0);
        transition:
          .2s opacity .1s $_transition,
          .2s transform .1s $_transition;
      }
    }
    &.zoom-animation {
      .dropdown-content-wrap {
        transform: scale(1);
        transition:
          .2s opacity .1s $_transition,
          .2s transform .1s $_transition;
      }
    }
  }
}

</style>
