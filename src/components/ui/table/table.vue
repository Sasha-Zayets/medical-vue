<template>
    <div class="table-host tc-table" 
        :class="[
            {'bordered-table': bordered},
            {'striped-table': striped},
            {'hovered-table': hovered},
            {'borderless-table': borderLess}
        ]"
    >
        <tc-form-group v-if="search">
            <tc-input
                :placeholder="'Seach in table'"
                :tcFilterTable="config.filtering"
                @tableChanged="onChangeTable(config)"
                :suffixIcon="'icofont-search-document'"
            ></tc-input>
        </tc-form-group>

        <div class="table-wrap" v-if="rows.length > 0">
            <table class="table-box">
            <thead>
            <tr>
                <th
                v-for="(c, index) of columnList"
                :key="index"
                :column="c.config"
                :align="headerAlign"
                :tcTableSort="c.config.sort"
                @sortChanged="onChangeTable(config, c)"
                :tcBgColor="headerBgColor"
                >
                <div class="col-wrapper" :class="{ 'sorting-col': c.config.enableSorting }">
                    <div v-if="!c.headerTemplate">
                    <span v-if="c.config.enableSorting" class="sorting" :tcColor="headerColor">
                        <button class="no-style icofont-simple-up up" :class="{ 'active': c.config.sort === 'asc' }"></button>
                        <button class="no-style icofont-simple-down down" :class="{ 'active': c.config.sort === 'desc' }"></button>
                    </span>

                    <div v-if="!c.enableFiltering">
                        <span class="title" :tcColor="headerColor">{{ c.config.title }}</span>
                    </div>

                    <div v-if="c.enableFiltering">
                        <div class="search-box">
                        <tc-input
                            :size="'sm'"
                            @click="$event.stopPropagation();"
                            :tcFilterTable="c.config.filtering"
                            :suffixIcon="'icofont-search-alt-2'"
                            @tableChanged="onChangeTable(config, c)"
                            :placeholder="c.config.title">
                        </tc-input>
                        </div>
                    </div>
                    </div>
                </div>

                <template v-if="c.headerTemplate" :ngTemplateOutlet="c.headerTemplate"></template>
                </th>
            </tr>
            </thead>

            <tbody>
            <tr v-for="(row, index) of rows" :key="index" :align="rowAlign">
                <td v-for="(col, index) of columnList" :key="index" :style="{ 'background': contentBgColor, 'color': contentColor }">
                <div v-if="!col.tdTemplate">{{ row[col.config.name] }}</div>

                <template
                    v-if="col.tdTemplate"
                    :ngTemplateOutlet="col.tdTemplate"
                    :ngTemplateOutletContext="{ $implicit: row[col.config.name], row: row }"
                ></template>
                </td>
            </tr>
            </tbody>
            </table>

        <div class="no-data" v-if="!rows">No table's data</div>
        </div>

        <tc-pagination
        v-if="pagination && pagesCount > 1"
        :pagesNumber="pagesCount"
        :pageNum="page"
        @goToPage="goToPage($event)"
        ></tc-pagination>

    </div>
</template>
<script>
export default {
    props: {
        bordered: {
            type: Boolean,
            default: false
        },
        striped: {
            type: Boolean,
            default: false
        },
        hovered: {
            type: Boolean,
            default: false
        },
        borderLess: {
            type: Boolean,
            default: false
        },
        borderColor: {
            type: String
        },
        borderStyle: {
            type: String,
            default: 'solid'
        },
        contentBgColor: {
            type: String
        },
        contentColor: {
            type: String
        },
        headerBgColor: {
            type: String,
            default: 'rgba(#000,0.15)'
        },
        headerColor: {
            type: String,
            default: '#000'
        },
        headerAlign: {
            type: String,
            default: 'left'
        },
        rowAlign: {
            type: String,
            default: 'left'
        },
        pagination: {
            type: Boolean
        },
        search: {
            type: Boolean
        },
        config: {
            type: [Object, Array, String],
            default: function () {
                return {
                    sorting: true,
                    filtering: {
                        filtering: true,
                        filterString: ''
                    }
                }
            }
        },
        rows: {
          type: Array
        },
        itemsPerPage: {
            type: Number,
            default: 10
        }
    },
    data: () => ({
        datas: [],
        filtering: '',
        _columns: [],
        pagesCount: 0,
        page: 1,
        columnList: [],
        colConfig: {}
    }),
    created () {
        // this.columnList.push(this.rows)
        this.getColumns()
        this.datas = this.rows
        this.pagesCount = Math.ceil(this.rows.length / this.itemsPerPage)

        this.$store.dispatch('addColumn',  this.rows)
        if (this.datas.length > 0) {
            setTimeout(() => {
                this.onChangeTable(this.config, null)
            })
        }
    },
    methods: {
        addColumn(column) {
          this.columnList.push(column)
        },

        getColumns() {
            this.columnList.forEach(col => {
                this._columns.push(this.colConfig)
            })
        },

        goToPage(pageNum) {
            this.page = pageNum
            this.onChangeTable(this.data, null)
        },

        changePage(page, itemsPerPage, data) {
            let start = (page - 1) * itemsPerPage
            let end = itemsPerPage > -1 ? (start + itemsPerPage) : data.length
            return data.slice(start, end)
        },

        changeSort(data, config) {
            if (!config.sorting) {
                return data
            }

            let columns = [];
            this.columnList.forEach(col => {
                columns.push(col.config)
            })
            let columnName = void 0
            let sort = void 0

            for (let i = 0; i < columns.length; i++) {
                if (columns[i].sort !== '' && columns[i].sort !== false) {
                    columnName = columns[i].name
                    sort = columns[i].sort
                }
            }

            if (!columnName) {
                return data
            }

            return data.sort((previous, current) => {
                if (previous[columnName] > current[columnName]) {
                    return sort === 'desc' ? -1 : 1
                } else if (previous[columnName] < current[columnName]) {
                    return sort === 'asc' ? -1 : 1
                }
                return 0
            })
        },

        changeFilter(data, config, columnList) {
            let filteredData = data

            columnList.forEach((column) => {
                if (column.config.name) {
                    filteredData = filteredData.filter((item) => {
                        if (typeof item[column.config.name] === 'undefined' && item[column.config.name] !== undefined) {
                            return item[column.config.name].toString().toLowerCase().match(column.config.filtering.filterString.toLowerCase())
                        } else {
                            return true
                        }
                    })
                }
            })

            if (!config.filtering) return filteredData
            
            let tempArray = []

            filteredData.forEach((item) => {
                let flag = false

          columnList.forEach((column) => {
            if (column.config.filtering && column.config.name) {
            if (typeof item[column.config.name] !== 'undefined' && item[column.config.name] !== undefined) {
                if (item[column.config.name].toString().toLowerCase().startsWith(config.filtering.filterString.toLowerCase())) {
                flag = true
                }
            }
            }
        })

        if (flag) {
            tempArray.push(item)
        }
        })

            filteredData = tempArray

            return filteredData
        },

        onChangeTable(config, column) {
        if (config.filtering) {
                Object.assign(this.config.filtering, config.filtering)
            }

            if (config.sorting) {
                Object.assign(this.config.sorting, config.sorting)
            }

            let filteredData

            if (column) {
                filteredData = this.changeFilter(this.data, column.config, this.columnList)
            } else {
                filteredData = this.changeFilter(this.data, config, this.columnList)
            }

        let sortedData = this.changeSort(filteredData, this.config)

            this.rows = this.pagination ? this.changePage(this.page, this.itemsPerPage, sortedData) : sortedData
        }
    }
}
</script>
<style lang="scss" scoped>
@import '~@/assets/sass/variables';

$_module-rem: $module-rem;
$_bg: rgba(#ebebeb,.3);
$_border-color: #ebebeb;
$_border-width: 2px;
$_td-border-color: #fff;
$_td-border-width: 2px;
$_header-bg: rgba(main-palette(500),.1);
$_header-color: main-palette(500);
$_striped-bg: rgba(main-palette(500),.08);

$_shape: $shape;
$_animation: $animation;
$_shadow: 0 0 10px rgba(#000,.12);

.table-host {
  display: block;
  margin: 0;
  padding: 0;

  .table-wrap {
    display: block;
    margin: -10px;
    overflow: auto;
    padding: 10px;

    .table-box {
      border-color: $_td-border-color;
      border-radius: $_shape;
      overflow: auto;
      width: 100%;

      .col-wrapper {
        display: flex;
        margin: 0 (-$_module-rem / 2);

        .sorting {
          display: flex;
          flex-direction: column;
          font-size: .8em;
          justify-content: center;
          margin: 0 ($_module-rem / 2);

          .up,
          .down {
            color: inherit;
            cursor: pointer;
            transition: color .2s $_animation;

            &.active {
              color: main-palette(500);
            }
          }
        }
        .title,
        .search-box {
          margin: 0 ($_module-rem / 2);
        }
        .search-box {
          width: 100%;

          .tc-input {
            min-width: 100px;
          }
        }
        &.sorting-col {
          .title {
            cursor: pointer;
          }
        }
      }
      tr {
        transition:
          background .2s $_animation,
          border .2s $_animation,
          box-shadow .2s $_animation,
          color .2s $_animation;
        will-change: background, border, box-shadow, color;
        width: 100%;

        th, td {
          border: 0;
          border-bottom: $_td-border-width solid $_td-border-color;
          padding: $_module-rem;

          &:first-child {
            padding-left: $_module-rem * 2;
          }
          &:last-child {
            padding-right: $_module-rem * 2;
          }
        }
        th {
          background: $_header-bg;
          color: $_header-color;
          position: relative;
        }
        td {
          background: $_bg;
        }
      }
      tbody {
        tr {
          &:last-child {
            th,
            td {
              border-bottom: none;
            }
          }
        }
      }
    }
  }
  &.hovered-table {
    .table-wrap {
      .table-box {
        tbody {
          tr {
            &:hover {
              box-shadow: $_shadow;
              transform: scale(1);
              z-index: 1;
            }
          }
        }
      }
    }
  }
  &.bordered-table {
    .table-wrap {
      .table-box {
        thead,
        tbody {
          tr {
            td,
            th {
              border: $_border-width solid $_border-color;
            }
          }
        }
      }
    }
  }
  &.striped-table {
    .table-wrap {
      .table-box {
        tbody {
          tr {
            &:nth-child(even) {
              th,
              td {
                background: $_striped-bg;
              }
            }
          }
        }
      }
    }
  }
  &.borderless-table {
    .table-wrap {
      .table-box {
        thead,
        tbody {
          tr {
            td,
            th {
              border: 0 none;
            }
          }
        }
      }
    }
  }
}
</style>
