import Vue from 'vue'

Vue.directive('fontSize', {
  inserted: function (el, binding) {
    el.style.fontSize = binding.value + 'px'
  }
})

Vue.directive('color', {
  inserted: function (el, binding) {
    el.style.color = binding.value
  }
})