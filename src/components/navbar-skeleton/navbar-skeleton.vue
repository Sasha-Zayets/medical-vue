<template>
  <div class="navbar-host navbar-skeleton" 
      :class="[
        {'anvisible': loaders}, 
        {'horizontal': this.type === 'horizontal'},
        {'vertical': this.type === 'vertical'}
        ]">
    <div v-if="type === 'horizontal'">
    <div class="left-part d-flex align-items-center">
      <span class="navbar-button bg animated-bg d-lg-none"></span>
      <span class="sk-logo bg animated-bg d-none d-lg-block"></span>
      <span class="search d-none d-md-block bg animated-bg"></span>
    </div>
    <div class="right-part d-flex align-items-center">
      <div class="icon-box">
        <span class="icon bg animated-bg"></span>
        <span class="badge"></span>
      </div>
      <span class="avatar bg animated-bg"></span>
    </div>
  </div>

  <div v-if="type === 'vertical'">
    <div class="top-part">
      <div class="sk-logo bg animated-bg"></div>
      <div class="sk-menu">
        <span class="sk-menu-item menu-header bg-1 animated-bg"></span>
        <span class="sk-menu-item bg animated-bg w-75"></span>
        <span class="sk-menu-item bg animated-bg w-80"></span>
        <span class="sk-menu-item bg animated-bg w-50"></span>
        <span class="sk-menu-item bg animated-bg w-75"></span>
        <span class="sk-menu-item bg animated-bg w-50"></span>
        <span class="sk-menu-item bg animated-bg w-60"></span>
      </div>
      <div class="sk-menu">
        <span class="sk-menu-item menu-header bg-1 animated-bg"></span>
        <span class="sk-menu-item bg animated-bg w-60"></span>
        <span class="sk-menu-item bg animated-bg w-40"></span>
        <span class="sk-menu-item bg animated-bg w-60"></span>
        <span class="sk-menu-item bg animated-bg w-40"></span>
        <span class="sk-menu-item bg animated-bg w-40"></span>
        <span class="sk-menu-item bg animated-bg w-40"></span>
        <span class="sk-menu-item bg animated-bg w-40"></span>
      </div>
      <div class="sk-menu">
        <span class="sk-menu-item menu-header bg-1 animated-bg"></span>
        <span class="sk-menu-item bg animated-bg w-60"></span>
        <span class="sk-menu-item bg animated-bg w-50"></span>
      </div>
      <div class="sk-button animated-bg w-90"></div>
    </div>

    <div class="bottom-part">
      <div class="sk-menu">
        <span class="sk-menu-item bg-1 animated-bg w-60"></span>
        <span class="sk-menu-item bg-1 animated-bg w-80"></span>
      </div>
    </div>

    <div class="horizontal-menu">
      <span class="sk-menu-item bg animated-bg"></span>
      <span class="sk-menu-item bg animated-bg"></span>
      <span class="sk-menu-item bg animated-bg"></span>
      <span class="sk-menu-item bg animated-bg"></span>
      <span class="sk-menu-item bg animated-bg"></span>
      <span class="sk-menu-item bg animated-bg"></span>
    </div>
    </div>
</div>
</template>
<script>
export default {
  props: {
    type: {
      type: String
    },
    loader: {
      type: String
    }
  },
  computed: {
    loaders () {
      if (this.loader) {
        return true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/sass/variables';

@keyframes loaderAnimation{
  0%{
    background-position: -468px 0
  }
  100%{
    background-position: 468px 0
  }
}
.navbar-host {
  align-items: center;
  background: inherit;
  display: flex;
  height: 100%;
  justify-content: space-between;
  left: 0;
  overflow: hidden;
  padding: 0 $module-rem;
  position: absolute;
  right: 0;
  top: 0;
  transition:
    .2s opacity 0s $animation,
    0s visibility 0s $animation;
  z-index: 999;

  &.anvisible {
    opacity: 0;
    transition:
      .2s opacity .2s $animation,
      0s visibility .4s $animation;
    visibility: hidden;
  }
  .bg {
    background: #ebebeb;
  }
  .bg-1 {
    background: #f5f5f5;
  }
  .left-part {
    flex-grow: 1;
  }
  .navbar-button {
    display: block;
    height: 30px;
    margin-right: $module-rem * 2;
    width: 35px;
  }
  .search {
    border-radius: 20px;
    display: block;
    height: 40px;
    max-width: 100%;
    width: 350px;
  }
  .icon-box {
    position: relative;

    .icon {
      border-radius: 5px;
      display: block;
      height: 20px;
      width: 20px;
    }
    .badge {
      background: $error-color;
      border-radius: 20px;
      display: block;
      height: 16px;
      position: absolute;
      right: -8px;
      top: -10px;
      width: 16px;
    }
  }
  .avatar {
    border-radius: 20px;
    display: block;
    height: 40px;
    margin: 0 18px 0 25px;
    width: 40px;
  }
  .sk-logo {
    border-radius: 5px;
    display: block;
    height: $module-rem * 4;
    margin-right: $module-rem * 2;
    max-width: 169px;
    width: 100%;
  }
  .animated-bg {
    overflow: hidden;
    position: relative;
  }
  .animated-bg:before {
    animation-duration: 1.25s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-name: loaderAnimation;
    animation-timing-function: linear;
    background: transparent;
    background: linear-gradient(to right, transparent 10%, rgba(#fff,.5) 18%, transparent 33%);
    background-size: 800px 100%;
    content: '';
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
  }
  &.vertical {
    flex-direction: column;

    .top-part,
    .bottom-part {
      padding: $module-rem ($module-rem * 3);
      width: 100%;
    }
    .bottom-part {
      padding-bottom: $module-rem * 3;
    }
    .sk-logo {
      margin: 0;
    }
    .sk-menu {
      margin: ($module-rem * 4.5) 0 0;

      .sk-menu-item {
        border-radius: 3px;
        display: block;
        height: $module-rem * 1.5;
        margin: ($module-rem * 1.5) 0 0;

        &.menu-header {
          width: 50%;
        }
      }
    }

  @keyframes loaderAnimation{
    0%{
      background-position: -468px 0
    }
    100%{
      background-position: 468px 0
    }
  }
  .navbar-host {
    align-items: center;
    background: inherit;
    display: flex;
    height: 100%;
    justify-content: space-between;
    left: 0;
    overflow: hidden;
    padding: 0 $module-rem;
    position: absolute;
    right: 0;
    top: 0;
    transition:
      .2s opacity 0s $animation,
      0s visibility 0s $animation;
    z-index: 999;

    &.anvisible {
      opacity: 0;
      transition:
        .2s opacity .2s $animation,
        0s visibility .4s $animation;
      visibility: hidden;
    }
    .bg {
      background: #ebebeb;
    }
    .bg-1 {
      background: #f5f5f5;
    }
    .left-part {
      flex-grow: 1;
    }
    .navbar-button {
      display: block;
      height: 30px;
      margin-right: $module-rem * 2;
      width: 35px;
    }
    .search {
      border-radius: 20px;
      display: block;
      height: 40px;
      max-width: 100%;
      width: 350px;
    }
    .icon-box {
      position: relative;

      .icon {
        border-radius: 5px;
        display: block;
        height: 20px;
        width: 20px;
      }
      .badge {
        background: $error-color;
        border-radius: 20px;
        display: block;
        height: 16px;
        position: absolute;
        right: -8px;
        top: -10px;
        width: 16px;
      }
    }
    .avatar {
      border-radius: 20px;
      display: block;
      height: 40px;
      margin: 0 18px 0 25px;
      width: 40px;
    }
    .sk-logo {
      border-radius: 5px;
      display: block;
      height: $module-rem * 4;
      margin-right: $module-rem * 2;
      max-width: 169px;
      width: 100%;
    }
    .animated-bg {
      overflow: hidden;
      position: relative;
    }
    .animated-bg:before {
      animation-duration: 1.25s;
      animation-fill-mode: forwards;
      animation-iteration-count: infinite;
      animation-name: loaderAnimation;
      animation-timing-function: linear;
      background: transparent;
      background: linear-gradient(to right, transparent 10%, rgba(#fff,.5) 18%, transparent 33%);
      background-size: 800px 100%;
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
    &.vertical {
      flex-direction: column;

      .top-part,
      .bottom-part {
        padding: $module-rem ($module-rem * 3);
        width: 100%;
      }
      .bottom-part {
        padding-bottom: $module-rem * 3;
      }
      .sk-logo {
        margin: 0;
      }
      .sk-menu {
        margin: ($module-rem * 4.5) 0 0;

        .sk-menu-item {
          border-radius: 3px;
          display: block;
          height: $module-rem * 1.5;
          margin: ($module-rem * 1.5) 0 0;

          &.menu-header {
            width: 50%;
          }
        }
      }
      .sk-button {
        background: accent-palette(500);
        border-radius: 6px;
        height: $module-rem * 4;
        margin-top: $module-rem * 3;
      }
      .horizontal-menu {
        align-items: center;
        align-self: flex-start;
        display: none;
        height: 100%;

        .sk-menu-item {
          border-radius: 3px;
          display: block;
          height: $module-rem;
          margin: 0 $module-rem 0 0;
          width: $module-rem * 8;
        }
      }
    }
    .horizontal-vertical & {
      &.vertical {
        @media #{$min992} {
          .top-part,
          .bottom-part {
            display: none;
          }
          .horizontal-menu {
            display: flex;
          }
        }
      }
    }
  }

    .sk-button {
      background: accent-palette(500);
      border-radius: 6px;
      height: $module-rem * 4;
      margin-top: $module-rem * 3;
    }
    .horizontal-menu {
      align-items: center;
      align-self: flex-start;
      display: none;
      height: 100%;

      .sk-menu-item {
        border-radius: 3px;
        display: block;
        height: $module-rem;
        margin: 0 $module-rem 0 0;
        width: $module-rem * 8;
      }
    }
  }
  .horizontal-vertical & {
    &.vertical {
      @media #{$min992} {
        .top-part,
        .bottom-part {
          display: none;
        }
        .horizontal-menu {
          display: flex;
        }
      }
    }
  }
}

</style>
