<template>
  <div class="menu-host main-menu"
      :class="[
        {'horizontal': this.orientation === 'horizontal'},
        {'vertical': this.orientation === 'vertical'}
      ]"
  >
    <nav class="main-menu-wrap">
      <ul class="menu-ul">
        <li
          class="menu-item"
          v-for="(item, index) of menuItems"
          :key="index"
          :class="{ 'active': item.active, 'has-sub': item.sub }"
        >
        <!-- ; then group else default -->
          <div v-if="item.groupTitle">
            <span class="group-title">{{ item.title }}</span>
          </div>
          
          <!-- Default item -->
          <div v-else>
              <!-- Single item -->
              <router-link
                v-if="!item.sub"
                :to="item.routing"
                class="item-link"
              >
                <tc-icon
                  class="link-icon"
                  :iconClass="item.icon.class"
                  :tcFontSize="'1.3em'"
                  :tcColor="item.icon.color"
                  :tcBgColor="item.icon.bg"
                  v-if="item.icon && item.icon.class"
                ></tc-icon>

                <span class="link-text">{{ item.title }}</span>

                <tc-badge
                  class="link-badge"
                  :size="'sm'"
                  :tcColor="item.badge.color"
                  :tcBgColor="item.badge.bg"
                  v-if="item.badge && item.badge.text"
                >
                  {{ item.badge.text }}
                </tc-badge>
              </router-link>
              <!-- end Single item -->

            <!-- Item with sub -->
            <div v-else>
              <a href="#" class="item-link list" @click="toggle($event)">
                <tc-icon
                  class="link-icon"
                  :iconClass="item.icon.class"
                  :tcFontSize="'1.3em'"
                  :tcColor="item.icon.color"
                  :tcBgColor="item.icon.bg"
                  v-if="item.icon && item.icon.class"
                ></tc-icon>

                <span class="link-text">{{ item.title }}</span>

                <tc-badge
                  class="link-badge"
                  :size="'sm'"
                  :tcColor="item.badge.color"
                  :tcBgColor="item.badge.bg"
                  v-if="item.badge && item.badge.text"
                >
                  {{ item.badge.text }}
                </tc-badge>

                <span :class="['link-caret', caret]" v-if="item.sub"></span>
              </a>

              <!-- Menu sub -->
              <!--[@subMenu]="subState(item, isActive([orientation, item.routing]))"-->
              <ul class="sub" :class="{'active': !item.sub}">
                <li
                  class="menu-item"
                  v-for="(itemSub, index) of item.sub"
                  :key="index"
                  :class="{ 'active': itemSub.active}"
                >
                  <router-link
                    :to="itemSub.layout !== undefined ? `/${itemSub.layout}/${itemSub.routing}`: `/vertical/${itemSub.routing}`"
                    class="item-link"
                    @click="
                      changeRoute(itemSub.routing, itemSub.routing, itemSub.layout ? itemSub.layout : orientation);
                      closeAll();
                      closeSidebar()
                    "
                  >
                    <span class="link-text">{{ itemSub.title }}</span>
                  </router-link>
                </li>
              </ul>
            </div>
            <!-- end Item with sub -->
          </div>
        </li>
      </ul>
    </nav>

  </div>
</template>
<script>
import tcIcon from '@/components/ui/icon/icon'
import tcBadge from '@/components/ui/badge/badge'
import axios from 'axios'
export default {
  props: {
    orientation: {
      type: String,
      default: 'vertical'
    },
    src: {
      type: String
    }
  },
  data: () => ({
    caret: 'icofont-thin-right',
    menuItems: []
  }),
  created () {
    this.getMenuData(this.src)
  },
  methods: {
    getMenuData (url) {
      axios.get(url)
      .then((data) => {
        this.menuItems = data.data
      }).catch(err => {
        console.log(err)
      })
    },

    toggle (event) {
      event.preventDefault()
     
      let element = event.target.parentNode,
          nextElement = element.nextElementSibling,
          heightNextElement,
          subList = document.querySelectorAll('.sub.open')

      if (!!nextElement) {
        heightNextElement = nextElement.scrollHeight

        if (!nextElement.classList.contains('open')) {
          if(!!subList) {
            if (subList.length !== 0) {
              subList.forEach(el => {
                el.classList.remove('open')
                el.style.maxHeight = '0px'
              })
            }
          }

          nextElement.classList.add('open')
          nextElement.style.maxHeight = heightNextElement + 'px'
        } else {
          nextElement.classList.remove('open')
          nextElement.style.maxHeight = '0px'
        }
      } else {
        event.returnValue = false
        if(!!subList) {
          if (subList.length !== 0) {
            subList.forEach(el => {
              el.classList.remove('open')
              el.style.maxHeight = '0px'
            })
          }
        }
      }
    },

    subState(item, rla) {
      return item.active || rla ? 'active' : 'inactive'
    },

    closeAll() {
      this.menuItems.forEach(item => {
        item.active = false

        this.closeSub(item)
      })
    },

    closeSub(item) {
      if (item.sub && item.sub.length) {
        item.sub.forEach(subItem => {
          subItem.active = false
        })
      }
    },

    closeSidebar() {
      this.store.dispatch(new SettingsActions.SidebarState(false))
    },

    // change route
    changeRoute(routing, bool = true, layout = this.orientation) {
      if (bool) {
        // this.store.dispatch(new PageActions.Reset())

        setTimeout(() => {
          this.$router.navigate([`./${layout}`, routing])
        }, 0)
      }
    }
  },
  components: {
    tcIcon,
    tcBadge
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/sass/variables';

$_accent-palette: accent-palette(500);
$_animation: $animation;

//item
$_item-color: currentColor;
$_item-hover-color: accent-palette(500);
$_item-active-color: accent-palette(500);
$_item-group-color: currentColor;
$_item-bg: transparent;
$_item-hover-bg: transparent;
$_item-active-bg: rgba(main-palette(600),.1);
$_item-group-bg-compress: main-palette(200);
$_item-h-indents: 0;

//separator
$_separator: main-palette(300);

//icon
$_icon-color: inherit;
$_icon-hover-color: inherit;
$_icon-active-color: accent-palette(500);
$_icon-br: 50%;

//badge
$_badge-color: rgba(accent-palette(500),.2);
$_badge-bg: accent-palette(500);

//sub
$_sub-bg: transparent;
$_sub-separator: main-palette(300);

.menu-host {
  display: block;
  margin: 0;
  max-width: 100%;
  padding: 0;
  width: inherit;

  & .main-menu-wrap {
    width: inherit;

    .menu-ul {
      list-style-type: none;
      margin: 0;
      padding: ($module-rem * 3) ($module-rem * 2) 0;

      .menu-item {
        font-weight: 700;
        padding: 0 ($module-rem * 1.5);
        position: relative;

        .group-title {
          color: $_item-group-color;
          display: block;
          opacity: .3;
          padding: ($module-rem * 3) ($_item-h-indents + ($module-rem / 2)) $module-rem;
          text-transform: uppercase;
        }
        &:first-child {
          .group-title {
            padding-top: 0;
          }
        }
        .item-link {
          align-items: center;
          background: $_item-bg;
          color: $_item-color;
          display: flex;
          height: 100%;
          justify-content: space-between;
          min-height: ($module-rem * 3);
          padding: ($module-rem / 2) $_item-h-indents;
          position: relative;
          text-decoration: none;
          transition: background .2s $_animation,
            color .2s $_animation;

          .link-text {
            flex-grow: 2;
            flex-shrink: 1;
            margin: 0 ($module-rem / 2);
          }
          .link-badge {
            margin: 0 ($module-rem / 2);
          }
          .link-icon {
            margin: 0 ($module-rem / 2);
            opacity: .25;
            padding: 0;
            transition: none;
          }
          .link-caret {
            margin: 0 ($module-rem / 2);
            transition: transform .1s $_animation;
          }
          &:hover {
            background: $_item-hover-bg;
            color: $_item-hover-color;
          }
        }
        .sub {
          background: $_sub-bg;
          list-style-type: none;
          overflow: hidden;
          margin: 0;
          padding: 0;
          max-height: 0px;
          transition: all .3s;

          .menu-item {
            font-weight: 400;
            padding-left: $module-rem / 2;
            padding-right: $module-rem / 2;

            &:after {
              display: none;
            }
          }
        }
        &.active {
          &:after {
            transform: translateX(4px);
            transition: .2s transform .2s $_animation;
          }
          .item-link {
            color: $_item-active-color;

            .link-caret {
              transform: rotate(90deg);
            }
          }
        }
        &.has-sub {
          position: relative;

          .item-link {
            position: relative;

            .caret {
              display: block;
            }
          }
          &.active {
            .item-link {
              .caret {
                transform: rotate(90deg);
              }
            }
          }
        }
      }
    }
  }
  &.horizontal {
    @media #{$min992} {
      margin: 0 !important;
      overflow: visible;
    }

    & .main-menu-wrap {
      @media #{$min992} {
        .mCustomScrollBox {
          overflow: visible;

          .mCSB_container {
            overflow: visible;
          }
        }
        .mCSB_scrollTools {
          display: none !important;
        }
        .menu-ul {
          display: flex;
          flex-wrap: wrap;
          padding: 0;

          .menu-item {
            .group-title {
              display: none;
            }
          }
          .menu-item {
            padding: 0;

            .item-link {
              padding: $module-rem $module-rem;

              .link-caret {
                transform: rotate(90deg);
              }
            }
            .sub {
              background: #fff;
              border-radius: $shape;
              box-shadow: $shadow;
              display: block !important;
              color: #000;
              height: auto !important;
              left: 0;
              opacity: 0;
              padding: $module-rem 0;
              position: absolute;
              transition:
                .2s opacity 0s $animation,
                0s visibility .2s $animation;
              visibility: hidden !important;
              width: $module-rem * 25;
              z-index: 500;

              &:before {
                bottom: ($module-rem * 4);
              }
              .menu-item {
                width: 100%;

                .item-link {
                  height: auto;
                  min-height: initial;
                  padding-top: $module-rem / 2;
                  padding-bottom: $module-rem / 2;
                }
              }
            }
            &:hover {
              .sub {
                opacity: 1;
                transition:
                  .2s opacity 0s $animation,
                  0s visibility 0s $animation;
                visibility: visible !important;
              }
            }
            &.active {
              .item-link {

              }
            }
            &:last-child {
              .sub {
                left: auto;
                right: 0;
              }
            }
            &.full-sub {
              position: static;

              .sub {
                width: 100%;
              }
            }
          }
        }
      }
    }
  }
}

</style>
