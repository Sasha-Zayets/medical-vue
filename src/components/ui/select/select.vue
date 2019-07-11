<template>
    <div class="select-host">
        <div
            class="select-box"
            :style="getSelectStyles()"
            @click="toggleState(opened)"
            >
            <div class="placeholder" v-if="placeholder && (!innerValue || (multiple && !innerValue.length))">
                {{ placeholder }}
            </div>

            <div class="value" v-if="selectedOptions && selectedOptions.length">
                <span v-if="!multiple">
                {{ selectedOptions[0].label }}
                </span>

                <template v-else>
                <div class="selected-option" v-for="(option, index) of selectedOptions" :key="index" @click="removeSelectedOption($event, option)">
                    <div class="option-text">{{ option.label }}</div>
                    <i class="close-icon icofont-close-line"></i>
                </div>
                </template>
            </div>

            <div class="icon clear" v-if="allowClear && innerValue" @click="clearOptions($event)">
                <i class="icofont-close-line"></i>
            </div>

            <div class="icon caret" :class="{ 'active': opened }"><i class="icofont-thin-down"></i></div>
            </div>

            <div class="select-list" @shrink="opened ? 'active': 'inactive'" :style="getListStyles()" v-if="options">
            <div class="not-found" v-if="!options">{{ notFoundMsg }}</div>

            <div class="filter" v-if="filter">
                <tc-input :formControl="filterForm" :tcShape="4"></tc-input>
            </div>

            <div class="options">
                <div v-for="(option, index) of getOptions(options)" :key="index">
                    
                <div
                    class="option"
                    :class="{ 'selected': isSelected(option.value) }"
                    :style="getOptionStyle(isSelected(option.value))"
                    @click="selectOption(option, isSelected(option.value))"
                    @mouseenter="optionMouseenter($event)"
                    @mouseleave="optionMouseleave($event, isSelected(option.value))"
                >
                    <template v-else>{{ option.label }}</template>

                    <!-- <ng-container
                    [ngTemplateOutlet]="optionTpl ? optionTpl : defaultOption"
                    [ngTemplateOutletContext]="{ option: option, index: i }"
                    ></ng-container> -->
                </div>
                </ng-container>

                <div class="option" v-if="!getOptions(options).length">{{ notFoundMsg }}</div>
            </div>
            </div>

    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>

</style>
