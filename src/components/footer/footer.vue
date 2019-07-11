<template>
  <div class="footer-host footer"
      :class="[
        {}
      ]"
  >
    <div class="footer-wrap">
      <div class="row align-items-center">
        <div class="col-12 col-md-6 d-none d-md-block">
          <ul class="page-breadcrumbs" v-if="pageData && pageData.breadcrumbs">
            <li class="item" v-for="(item, index) of pageData.breadcrumbs" :key="index">
              <router-link class="link" :to="item.route" v-if="item.route">{{ item.title }}</router-link>

              <span v-if="!item.route">{{ item.title }}</span>

              <i class="separator icofont-thin-right" v-if="!last"></i>
            </li>
          </ul>
        </div>

        <div class="col-12 col-md-6 text-right">
          <div class="d-flex align-items-center justify-content-center justify-content-md-end">
            <span>Version 1.0.0</span>
            <button class="no-style ml-2" @click="openModal(modalBody, 'Application\'s settings')">
              <tc-icon :iconClass="'icofont-ui-settings'" :tcFontSize="26" :tcColor="['#336cfb', '#336cfb']"></tc-icon>
            </button>
          </div>
        </div>
      </div>

      <div class="footer-skeleton">
        <div class="row align-items-center">
          <div class="col-12 col-md-6 d-none d-md-block">
            <ul class="page-breadcrumbs">
              <li class="item bg-1 animated-bg"></li>
              <li class="item bg animated-bg"></li>
            </ul>
          </div>

          <div class="col-12 col-md-6">
            <div class="info justify-content-center justify-content-md-end">
              <div class="version bg animated-bg"></div>
              <div class="settings animated-bg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Settings modal window -->
    <!-- <ng-container>
      <ng-template #modalBody>
        <app-settings></app-settings>
      </ng-template>
    </ng-container> -->
    <!-- end Settings modal window -->

  </div>
  
</template>
<script>
export default {
 props: {
   loaded: {
     type: Boolean
   },
   boxed: {
     type: String
   },
   pageData: {
     type: Object
   }
 },
 data: () => ({
   modal: {}
 }),
 methods: {
   openModal (body, header = null, footer = null, options = null) {
    this.modal.open({
      body: body,
      header: header,
      footer: footer,
      options: options
    })
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
.footer-host {
  background: #FBFBFB;
  border-top: 1px solid #E9E9E9;
  bottom: 0;
  display: block;
  height: $footer-height;
  left: 0;
  position: absolute;
  right: 0;

  .footer-wrap {
    background: inherit;
    height: 100%;
    margin: 0 auto;
    padding: $module-rem ($module-rem * 2);
    position: relative;

    .page-breadcrumbs {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      list-style-type: none;
      margin: 0;
      padding: 0;

      .item {
        display: block;
        vertical-align: top;
        white-space: nowrap;

        .link {
          color: currentColor;
          opacity: .5;
          text-decoration: none;
          transition: opacity .2s $animation;

          &:hover {
            opacity: 1;
          }
        }
        .separator {
          margin: 0 ($module-rem / 2) -2px;
        }
      }
    }
    .footer-skeleton {
      background: inherit;
      height: 100%;
      left: 0;
      padding: $module-rem ($module-rem * 2);
      position: absolute;
      right: 0;
      top: 0;
      transition:
        .2s opacity 0s $animation,
        0s visibility 0s $animation;
      z-index: 999;

      .row {
        height: inherit;
      }
      .bg {
        background: #ebebeb;
      }
      .bg-1 {
        background: #f5f5f5;
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
      .page-breadcrumbs {
        margin: 0 -($module-rem / 2);

        .item {
          border-radius: 3px;
          display: block;
          height: $module-rem;
          margin: 0 ($module-rem / 2);
          width: 80px;
        }
      }
      .info {
        align-items: center;
        display: flex;
        margin: 0 -($module-rem / 2);

        .version {
          border-radius: 3px;
          display: block;
          height: $module-rem;
          margin: 0 ($module-rem / 2);
          width: 80px;
        }
        .settings {
          background: accent-palette(500);
          border-radius: 500px;
          display: block;
          height: $module-rem * 2;
          margin: 0 ($module-rem / 2);
          width: $module-rem * 2;
        }
      }
    }
  }
  &.boxed {
    .footer-wrap {
      max-width: $boxed-width;
      max-width: var(--boxed-width);
    }
  }
  &.loaded {
    .footer-wrap {
      .footer-skeleton {
        opacity: 0;
        transition:
          .2s opacity .2s $animation,
          0s visibility .4s $animation;
        visibility: hidden;
      }
    }
  }
}

</style>
