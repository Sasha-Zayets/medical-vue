<template>
  <div>
    <tc-card :title="'Basic'">
      <tc-form-group>
        <tc-form-label>Without label</tc-form-label>

        <tc-radio :value="'val2'">
          <tc-radio-option :value="'val1'"></tc-radio-option>
          <tc-radio-option :value="'val2'"></tc-radio-option>
        </tc-radio>
      </tc-form-group>

      <tc-form-group>
        <tc-form-label>With label</tc-form-label>

        <tc-radio :value="'val2'">
          <tc-radio-option :value="'val1'">Option label</tc-radio-option>
          <tc-radio-option :value="'val2'">Option label</tc-radio-option>
        </tc-radio>
      </tc-form-group>

      <tc-form-group>
        <tc-form-label>Horizontal direction</tc-form-label>

        <tc-radio :direction="'horizontal'" :value="'val2'">
          <tc-radio-option :value="'val1'">Option label</tc-radio-option>
          <tc-radio-option :value="'val2'">Option label</tc-radio-option>
        </tc-radio>
      </tc-form-group>

      <tc-form-group class="mb-0">
        <tc-form-label>disabled option</tc-form-label>

        <tc-radio :direction="'horizontal'" :value="'val2'">
          <tc-radio-option :value="'val1'">Option label</tc-radio-option>
          <tc-radio-option :value="'val2'">Option label</tc-radio-option>
          <tc-radio-option :value="'val3'" :disabled="true">Option label</tc-radio-option>
        </tc-radio>
      </tc-form-group>
    </tc-card>

    <tc-card :title="'Custom styles'">
      <tc-form-group>
        <tc-radio :direction="'horizontal'" :value="'val2'">
          <tc-radio-option
            :value="'val1'"
            :bgColor="['transparent', '#transparent', '#b7ce63']"
            :borderColor="['#b7ce63', '#b7ce63', '#b7ce63']"
            :color="['#b7ce63', '#b7ce63', '#000']"
          >
            Option label
          </tc-radio-option>
          <tc-radio-option
            :value="'val2'"
            :bgColor="['transparent', '#transparent', '#b7ce63']"
            :borderColor="['#b7ce63', '#b7ce63', '#b7ce63']"
            :color="['#b7ce63', '#b7ce63', '#000']"
          >
            Option label
          </tc-radio-option>
        </tc-radio>
      </tc-form-group>

      <tc-form-group>
        <tc-radio :direction="'horizontal'" :value="'val2'">
          <tc-radio-option
            :value="'val1'"
            :bgColor="['transparent', '#transparent', '#64B5F6']"
            :borderColor="['#64B5F6', '#64B5F6', '#64B5F6']"
            :color="['#64B5F6', '#64B5F6', '#000']"
          >
            Option label
          </tc-radio-option>
          <tc-radio-option
            :value="'val2'"
            :bgColor="['transparent', '#transparent', '#64B5F6']"
            :borderColor="['#64B5F6', '#64B5F6', '#64B5F6']"
            :color="['#64B5F6', '#64B5F6', '#000']"
          >
            Option label
          </tc-radio-option>
        </tc-radio>
      </tc-form-group>

      <tc-form-group>
        <tc-radio :direction="'horizontal'" :value="'val2'">
          <tc-radio-option
            :value="'val1'"
            :bgColor="['#e9e165', '#e9e165', 'transparent']"
            :borderColor="['#e9e165', '#e9e165', '#e9e165']"
            :color="['#000', '#000', '#a6a048']"
          >
            Option label
          </tc-radio-option>
          <tc-radio-option
            :value="'val2'"
            :bgColor="['#e9e165', '#e9e165', 'transparent']"
            :borderColor="['#e9e165', '#e9e165', '#e9e165']"
            :color="['#000', '#000', '#a6a048']"
          >
            Option label
          </tc-radio-option>
        </tc-radio>
      </tc-form-group>

      <tc-form-group>
        <tc-radio :direction="'horizontal'" :value="'val2'">
          <tc-radio-option
            :value="'val1'"
            :bgColor="['transparent', 'transparent', '#ed5564']"
            :borderColor="['#ed5564', '#ed5564', '#ed5564']"
            :color="['#ed5564', '#ed5564', '#fff']"
            :labelColor="['#000', '#000', '#ed5564']"
          >
            Option label
          </tc-radio-option>
          <tc-radio-option
            :value="'val2'"
            :bgColor="['transparent', 'transparent', '#ed5564']"
            :borderColor="['#ed5564', '#ed5564', '#ed5564']"
            :color="['#ed5564', '#ed5564', '#fff']"
            :labelColor="['#000', '#000', '#ed5564']"
          >
            Option label
          </tc-radio-option>
        </tc-radio>
      </tc-form-group>

      <tc-form-group class="mb-0">
        <tc-radio :direction="'horizontal'" :value="'val2'">
          <tc-radio-option
            :value="'val1'"
            :bgColor="['transparent', '#transparent', '#336cfb', '#7098fc']"
            :borderColor="['#336cfb', '#336cfb', '#336cfb', '#7098fc']"
            :color="['#336cfb', '#000', '#000', '#7098fc']"
          >
            Option label
          </tc-radio-option>
          <tc-radio-option
            :value="'val2'"
            :bgColor="['transparent', '#transparent', '#336cfb', '#7098fc']"
            :borderColor="['#336cfb', '#336cfb', '#336cfb', '#7098fc']"
            :color="['#336cfb', '#000', '#000', '#7098fc']"
          >
            Option label
          </tc-radio-option>
          <tc-radio-option
            :value="'val3'"
            :disabled="true"
            :bgColor="['transparent', '#7ccee5', '#244ae5', '#7098fc']"
            :borderColor="['#7ccee5', '#7ccee5', '#244ae5', '#7098fc']"
            :color="['#fff', '#fff', '#b6d4ff', '#7098fc']"
          >
            Option label
          </tc-radio-option>
        </tc-radio>
      </tc-form-group>
    </tc-card>

    <tc-card :title="'Forms'" class="mb-0">
      <div class="row">
        <div class="col-12 col-md-6 mb-4 mb-md-0">
          <form :formGroup="reactiveForm" novalidate>
            <tc-form-group>
              <tc-form-label>Reactive form</tc-form-label>

              <tc-radio formControlName="radioField">
                <tc-radio-option :value="'first'">First Option</tc-radio-option>
                <tc-radio-option :value="'second'">Second Option</tc-radio-option>
              </tc-radio>
            </tc-form-group>
          </form>

          <tc-input :readonly="true" v-model="reactiveForm.value.radioField"></tc-input>
        </div>

        <div class="col-12 col-md-6">
          <tc-form-group>
            <tc-form-label>Template driven forms</tc-form-label>

            <tc-radio :value="'second'">
              <tc-radio-option :value="'first'">First Option</tc-radio-option>
              <tc-radio-option :value="'second'">Second Option</tc-radio-option>
            </tc-radio>
          </tc-form-group>

          <tc-input :readonly="true" v-model="templateRadio.value"></tc-input>
        </div>
      </div>
    </tc-card>

  </div>
</template>
<script>
import tcFormGroup from '@/components/ui/form-group/form-group'
import tcFormLabel from '@/components/ui/form-label/form-label'
import tcRadio from '@/components/ui/radio/radio'
import tcCard from '@/components/ui/card/card'
import tcInput from '@/components/ui/input/input'
import tcRadioOption from '@/components/ui/radio/radio-option/radio-option'
export default {
  components: {
    tcFormGroup,
    tcFormLabel,
    tcRadio,
    tcCard,
    tcInput,
    tcRadioOption
  }
}
</script>
