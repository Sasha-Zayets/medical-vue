<template>
  <div>
    <tc-card :title="'Basic'">
      <tc-form-group>
        <tc-checkbox></tc-checkbox>
      </tc-form-group>

      <tc-form-group>
        <tc-checkbox>Checkbox label</tc-checkbox>
      </tc-form-group>

      <tc-form-group>
        <tc-checkbox :value="true">Checked</tc-checkbox>
      </tc-form-group>

      <tc-form-group>
        <tc-checkbox :disabled="true">Disabled</tc-checkbox>
      </tc-form-group>

      <tc-form-group class="mb-0">
        <tc-checkbox :value="true" :disabled="true">Checked disabled</tc-checkbox>
      </tc-form-group>
    </tc-card>

   <tc-card :title="'Custom styles'">
      <tc-form-group>
        <tc-checkbox
          :value="false"
          :bgColor="['transparent', '#transparent', '#b7ce63']"
          :borderColor="['#b7ce63', '#b7ce63', '#b7ce63']"
          :color="['#b7ce63', '#b7ce63', '#000']"
        >Label</tc-checkbox>
      </tc-form-group>

      <tc-form-group>
        <tc-checkbox
          :value="true"
          :bgColor="['transparent', '#transparent', '#64B5F6']"
          :borderColor="['#64B5F6', '#64B5F6', '#64B5F6']"
          :color="['#64B5F6', '#64B5F6', '#000']"
        >Label</tc-checkbox>
      </tc-form-group>

      <tc-form-group>
        <tc-checkbox
          :value="false"
          :bgColor="['#e9e165', '#e9e165', 'transparent']"
          :borderColor="['#e9e165', '#e9e165', '#e9e165']"
          :color="['#000', '#000', '#a6a048']"
        >Label</tc-checkbox>
      </tc-form-group>

      <tc-form-group>
        <tc-checkbox
          :value="true"
          :bgColor="['transparent', 'transparent', '#ed5564']"
          :borderColor="['#ed5564', '#ed5564', '#ed5564']"
          :color="['#ed5564', '#ed5564', '#fff']"
          :labelColor="['#000', '#000', '#ed5564']"
        >Label</tc-checkbox>
      </tc-form-group>

      <tc-form-group class="mb-0">
        <tc-checkbox
          :value="false"
          :disabled="true"
          :bgColor="['transparent', '#7ccee5', '#244ae5', '#7098fc']"
          :borderColor="['#7ccee5', '#7ccee5', '#244ae5', '#7098fc']"
          :color="['#fff', '#fff', '#b6d4ff', '#7098fc']"
        >Label</tc-checkbox>
      </tc-form-group>
    </tc-card>

    <tc-card :title="'Forms'" class="mb-0">
      <div class="row">
        <div class="col-12 col-md-6 mb-4 mb-md-0">
          <form>
            <tc-form-group>
              <tc-form-label>Reactive form</tc-form-label>

              <tc-checkbox formControlName="checkboxField" @newValue="checkBox" :value="checkboxField"></tc-checkbox>
            </tc-form-group>
          </form>
           <tc-input :readonly="true" v-model="checkboxField"></tc-input>
        </div>

        <div class="col-12 col-md-6">
          <tc-form-group>
            <tc-form-label>Template driven form</tc-form-label>
            <tc-checkbox @newValue="checkBox" :value="driven"></tc-checkbox>
          </tc-form-group>

          <tc-input :readonly="true" v-model="driven"></tc-input>
        </div>
      </div>
    </tc-card>
    
  </div>
</template>
<script>
import tcCard from '@/components/ui/card/card'
import tcInput from '@/components/ui/input/input'
import tcFormGroup from '@/components/ui/form-group/form-group'
import tcCheckbox from '@/components/ui/checkbox/checkbox'
import tcFormLabel from '@/components/ui/form-label/form-label'
export default {
  data: () => ({
    checkboxField: true,
    driven: false
  }),
  methods: {
    checkBox(val) {
      this.checkboxField = val
    }
  },
  components: {
    tcCard,
    tcInput,
    tcFormGroup,
    tcCheckbox,
    tcFormLabel
  }
}
</script>
