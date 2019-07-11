<template>
  <div class="default">
      <div class="app-container" :class="{ 'boxed': appSettings.boxed }" v-if="appSettings">
        <!-- Horizontal navbar -->
        <navbar
          :boxed="appSettings.boxed"
          :tcBgColor="appSettings.topbarBg"
          :tcColor="appSettings.topbarColor"
          :minHeight="'4.28571429rem'"
        >
          <button
            class="no-style navbar-toggle d-lg-none"
            @click="toggleSidebar(true)"
          >
            <span></span><span></span><span></span>
          </button>

          <!-- <search [data]="searchData" [layout]="'vertical'" class="d-none d-md-block"></search> -->

          <actions :layout="'vertical'"></actions>

          <!-- <navbar-skeleton :type="'horizontal'" :loaded="loaded"></navbar-skeleton> -->
        </navbar>
        <!-- end Horizontal navbar -->

        <!-- Vertical navbar -->
        <navbar
          :orientation="'vertical'"
          :tcBgColor="appSettings.sidebarBg"
          :tcColor="appSettings.sidebarColor"
          :opened="appSettings.sidebarOpened"
        >
          <button
            class="no-style navbar-close icofont-close-line d-lg-none"
            @click="toggleSidebar(false)"
          ></button>

          <logo src="'/assets/img/logo.svg'" :width="147" :height="33"></logo>

          <app-menu :src="'../../assets/data/menu.json'"></app-menu>

          <div class="add-patient">
            <tc-button
              :view="'accent'"
              :beforeIcon="'icofont-plus'"
              @click="openModal(modalBody, 'Add new patient', modalFooter)"
            >Add Patient</tc-button>
          </div>

          <!-- <menu class="assistant-menu">
            <a href="#" [routerLink]="['/vertical', 'settings']" class="link">
              <tc-icon [iconClass]="'icofont-ui-settings'" [tcFontSize]="'1.3em'"></tc-icon>Settings
            </a>

            <a href="#" class="link">
              <tc-icon [iconClass]="'icofont-question-square'" [tcFontSize]="'1.3em'"></tc-icon>FAQ & Support
            </a>
          </menu> -->

          <!-- <navbar-skeleton type="'vertical'" loaded="loaded"></navbar-skeleton> -->
        </navbar>
        <!-- end Vertical navbar -->

         <!-- :class="{ 'loaded': pageData.loaded }" -->
        <main class="main-content" @scroll="onScroll($event)">
          <!-- <div class="app-loader" v-if="!pageData?.loaded"><i class="icofont-spinner-alt-4 rotate"></i></div> -->

          <!-- :class="{ 'full-filled': pageData?.fullFilled }" -->
          <div class="main-content-wrap" >
            <header class="page-header" v-if="pageData && !pageData.fullFilled && pageData.title.length">
              <h1 class="page-title">{{ pageData.title }}</h1>
            </header>

            <router-view></router-view>
          </div>
        </main>

        <!-- <app-footer :boxed="appSettings.boxed" :pageData="pageData" :loaded="loaded"></app-footer> -->

        <div class="content-overlay" :class="{ 'show': appSettings.sidebarOpened }" @click="toggleSidebar(false)"></div>
      </div>

      <!-- Modal window -->
      <!-- <ng-container>
        <ng-template #modalBody>
          <form [formGroup]="patientForm" novalidate class="new-patient-form">
            <tc-form-group class="avatar-box d-flex">
              <input type="file" accept="image/*" (change)="onFileChanged($event)" #fileInput hidden>

              <tc-avatar [src]="currentAvatar"></tc-avatar>
              <button
                tc-button
                [type]="'button'"
                [afterIcon]="'icofont-ui-user'"
                [view]="'accent'"
                [outline]="true"
                (click)="fileInput.click()"
              >
                Select image
              </button>
            </tc-form-group>

            <tc-form-group>
              <tc-input [placeholder]="'Name'" formControlName="name"></tc-input>
            </tc-form-group>

            <tc-form-group>
              <tc-input [placeholder]="'Number'" [type]="'number'" formControlName="number"></tc-input>
            </tc-form-group>

            <div class="row">
              <div class="col-12 col-sm-6">
                <tc-form-group>
                  <tc-input [placeholder]="'Age'" [type]="'number'" formControlName="age"></tc-input>
                </tc-form-group>
              </div>

              <div class="col-12 col-sm-6">
                <tc-form-group>
                  <tc-select [placeholder]="'Gender'" formControlName="gender" [options]="gender"></tc-select>
                </tc-form-group>
              </div>
            </div>

            <tc-form-group class="mb-0">
              <tc-textarea [placeholder]="'Address'" formControlName="address"></tc-textarea>
            </tc-form-group>
          </form>
        </ng-template>

        <ng-template #modalFooter>
          <div class="actions justify-content-between">
            <button tc-button [type]="'button'" [view]="'error'" (click)="closeModal()">Cancel</button>
            <button tc-button [view]="'info'" [disabled]="patientForm.invalid" (click)="addPatient(patientForm)">
              Add patient
            </button>
          </div>
        </ng-template>
      </ng-container> -->
      <!-- end Modal window -->

  </div>
</template>
<script>
import tcCard from '@/components/ui/card/card'
import tcButton from '@/components/ui/button/button'
import tcIcon from '@/components/ui/icon/icon'
import tcBadge from '@/components/ui/badge/badge'
import tcAlert from '@/components/ui/alert/alert'
import actions from '@/components/actions/actions'
import avatar from '@/components/ui/avatar/avatar'
import navbar from '@/components/navbar/navbar'
import logo from '@/components/logo/logo'
import search from '@/components/search/search'
import appMenu from '@/components/menu/menu'
import navbarSkeleton from '@/components/navbar-skeleton/navbar-skeleton'
import appFooter from '@/components/footer/footer'
export default {
  data: () => ({
    appSettings: {
      boxed: false,// boolean
      layout: 'vertical',// horizontal | vertical
      sidebarBg: '#FBFBFB',// string
      sidebarColor: '#1F2022',// string
      sidebarOpened: false,// boolean
      topbarBg: '#ffffff',// string
      topbarColor: '#1F2022'// string
    },
    loader: true
  }),
  components: {
    tcCard,
    tcButton,
    tcBadge,
    tcIcon,
    navbar,
    logo,
    search,
    appMenu,
    navbarSkeleton,
    tcAlert,
    avatar,
    actions,
    appFooter
  }
}
</script>
<style lang="scss" scoped>
@import '../assets/sass/variables';

.default {
  display: block;
  height: 100%;

  .app-container {
    display: flex;
    flex-direction: column;
    height: 100%;

    .main-content {
      height: 100%;
      overflow-x: hidden;
      overflow-y: auto;
      margin-bottom: $footer-height;
      position: relative;
      transition: .2s padding 0s $animation;
      -webkit-overflow-scrolling: touch;

      .main-content-wrap {
        min-height: calc(100% - #{$module-rem * 4});
        margin: 0 auto;
        // opacity: 0;
        padding: ($module-rem * 3) ($module-rem * 2) ($module-rem * 4);
        transition: .2s opacity 0s $animation;

        &.full-filled {
          height: 100%;
          max-width: 100% !important;
          min-height: 100%;
          padding: 0;
        }
        .page-header {
          display: flex;
          justify-content: space-between;

          .page-title {
            color: rgba(main-palette(500),.5);
            font-size: 2rem;
            margin: 0 0 ($module-rem * 2);
          }
          .page-breadcrumbs {
            color: rgba(main-palette(500),.5);
            font-size: .8rem;
            line-height: 2;
            margin: 0 0 ($module-rem * 2);
          }
        }
      }
      &.loaded {
        .main-content-wrap {
          opacity: 1;
          transition: 0s opacity 0s $animation;
        }
      }
    }
    .content-overlay {
      background: rgba(main-palette(500),.1);
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      visibility: hidden;
      width: 100%;

      &.show {
        @media #{$max991} {
          visibility: visible;
        }
      }
    }
    //Boxed
    &.boxed {
      .main-content {
        .main-content-wrap {
          max-width: $boxed-width;
          max-width: var(--boxed-width);
        }
      }
    }
  }
  .app-container {
    padding-left: $vertical-navbar-width;
    @media #{$max991} {
      padding-left: 0;
    }

    & {
      .navbar.horizontal {
        navbar-skeleton {
          .sk-logo {
            display: none !important;
          }
        }
      }
    }
    .footer {
      left: $vertical-navbar-width;
      @media #{$max991} {
        left: 0;
      }
    }
    &.scrolled {
      & {
        .navbar.horizontal {
          box-shadow: 0 2px 5px rgba(#000,.05);
          z-index: 9997;
        }
      }
    }
  }
}


</style>
