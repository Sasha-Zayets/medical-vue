<template> 
  <div class="host tc-radio"
    :class="{'tc-radio-horizontal': this.direction === 'horizontal'}"
  >
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    direction: {
      type: String,
    },
    value: {
      type: String,
      default: ''
    }
  },
  mounted () {
    this.setCheckedOption(this.value, true)
  },
  methods: {
    setCheckedOption (value, subscribe) {
      if (this.radioOptions && this.radioOptions.length) {
        this.radioOptions.forEach(option => {
          option.checked = (option._value === value) ? true : false

          if (subscribe) {
            option.changeValue.subscribe((newValue) => {
              this.writeValue(newValue)
              this.change.emit(newValue)
              this.onChange(newValue)

              this.radioOptions.forEach(option => {
                option.checked = (option._value === newValue) ? true : false
                option.changeAttr(option._value === newValue)
              })
            })
          }
        })
      }
    },

    writeValue (value) {
      if (!value || typeof value !== 'string') {
        return
      }
      this.value = value
    },

    registerOnChange (fn) {
      this.onChange = fn
    },

    registerOnTouched (fn) {
      this.onTouched = fn
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/sass/variables';

$_module-rem: $module-rem;

.host {
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin: -$_module-rem / 2;

  &.tc-radio-horizontal {
    flex-direction: row;
  }
}

</style>
