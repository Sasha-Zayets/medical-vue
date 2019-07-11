<template>
  <div class="host tc-pagination">
    <ul class="pagination-ul">
      <li class="pagination-li prev">
        <a class="pagination-link" @click="prevPage()" :class="{ 'disabled': pageNum == 1 }" >
          <i class="icofont-simple-left"></i>
        </a>
      </li>

      <li class="pagination-li" v-fo="(page, index) in pages" :key="index">
        <a class="pagination-link" @click="changePage(page)" :class="{ 'active': pageNum == page }">
          {{ page }}
        </a> 
      </li>

      <li class="pagination-li next">
        <a class="pagination-link" @click="nextPage()" :class="{ 'disabled': pageNum == getLast() }">
          <i class="icofont-simple-right"></i>
        </a>
      </li>
    </ul>

  </div>  
</template>
<script>
export default {
  props: {
    pagesNumber: {
      type: Number,
      default: 1
    },
    pageNum: {
      type: Number,
      default: 1
    }
  },
  data: () => ({
    pages: []
  }),
  created () {
    this.pages = Array.from(Array(this.pagesNumber),(x,i)=>i + 1)
  },
  methods: {
    nextPage () {
      if (this.pageNum < this.getLast()) {
        this.pageNum++
        this.goToPage.emit(this.pageNum)
      }
    },
    prevPage() {
      if (this.pageNum > 1) {
        this.pageNum--
        this.goToPage.emit(this.pageNum)
      }
    },
    getLast() {
      return this.pages[this.pages.length - 1];
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/sass/variables';

$_bg: #D4D3D3;
$_color: #fff;
$_bg-active: accent-palette(500);
$_color-aclive: accent-contrast(500);
$_bg-disabled: rgba($_bg,.6);
$_color-disabled: $_color;
$_module-rem: $module-rem;
$_shape: 500px;
$_animation: $animation;

.host {
  display: block;
  margin-top: $_module-rem * 2;
  padding: 0;

  .pagination-ul {
    list-style-type: none;
    display: flex;
		margin: 0 (-$_module-rem / 4);
    padding: 0;

    .pagination-li {
      margin: 0 ($_module-rem / 4);

      .pagination-link {
        background: $_bg;
        border-radius: $_shape;
        color: $_color;
        cursor: pointer;
        display: block;
        min-width: $_module-rem * 3;
        padding: ($_module-rem / 2);
        text-align: center;
        text-decoration: none;
				transition:
          background-color .2s $_animation,
          color .2s $_animation;

        &:hover,
        &.active {
          background: $_bg-active;
          color: $_color-aclive;
        }
        &.disabled {
          background: $_bg-disabled;
          color: $_color-disabled;
          pointer-events: none;
        }
      }
    }
  }
}

</style>
