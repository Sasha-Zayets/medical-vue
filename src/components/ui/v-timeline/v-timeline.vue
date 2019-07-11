<template>
  <div class="host tc-v-timeline"
        :class="[
        {'show-years': showLabels},
        {'dots': !this.showIcons},
        getAlign
        ]"
  >
      <div class="line" v-if="align !== 'center'"></div>

      <div class="timeline-box" v-if="(box, index) in  data" :key="index">
        <div class="box-label" v-if="showLabels && box.sectionLabel">
          <tc-badge [view]="box.sectionLabel.view ? box.sectionLabel.view : 'default'">{{ box.sectionLabel.text }}</tc-badge>
        </div>

        <div class="box-items">
          <div class="item" v-if="(item, index) in box.sectionData" :key="index">
            <div class="icon-block">
              <div
                :class="['item-icon', item.icon || 'icofont-clock-time']"
                :style="{ 'background': item.iconBg, 'color': item.iconColor }"
              ></div>
            </div>

            <div class="content-block">
              <div class="item-header">
                <h3 class="h5 item-title" v-if="item.title">{{ item.title }}</h3>

                <div class="item-date" v-if="item.date"><span>{{ item.date }}</span></div>
              </div>

              <div class="item-desc" v-html="item.content" v-if="item.content"></div>
            </div>
          </div>
        </div>
      </div>

  </div>
</template>
<script>
export default {
  props: {
    align: {
      type: String,
      default: 'left'
    },
    showIcons: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array
    }
  },
  computed: {
    getAlign () {
      return `align-${this.align}`
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/sass/variables';

$_module-rem: $module-rem;
$_shape: $shape;
$_icon-shape: 50%;
$_icon-size: $_module-rem * 4;
$_dot-size: $_module-rem;
$_icon-bg: accent-palette(500);
$_icon-color: accent-contrast(500);
$_line-size: 2px;
$_line-color: main-palette(50);
$_date-color: main-palette(100);
$_label-bg: main-palette(500);
$_label-color: main-contrast(500);

.host {
  display: block;
  position: relative;

  .line {
    background: $_line-color;
    bottom: $_module-rem * 2;
    left: $_icon-size / 2;
    margin: 0 (-$_line-size / 2);
    position: absolute;
    top: $_module-rem * 2;
    width: $_line-size;
  }
  .timeline-box {
    .box-label {
      display: flex;
      padding: $_module-rem 0;

      .tc-badge {
        position: relative;
      }
    }
    .box-items {
      display: flex;
      flex-direction: column;

      .item {
        display: flex;
        margin: ($_module-rem * 2) (-$_module-rem);
        position: relative;

        .icon-block {
          align-items: center;
          display: flex;
          flex-direction: column;
          margin: 0 $_module-rem;

          .item-icon {
            align-items: center;
            background: $_icon-bg;
            border-radius: $_icon-shape;
            color: $_icon-color;
            display: flex;
            font-size: 1.7rem;
            height: $_icon-size;
            justify-content: center;
            min-height: $_icon-size;
            width: $_icon-size;
          }
        }
        .content-block {
          flex-grow: 2;
          margin: 0 $_module-rem;

          .item-header {
            margin: 0;

            .item-title {
              margin: 0;
            }
            .item-date {
              color: $_date-color;
              margin: 0;
              white-space: nowrap;
            }
          }
          .item-desc {
            margin-top: $_module-rem;
          }
        }
      }
    }
  }
  &.dots {
    .line {
      left: $_dot-size / 2;
    }
    .timeline-box {
      .box-items {
        .item {
          .icon-block {
            .item-icon {
              height: $_dot-size;
              min-height: $_dot-size;
              width: $_dot-size;

              &:before {
                display: none;
              }
            }
          }
        }
      }
    }
  }
  &.align-right {
    .line {
      left: auto;
      right: $_icon-size / 2;
    }
    .timeline-box {
      .box-label {
        justify-content: flex-end;
      }
      .box-items {
        .item {
          flex-direction: row-reverse;
          text-align: right;

          .content-block {
            .item-header {
              justify-content: flex-end;
            }
            .item-desc {
              text-align: right;
            }
          }
        }
      }
    }
    &.dots {
      .line {
        left: auto;
        right: $_dot-size / 2;
      }
    }
  }
  &.align-center {
    .timeline-box {
      .box-label {
        justify-content: center;
      }
      .box-items {
        .item {
          flex-direction: column;
          margin: $_module-rem (-$_module-rem / 2);

          .icon-block {
            margin-bottom: $_module-rem;
          }
          .content-block {
            padding-bottom: $_module-rem * 4;
            position: relative;
            text-align: center;

            &:after {
              background: $_line-color;
              bottom: 0;
              content: '';
              height: $_module-rem * 3;
              left: 50%;
              margin-left: -$_line-size / 2;
              position: absolute;
              width: $_line-size;
            }
            .item-header {
              flex-direction: column;
              justify-content: center;
              margin-bottom: $_module-rem;
            }
          }
        }
      }
      &:last-child {
        .box-items {
          .item:last-child {
            .content-block {
              padding-bottom: 0;

              &:after {
                display: none;
              }
            }
          }
        }
      }
    }
  }
  &.align-between {
    @media #{$min768} {
      .line {
        left: 50%;
      }
      .timeline-box {
        .box-label {
          justify-content: center;
        }
        .box-items {
          .item {
            margin-left: 0;
            margin-right: 0;
            width: 50%;

            &:nth-child(odd) {
              flex-direction: row-reverse;
              text-align: right;

              .icon-block {
                margin-right: -$_icon-size / 2;
              }
              .content-block {
                margin-left: 0;
              }
            }
            &:nth-child(even) {
              align-self: flex-end;

              .icon-block {
                margin-left: -$_icon-size / 2;
              }
              .content-block {
                margin-right: 0;
              }
            }
          }
        }
      }
      &.dots {
        .timeline-box {
          .box-items {
            .item {
              &:nth-child(odd) {
                .icon-block {
                  margin-right: -$_dot-size / 2;
                }
              }
              &:nth-child(even) {
                .icon-block {
                  margin-left: -$_dot-size / 2;
                }
              }
            }
          }
        }
      }
    }
  }
}

</style>
