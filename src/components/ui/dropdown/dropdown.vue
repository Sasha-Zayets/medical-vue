<template>
  <div class="host tc-dropdown" :class="{'opened': this.opened}">
    <!-- <tc-dropdown-button>
      <slot name="tc-dropdown-button"></slot>
    </tc-dropdown-button>
    <tc-dropdown-content>
      <slot name="tc-dropdown-content"></slot>
    </tc-dropdown-content> -->
    <slot></slot>
  </div>
</template>
<script>
import tcDropdownButton from '@/components/ui/dropdown/button/button'
import tcDropdownContent from '@/components/ui/dropdown/content/content'
export default {
  props: {
    opened: {
      type: Boolean,
      default: false
    }
  },
  components: {
    tcDropdownButton,
    tcDropdownContent
  },
  methods: {
    // toggles menu visibility
    toggleState (state) {
      state ? this.show() : this.hide()
    },

    // show dropdown
    show (position = this.dropdownButton.getButtonParams()) {
      this.opened = true
      // show dropdown content
      this.dropdownContent.show()
      // update dropdown content position based on its button's
      this.dropdownContent.updatePosition(position)
    },

    // hide dropdown
    hide () {
      this.opened = false
      // hide dropdown content
      this.dropdownContent.hide()
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/sass/variables';

.host {
  align-items: center;
  display: inline-flex;
  position: relative;
}

</style>
