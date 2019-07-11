<template>
    <div class="simple-table-host">
        <tc-card :title="'Default'">
            <tc-table :rows="tableData">
                <tc-table-col :columnTitle="'#'" :columnName="'number'"></tc-table-col>
                <tc-table-col :columnTitle="'Person'" :columnName="'person'"></tc-table-col>
                <tc-table-col :columnTitle="'Position'" :columnName="'position'"></tc-table-col>
                <tc-table-col :columnTitle="'E-mail'" :columnName="'email'"></tc-table-col>
            </tc-table>
        </tc-card>

        <!-- <tc-card :title="'Hover'">
            <tc-table :rows="tableData" :hovered="true">
                <tc-table-col :columnTitle="'#'" :columnName="'number'"></tc-table-col>
                <tc-table-col :columnTitle="'Person'" :columnName="'person'"></tc-table-col>
                <tc-table-col :columnTitle="'Position'" :columnName="'position'"></tc-table-col>
                <tc-table-col :columnTitle="'E-mail'" :columnName="'email'"></tc-table-col>
            </tc-table>
        </tc-card>

        <tc-card :title="'Striped'">
            <tc-table :rows="tableData" :striped="true">
                <tc-table-col :columnTitle="'#'" :columnName="'number'"></tc-table-col>
                <tc-table-col :columnTitle="'Person'" :columnName="'person'"></tc-table-col>
                <tc-table-col :columnTitle="'Position'" :columnName="'position'"></tc-table-col>
                <tc-table-col :columnTitle="'E-mail'" :columnName="'email'"></tc-table-col>
            </tc-table>
        </tc-card>

        <tc-card :title="'Bordered'">
            <tc-table :rows="tableData" :bordered="true">
                <tc-table-col :columnTitle="'#'" :columnName="'number'"></tc-table-col>
                <tc-table-col :columnTitle="'Person'" :columnName="'person'"></tc-table-col>
                <tc-table-col :columnTitle="'Position'" :columnName="'position'"></tc-table-col>
                <tc-table-col :columnTitle="'E-mail'" :columnName="'email'"></tc-table-col>
            </tc-table>
        </tc-card>

        <tc-card :title="'Borderless'">
            <tc-table :rows="tableData" :borderLess="true">
                <tc-table-col :columnTitle="'#'" :columnName="'number'"></tc-table-col>
                <tc-table-col :columnTitle="'Person'" :columnName="'person'"></tc-table-col>
                <tc-table-col :columnTitle="'Position'" :columnName="'position'"></tc-table-col>
                <tc-table-col :columnTitle="'E-mail'" :columnName="'email'"></tc-table-col>
            </tc-table>
        </tc-card>

        <tc-card :title="'Head style'">
            <tc-table :rows="tableData" :headerBgColor="'#336cfb'" :headerColor="'#fff'">
                <tc-table-col :columnTitle="'#'" :columnName="'number'"></tc-table-col>
                <tc-table-col :columnTitle="'Person'" :columnName="'person'"></tc-table-col>
                <tc-table-col :columnTitle="'Position'" :columnName="'position'"></tc-table-col>
                <tc-table-col :columnTitle="'E-mail'" :columnName="'email'"></tc-table-col>
            </tc-table>
        </tc-card>

        <tc-card :title="'Body style'" class="mb-0">
            <tc-table
                :rows="tableData"
                :headerBgColor="'#b7ce63'"
                :headerColor="'#000'"
                :contentBgColor="'#ecfcb0'"
                :contentColor="'#000'"
            >
                <tc-table-col :columnTitle="'#'" :columnName="'number'"></tc-table-col>
                <tc-table-col :columnTitle="'Person'" :columnName="'person'"></tc-table-col>
                <tc-table-col :columnTitle="'Position'" :columnName="'position'"></tc-table-col>
                <tc-table-col :columnTitle="'E-mail'" :columnName="'email'"></tc-table-col>
            </tc-table>
        </tc-card> -->

    </div>
</template>
<script>
import tcCard from '@/components/ui/card/card'
import tcTable from '@/components/ui/table/table'
import tcTableCol from '@/components/ui/table/col/col'
import axios from 'axios'
export default {
    data: () => ({
        tableData: []
    }),
    created () {
        this.getData('/assets/data/table.json')
    },
    methods: {
        getData (url) {
            axios.get(url)
            .then((data) => {
                this.tableData = data.data
            }).catch(err => {
                console.log(err)
            })
        }
    },
    components: {
        tcCard,
        tcTable,
        tcTableCol
    }
}
</script>
<style lang="scss" scoped>

</style>
