<template>
    <div>
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        columnTitle: {
            type: String,
            default: ''
        },
        columnName: {
            type: String,
            default: ''
        },
        enableFiltering: {
            type: Boolean,
            default: false
        },
        enableSorting: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        config: {
            title: '',
            name: '',
            sort: '',
            enableSorting: '',
            filter: '',
            filtering: {
                filterString: '',
                columnName: name
            }
        }
    }),
    created () {
        this.setConfig()
        console.log(this.$parent.$options)
        this.$parent.$options.methods.addColumn(this);
    },
    methods: {
        setConfig() {
            this.config.name = this.columnName
            this.config.title = this.columnTitle
            this.config.filtering.columnName = this.columnName
            this.config.enableSorting = this.enableSorting

            if (this.columnName === '') {
                this.config.filtering = false
            }

        }
    }
}
</script>
