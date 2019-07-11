<template>
  <div class="host">
    <form class="search-wrap" :formGroup="searchForm">
      <tc-autocomplete
        formControlName="search"
        :suffixIcon]="'icofont icofont-search'"
        :data]="data"
        :key]="'title'"
        :placeholder="'Type page\'s title'"
        @keydown.enter="goTo($event, searchForm.value.search)"
        @click="goTo($event, searchForm.value.search)"
      ></tc-autocomplete>
    </form> 
  </div>
</template>
<script>
import tcAutocomplete from '@/components/ui/autocomplete/autocomplete'
export default {
  props: {
    data: {
      type: Array
    },
    layout: {
      type: String,
      default: 'vertical'
    }
  },
  created () {
    this.initSearchForm()
  },
  methods: {
    initSearchForm () {
      this.searchForm = this.formBuilder.group({
        search: ['', Validators.required],
      })
    },

    goTo (event, value) {
      if (value) {
        let currentPage

        currentPage = this.data.find(item => {
          return item.title === value
        })

        if (currentPage && currentPage.routing) {
          this.router.navigate([currentPage.layout ? currentPage.layout : this.layout, currentPage.routing])
        }
      }
    }
  },
  components: {
    tcAutocomplete
  }
}
</script>
<style lang="scss" scoped>
@import '../../assets/sass/variables';

.host {
  display: block;
  max-width: $module-rem * 35;
  width: 50%;
}

</style>
