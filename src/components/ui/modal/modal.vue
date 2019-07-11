<template>
  <div class="host tc-modal">
    <div class="modal-overlay" @click="closeWindow(options.overlayClose)" v-if="options.overlay"></div>

      <div class="modal-window-wrap">
        <div class="modal-window" :style="{ 'width': options.width, 'height': options.height }">
          <button class="no-style close-modal" v-if="options.closeButton" @click="closeWindow(true)">
            <i class="icofont-close-line"></i>
          </button>

          <div class="modal-header" v-if="header">
            <h2 v-if="title" class="title">{{ title }}</h2>

            <header v-if="!title"></header>
          </div>

          <div class="modal-body">
            <p v-if="bodyText">{{ bodyText }}</p>

            <div v-if="!bodyText"></div>
          </div>

          <div class="modal-footer" v-if="footer">
            <p v-if="footerText">{{ footerTeModalsxt }}</p>

            <footer v-if="!footerText"></footer>
          </div>
        </div>
      </div>
  </div>  
</template>
<script>
export default {
  props: {
    body: {
      type: String
    },
    header: {
      type: String
    },
    footer: {
      type: String
    },
    opened: {
      type: Boolean
    },
    options: {
      type: [String, Array]
    }
  },
  data: () => ({
    title: '',
    bodyText: '',
    footerText: '',
    defaultOtions: {
      height: 'auto',
      width: 500,
      closeButton: false,
      overlay: true,
      overlayClose: true
    }
  }),
  created () {
    this.options = {...this.defaultOtions, ...this.options};

    if (typeof this.options.height === 'number') {
      this.options.height = this.options.height + 'px'
    }

    if (typeof this.options.width === 'number') {
      this.options.width = this.options.width + 'px'
    }

    this.getStringData(this.header, 'title')
    this.getStringData(this.body, 'bodyText')
    this.getStringData(this.footer, 'footerText')

    
  },
  methods: {
    getStringData (data, name) {
      this[name] = (typeof data === 'string') ? data : null
    },
    hideModal() {
      let elem = this.elementRef.nativeElement
      this.renderer.removeClass(elem,'opened')
    },
    closeWindow(bool) {
      if (bool) this.close.emit(true)
    }
  }
}
</script>
<style lang="scss" scoped>
@import "../../../assets/sass/variables";

$_module-rem: $module-rem;
$_bg: #fff;
$_overlay-bg: rgba(#000,.1);
$_width: $_module-rem * 50;
$_h-paddig: $_module-rem * 2;
$_v-paddig: $_module-rem * 2;
$_title-fs: 2rem;
$_title-fw: 500;
$_footer-bg: rgba(#000,.05);
$_animation: $animation;
$_shadow: $shadow;
$_shape: $shape;
$_error-color: $error-color;

.host {
  align-items: center;
  display: flex;
  justify-content: center;
  left: 0;
  height: 100%;
  max-height: 100%;
  max-width: 100%;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9997;

  .modal-overlay {
    background: $_overlay-bg;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    top: 0;
    transition: .2s opacity $_animation;
    width: 100%;
  }
  .modal-window-wrap {
    max-height: 100%;
    max-width: 100%;
    overflow: auto;
    padding: $_module-rem * 2;

    .modal-window {
      background: $_bg;
      border-radius: $_shape;
      box-shadow: $_shadow;
      max-height: 100%;
      max-width: 100%;
      opacity: 0;
      position: relative;
      transition: opacity .2s $_animation;
      width: $_width;

      .close-modal {
        font-size: 20px;
        line-height: 1;
        position: absolute;
        right: 3px;
        top: 3px;
        transition: .2s color $_animation;

        &:hover {
          color: $_error-color;
        }
      }
      .modal-header {
        align-items: center;
        display: flex;
        margin: -$_module-rem / 2;
        padding: $_v-paddig $_h-paddig;

        & {
          > * {
            margin: $_module-rem / 2;
          }
          .title {
            font-size: $_title-fs;
            font-weight: $_title-fw;
          }
        }
      }
      .modal-body {
        padding: $_v-paddig $_h-paddig;
      }
      .modal-footer {
        background: $_footer-bg;
        padding: $_v-paddig $_h-paddig;

        ::ng-deep {
          .actions {
            display: flex;
            flex-wrap: wrap;
            margin: -$_module-rem / 2;

            > * {
              margin: $_module-rem / 2;
            }
          }
        }
      }
    }
  }
  &.opened {
    .modal-overlay {
      opacity: 1;
      transition: .2s opacity 0s $_animation;
    }
    .modal-window-wrap {
      .modal-window {
        opacity: 1;
        transition: .2s opacity .2s $_animation;
      }
    }
  }
}

</style>
