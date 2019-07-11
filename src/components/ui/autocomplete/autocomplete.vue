<template>
  <div class="host tc-autocomplete">
    <tc-input
      v-model="value"
      @change="modelChanged($event)"
      :placeholder="placeholder"
      :readonly="readonly"
      :disabled="disabled ? true : null"
      :type="type"
      :charLimiting="charLimiting"
      :prefixIcon="prefixIcon"
      :suffixIcon="suffixIcon"
      :autoSize="autoSize"
      :size="size"
      :prefix="prefix"
      :suffix="suffix"
      :bgColor="bgColor"
      :borderColor="borderColor"
      :color="color"
      @focus="autocompleteOnFocus()"
      @blur="autocompleteOnBlur()"
      @keydown="keyClick($event)"
    ></tc-input>

    <div class="autocomplete-list" :class="{ 'opened': openedList }">
      <ul class="list-ul" :style="getListStyles()">
        <li
          class="list-li"
          @click="selectItem(item, $event)"
          v-for="(item, index) of results"
          :key="index"
          :class="{ 'active': i === arrowKeyLocation }"
          :v-html="markValue(key ? item[key] : item, value)"
        >
          {{ key ? item[key] : item }}
        </li>
      </ul>
    </div>

  </div>
</template>
<script>
import tcInput from '@/components/ui/input/input'
export default {
  props: {
    data: {
      default: []
    },
    key: {
      type: String
    },
    listBgColor: {
      type: String
    },
    listBorderColor: {
      type: String
    },
    listColor: {
      type: String
    },
    listMarkColor: {
      type: String
    }
  },
  data: () => ({
    results: [],
    simpleInput: false,
    attached: false,
    arrowKeyLocation: 1,
    openedList: false,
    listMarkColor: ''
  }),
  components: {
    tcInput
  },
  methods: {
    handleClick (event) {
      if (this.opened && !this.element.nativeElement.contains(event.target)) {
        this.closeList()
      }
    },
    // model change
    modelChanged (val) {
      this.results = this.getResults(this.data, val, this.key)
      (!this.openedList && val && this.results) ? this.openList() : null
      (this.openedList && (!val || !this.results.length)) ? this.closeList() : null
    },

    // open list
    openList () {
      this.opened.emit()
      this.openedList = true
    },

    // close list
    closeList () {
      this.closed.emit()
      this.openedList = false
      this.arrowKeyLocation = -1
    },

    // get autocomplete list
    getResults (data, val, key) {
      if (!data.length) return []

      return data.filter(item => {
        let v = key ? item[key] : item

        return v.toLowerCase().indexOf(val.toLowerCase()) > -1
      })
    },

    // mark filled value
    markValue (label, val) {
      let text = label
      let regex = new RegExp(val, 'gi')
      let COLOR = this.listMarkColor

      if(val) {
        text = text.replace(regex, function(match) {
          return `<span class="val-mark" style="color: ${COLOR}">${match}</span>`
        })
      }

      return this.sanitizer.bypassSecurityTrustHtml(text)
    },

    // detect focus event
    autocompleteOnFocus () {
      this.focus.emit()
    },

    // detect blur event
    autocompleteOnBlur () {
      this.blur.emit()
    },

    // select item
    selectItem (value, event) {
      event ? event.preventDefault() : null

      let newVal = this.key ? value[this.key] : value

      if (newVal.length > this.charLimiting) {
        newVal = newVal.slice(0, this.charLimiting)
      }
      if (this.charLimiting > 0) {
        super.changeCharLength(this.charLimiting, newVal.length)
      }

      this.innerValue = newVal
      this.optionSelected.emit(newVal)
      this.onChange(newVal)
      this.closeList()
    },

    // key click map
    keyClick (event) {
      switch(event.key) {
        case 'Enter':
          if (this.arrowKeyLocation >= 0 && this.results.length) {
            this.selectItem(this.results[this.arrowKeyLocation])
          }
          break
        case 'Escape':
          this.closeList()
          break
        case 'ArrowUp':
          this.arrowKeyLocation > 0 ? this.arrowKeyLocation-- : null
          break
        case 'ArrowDown':
          (this.arrowKeyLocation + 1) < this.results.length ? this.arrowKeyLocation++ : null
      }
    },

    // custom component style
    getListStyles () {
      return {
        'color': this.listColor ? this.listColor : null,
        'background': this.listBgColor ? this.listBgColor : null,
        'border-color': this.listBorderColor ? this.listBorderColor : null
      }
    },

    getMarkColor () {
      return this.listMarkColor ? this.listMarkColor : null
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/sass/variables';

$_module-rem: $module-rem;
$_list-bg: #fff;
$_list-border-color: #fff;
$_list-color: #000;
$_shape: 20px;
$_shape-lg: 30px;
$_shape-sm: 15px;
$_animation: $animation;
$_list-shadow: $shadow;

.host {
  border-radius: $_shape;
  display: block;
  outline: none;
  width: 100%;
  transition: none;

  &:hover,
  &:focus {
    transition: none;
  }
  .tc-input {
    border-radius: inherit;
    transition: none;
  }
	.autocomplete-list {
		display: none;
		position: relative;
		z-index: 999;

    &.opened {
      display: block;
    }
		.list-ul {
      background: $_list-bg;
      border: 1px solid $_list-border-color;
      box-shadow: $_list-shadow;
      border-radius: $_shape;
      color: $_list-color;
			list-style-type: none;
			left: 0;
      margin: 0;
      max-height: $_module-rem * 23;
      overflow: auto;
      padding: $_module-rem 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 999;

			.list-li {
        box-shadow: 0 1px 0 rgba(#000,.05);
				cursor: pointer;
				padding: ($_module-rem / 2) ($_module-rem * 2);
				transition: background .2s $_animation;

				::ng-deep .val-mark {
          background: none;
					color: accent-palette(500);
          pointer-events: none;
				}
				&.active {
					background:rgba(accent-palette(500),.05);
				}
				&:hover {
					background:rgba(#000,.05);
				}
				&:last-child {
          box-shadow: none;
				}
			}
		}
	}
  &.input-sm {
    border-radius: $_shape-sm;
  }
  &.input-lg {
    border-radius: $_shape-lg;
  }
}
</style>
