<template>
  <div class="action-host">
    <tc-dropdown class="item">
      <tc-dropdown-button>
        <tc-icon :iconClass="'icofont icofont-notification'" :tcFontSize="26"></tc-icon>
        <tc-badge v-if="notifications && notifications.length" :view="'error'" :size="'sm'">
          {{ notifications.length }}
        </tc-badge>
      </tc-dropdown-button>

      <tc-dropdown-content :align="'right'" :animation="'fadeInUp'" :offset="[10, 0]">
        <div class="menu-header">
          <h4 class="h5 menu-title mt-0 mb-0">Notifications</h4>

          <a href="#" @click="$event.preventDefault(); notifications = []" :tcColor="['#ed5564', '#8E333C']">Clear All</a>
        </div>

        <ul class="list" v-if="notifications && notifications.length">
          <li v-for="(item, index) in notifications" :key="index">
            <a href="#">
              <span :class="['icon', item.icon]"></span>

              <div class="content">
                <span class="desc">{{ item.title }}</span>

                <span class="date">{{ item.date }}</span>
              </div>
            </a>
          </li>

          <li v-if="!notifications || (notifications.length === 0)">
            <span class="empty-item">No notifications</span>
          </li>
        </ul>

        <div class="menu-footer" v-if="notifications && notifications.length">
          <tc-button
            href="#"
            @click="$event.preventDefault()"
            :view="'accent'"
            :block="true"
            :afterIcon="'icofont-tasks-alt'"
          >
            View all notifications
          </tc-button>
        </div>
      </tc-dropdown-content>
    </tc-dropdown>

    <!-- <tc-dropdown class="item" [c
    lose]="closeDropdown">
      <tc-dropdown-button>
        <div class="d-flex align-items-center">
          <tc-avatar [src]="'/assets/content/user-400-1.jpg'" class="mr-1"></tc-avatar>
          <i class="icofont-simple-down"></i>
        </div>
      </tc-dropdown-button>

      <tc-dropdown-content [align]="'right'" [animation]="'fadeInUp'" [offset]="[10, 0]" [width]="180">
        <ul class="list">
          <li>
            <a href="#" (click)="goTo($event, 'edit-account')" class="align-items-center">
              <span class="icon icofont-ui-home"></span>
              Edit account
            </a>
          </li>

          <li>
            <a href="#" (click)="goTo($event, 'user-profile')" class="align-items-center">
              <span class="icon icofont-ui-user"></span>
              User profile
            </a>
          </li>

          <li>
            <a href="#" (click)="goTo($event, 'events-calendar')" class="align-items-center">
              <span class="icon icofont-ui-calendar"></span>
              Calendar
            </a>
          </li>

          <li>
            <a href="#" (click)="goTo($event, 'settings')" class="align-items-center">
              <span class="icon icofont-ui-settings"></span>
              Settings
            </a>
          </li>

          <li>
            <a href="#" (click)="goTo($event, 'sign-in', '../public/')" class="align-items-center">
              <span class="icon icofont-logout"></span>
              Log Out
            </a>
          </li>
        </ul>
      </tc-dropdown-content>
    </tc-dropdown> -->

  </div>
</template>
<script>
import axios from 'axios'
import tcIcon from '@/components/ui/icon/icon'
import tcButton from '@/components/ui/button/button'
import tcBadge from '@/components/ui/badge/badge'
import tcDropdownButton from '@/components/ui/dropdown/button/button'
import tcDropdownContent from '@/components/ui/dropdown/content/content'
import tcDropdown from '@/components/ui/dropdown/dropdown'
export default {
  props: {
    layout: {
      type: String,
      default: 'vertical'
    }
  },
  created () {
    this.getData('../../assets/data/navbar-notifications.json', 'notifications');
    this.getData('../../assets/data/navbar-messages.json', 'messages');
    this.getData('../../assets/data/navbar-files.json', 'files');
  },
  data: () => ({
    notifications: [],
    messages: [],
    files: []
  }),
  methods: {
    getData(url, dataName) {
      axios.get(url)  
      .then((data) => {
        this[dataName] = data.data
      }).catch(err => {
        console.log(err)
      })
    },

    onCloseDropdown() {
      this.closeDropdown.emit(true);
    },

    goTo(event, link, layout = '') {
      event.preventDefault()

      this.onCloseDropdown()

      setTimeout(() => {
        this.$router.navigate([layout ? layout : this.layout, link])
      })
    }
  },
  components: {
    tcDropdown,
    tcDropdownContent,
    tcDropdownButton,
    tcIcon,
    tcBadge,
    tcButton
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/sass/variables';

.action-host {
  display: flex;
  flex-grow: 2;
  justify-content: flex-end;
  margin: 0 !important;

  .item {
    margin: 0 $module-rem;

    .tc-dropdown-link {
      height: 100%;

      & {
        .dropdown-link-wrap {
          position: relative;
        }
      }
      .tc-icon {
        opacity: .5;
        transition:
          background .2s $animation,
          border .2s $animation,
          color .2s $animation,
          opacity .2s $animation;
      }
      .tc-badge {
        border: 2px solid #fff;
        justify-content: center;
        min-width: 21px;
        padding-left: 2px;
        padding-right: 2px;
        position: absolute;
        right: -5px;
        text-align: center;
        top: -5px;
      }
      &:hover {
        .tc-icon {
          opacity: 1;
        }
      }
      &.active {
        .tc-icon {
          color: accent-palette(500);
          opacity: 1;
        }
      }
    }
  }
}

</style>
