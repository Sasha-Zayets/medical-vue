<template>
    <div>
        <div class="row">
            <div class="col-md-6">
                <tc-card :title="'Basic'">
                    <tc-form-group>
                        <tc-input :value="'Value'"></tc-input>
                    </tc-form-group>

                    <tc-form-group>
                        <tc-input :placeholder="'With placeholder'"></tc-input>
                    </tc-form-group>

                    <tc-form-group>
                        <tc-form-label>Input label</tc-form-label>

                        <tc-input :placeholder="'With label'"></tc-input>
                    </tc-form-group>

                    <tc-form-group class="mb-0">
                        <tc-input :placeholder="'With description'"></tc-input>

                        <tc-form-description>Input description</tc-form-description>
                    </tc-form-group>
                </tc-card>
            </div>
            <div class="col-md-6">
                <tc-card :title="'Prefix / suffix'">
                    <tc-form-group>
                    <tc-input :prefix="'Prefix'" :placeholder="'placeholder'" :value="'value'"></tc-input>
                    </tc-form-group>

                    <tc-form-group>
                    <tc-input :suffix="'suffix'" :placeholder="'Placeholder'" :value="'Value'"></tc-input>
                    </tc-form-group>

                    <tc-form-group>
                    <tc-input :prefix="'Prefix'" :suffix="'suffix'" :placeholder="'placeholder'" :value="'value'"></tc-input>
                    </tc-form-group>

                    <tc-form-group>
                    <tc-input
                        :prefix="'Prefix'"
                        :suffix="'suffix'"
                        :placeholder="'placeholder'"
                        :value="'default'"
                        :autoSize="true"
                    ></tc-input>
                    </tc-form-group>

                    <tc-form-group class="mb-0">
                    <tc-input
                        :prefix="['Prefix', '#0a48fd']"
                        :suffix="['suffix', '#0a48fd']"
                        :placeholder="'placeholder'"
                        :value="'colored'"
                        :autoSize="true"
                    ></tc-input>
                    </tc-form-group>
                </tc-card>
                </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <tc-card :title="'Input size'">
                <tc-form-group>
                    <tc-input :size="'sm'" :placeholder="'Small size'"></tc-input>
                </tc-form-group>

                <tc-form-group>
                    <tc-input :placeholder="'Default size'"></tc-input>
                </tc-form-group>

                <tc-form-group class="mb-0">
                    <tc-input :size="'lg'" :placeholder="'Large size'"></tc-input>
                </tc-form-group>
                </tc-card>
            </div>

            <div class="col-md-6">
                <tc-card :title="'With icons'">
                <tc-form-group>
                    <tc-input :prefixIcon="'icofont-pills'" :placeholder="'Placeholder'"></tc-input>
                </tc-form-group>

                <tc-form-group>
                    <tc-input :suffixIcon="'icofont-pencil-alt-5'" :placeholder="'Placeholder'"></tc-input>
                </tc-form-group>

                <tc-form-group>
                    <tc-input
                    :prefixIcon="'icofont-boy'"
                    :suffixIcon="'icofont-tablets'"
                    :placeholder="'Placeholder'"
                    ></tc-input>
                </tc-form-group>

                <tc-form-group class="mb-0">
                    <tc-input
                    :prefixIcon="'icofont-curved-double-left'"
                    :suffixIcon="'icofont-curved-double-right'"
                    :placeholder="'Placeholder'"
                    :value="'Value'"
                    :autoSize="true"
                    ></tc-input>
                </tc-form-group>
                </tc-card>
            </div>
        </div>

        <div class="row">
            <div class="col-md-6">
                <tc-card :title="'Shape'">
                <tc-form-group>
                    <tc-input tcShape="0" :placeholder="'Square'"></tc-input>
                </tc-form-group>

                <tc-form-group>
                    <tc-input :placeholder="'Default'"></tc-input>
                </tc-form-group>

                <tc-form-group class="mb-0">
                    <tc-input tcShape="6" :placeholder="'Rounded'"></tc-input>
                </tc-form-group>
                </tc-card>
            </div>

            <div class="col-md-6">
                <tc-card :title="'Char limiting'">
                <tc-form-group>
                    <tc-input :charLimiting="20" :placeholder="'Limit 20 symbols'"></tc-input>
                </tc-form-group>

                <tc-form-group>
                    <tc-input
                    :charLimiting="50"
                    :prefixIcon="'icofont-pen-alt-4'"
                    :placeholder="'Limit 50 symbols'"
                    :value="'Value'"
                    ></tc-input>
                </tc-form-group>

                <tc-form-group class="mb-0">
                    <tc-input :charLimiting="10" :suffixIcon="'icofont-ui-email'" :placeholder="'Limit 10 symbols'"></tc-input>
                </tc-form-group>
                </tc-card>
            </div>
            </div>

            <div class="row">
            <div class="col-md-6">
                <tc-card :title="'Custom styles'" class="mb-md-0">
                <tc-form-group>
                    <tc-input
                    :bgColor="'#b7ce63'"
                    :borderColor="'#b7ce63'"
                    :color="'#fff'"
                    :placeholder="'Custom style'"
                    :value="'Custom style'"
                    ></tc-input>
                </tc-form-group>

                <tc-form-group>
                    <tc-input
                    :bgColor="'transparent'"
                    :borderColor="'#64B5F6'"
                    :color="'#64B5F6'"
                    :placeholder="'Custom style'"
                    :value="'Custom style'"
                    ></tc-input>
                </tc-form-group>

                <tc-form-group>
                    <tc-input
                    :bgColor="['#e9e165', '#c9c257']"
                    :borderColor="['#e9e165', '#c9c257']"
                    :color="['#000', '#fff']"
                    :placeholder="'Custom hover style'"
                    :value="'Custom hover style'"
                    ></tc-input>
                </tc-form-group>

                <tc-form-group>
                    <tc-input
                    :borderColor="['#ed5564', '#b7424d']"
                    :bgColor="'transparent'"
                    :color="['#ed5564', '#b7424d']"
                    :placeholder="'Custom hover style'"
                    :value="'Custom hover style'"
                    ></tc-input>
                </tc-form-group>

                <tc-form-group>
                    <tc-input
                    :bgColor="['#c8177f', '#a61369', '#5f0b3c']"
                    :borderColor="['#c8177f', '#a61369', '#5f0b3c']"
                    :color="['#fff', '#fff', '#fff']"
                    :placeholder="'Custom focus style'"
                    :value="'Custom focus style'"
                    ></tc-input>
                </tc-form-group>

                <tc-form-group>
                    <tc-input
                    :borderColor="['#681eee', '#9C27B0', '#7B1FA2']"
                    :bgColor="'transparent'"
                    :color="['#681eee', '#9C27B0', '#7B1FA2']"
                    :placeholder="'Custom focus style'"
                    :value="'Custom focus style'"
                    ></tc-input>
                </tc-form-group>

                <tc-form-group class="mb-0">
                    <tc-input
                    :bgColor="['', '', '', '#E8EAF6']"
                    :borderColor="['', '', '', '#E8EAF6']"
                    :color="['', '', '', '#a8a8a8']"
                    :disabled="true"
                    :placeholder="'Custom disabled style'"
                    :value="'Custom disabled style'"
                    ></tc-input>
                </tc-form-group>
                </tc-card>
            </div>

            <div class="col-md-6">
                <tc-card :title="'Type'" class="mb-0">
                <tc-form-group>
                    <tc-input :placeholder="'Text input'"></tc-input>
                </tc-form-group>

                <tc-form-group>
                    <tc-input :placeholder="'Email input'" :type="'email'"></tc-input>
                </tc-form-group>

                <tc-form-group>
                    <tc-input :placeholder="'Password input'" :type="'password'"></tc-input>
                </tc-form-group>

                <tc-form-group>
                    <tc-input :placeholder="'Number input'" :type="'number'"></tc-input>
                </tc-form-group>

                <tc-form-group>
                    <tc-input :placeholder="'Search input'" :type="'search'"></tc-input>
                </tc-form-group>

                <tc-form-group>
                    <tc-input :placeholder="'Disabled input'" :disabled="true" :value="'Disabled input'"></tc-input>
                </tc-form-group>

                <tc-form-group class="mb-0">
                    <tc-input :placeholder="'Readonly input'" :readonly="true" :value="'Readonly input'"></tc-input>
                </tc-form-group>
                </tc-card>
            </div>
            </div>
    </div>
</template>
<script>
import tcCard from '@/components/ui/card/card'
import tcFormGroup from '@/components/ui/form-group/form-group'
import tcInput from '@/components/ui/input/input'
import tcFormLabel from '@/components/ui/form-label/form-label'
import tcFormDescription from '@/components/ui/form-description/form-description'
export default {
    components: {
        tcCard,
        tcFormGroup,
        tcInput,
        tcFormLabel,
        tcFormDescription
    }
}
</script>
