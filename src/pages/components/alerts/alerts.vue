<template>
  <div class="row">
    <div class="col-12 col-md-6">
      <tc-card :title="'Basic'">
        <tc-alert class="mb-4">
          This is <strong>Default alert.</strong> Lorem ipsum dolor sit amet.
        </tc-alert>

        <tc-alert :view="'accent'" class="mb-4">
          This is <strong>Accent alert.</strong> Lorem ipsum dolor sit amet.
        </tc-alert>
        
        <tc-alert :view="'success'" class="mb-4">
          This is <strong>Success alert.</strong> Lorem ipsum dolor sit amet.
        </tc-alert>

        <tc-alert :view="'info'" class="mb-4">
          This is <strong>Info alert.</strong> Lorem ipsum dolor sit amet.
        </tc-alert>

        <tc-alert :view="'warning'" class="mb-4">
          This is <strong>Warning alert.</strong> Lorem ipsum dolor sit amet.
        </tc-alert>

        <tc-alert :view="'error'">
          This is <strong>Error alert.</strong> Lorem ipsum dolor sit amet.
        </tc-alert>
      </tc-card>
    </div>

    <div class="col-12 col-md-6">
      <tc-card :title="'Removable'">
        <tc-alert :removable="true" class="mb-4">
          This is <strong>Default alert.</strong> Lorem ipsum dolor sit amet.
        </tc-alert>

        <tc-alert :removable="true" :view="'accent'" class="mb-4">
          This is <strong>Accent alert.</strong> Lorem ipsum dolor sit amet.
        </tc-alert>

        <tc-alert :removable="true" :view="'success'" class="mb-4">
          This is <strong>Success alert.</strong> Lorem ipsum dolor sit amet.
        </tc-alert>

        <tc-alert :removable="true" :view="'info'" class="mb-4">
          This is <strong>Info alert.</strong> Lorem ipsum dolor sit amet.
        </tc-alert>

        <tc-alert :removable="true" :view="'warning'" class="mb-4">
          This is <strong>Warning alert.</strong> Lorem ipsum dolor sit amet.
        </tc-alert>

        <tc-alert :removable="true" :view="'error'">
          This is <strong>Error alert.</strong> Lorem ipsum dolor sit amet.
        </tc-alert>
      </tc-card>
    </div>

    <div class="col-12 col-md-6">
      <tc-card :title="'Shape'">
        <tc-alert :removable="true" :view="'success'" class="mb-4">Default alert!</tc-alert>

        <tc-alert :tcShare="500" :removable="true" :view="'info'" class="mb-4">Rounded alert!</tc-alert>

        <tc-alert :tcShare="0" :removable="true" :view="'error'">Square alert!</tc-alert>
      </tc-card>
    </div>

    <div class="col-12 col-md-6">
      <tc-card :title="'With Icons'">
        <tc-alert :tcShare="50" :beforeIcon="'icofont-info-circle'" class="mb-4">
          Icon before.
        </tc-alert>

        <tc-alert :afterIcon="'icofont-alarm'" :view="'success'" :removable="true" class="mb-4">
          Icon after.
        </tc-alert>

        <tc-alert :beforeIcon="'icofont-cart'" :afterIcon="'icofont-check-circled'" :removable="true" :view="'info'">
          Icons before & after.
        </tc-alert>
      </tc-card>
    </div>

    <div class="col-12 col-md-6">
      <tc-card :title="'Custom style'" class="mb-md-0">
        <tc-alert class="mb-4" :tcColor="'#ed5564'">
          Lorem ipsum dolor sit amet.
        </tc-alert>

        <tc-alert :tcColor="'#be77ed'" :tcBgColor="'#5f1142'" class="mb-4">
          Lorem ipsum dolor sit amet.
        </tc-alert>

        <tc-alert :outline="true" :tcColor="'#000'" :tcBorderColor="'#46b3a4'" :tcBorderStyle="'dotted'" class="mb-4">
          Lorem ipsum dolor sit amet.
        </tc-alert>

        <tc-alert :outline="true" :tcColor="'#000'" :tcBorderColor="'#b3672e'" :tcBorderStyle="'dashed'" class="mb-4">
          Lorem ipsum dolor sit amet.
        </tc-alert>

        <tc-alert :view="'warning'" :tcFontSize="'1.4rem'">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci atque eveniet fugiat hic mollitia!</p>
          <p>Lorem ipsum dolor sit amet.</p>
        </tc-alert>
      </tc-card>
    </div>

    <div class="col-12 col-md-6">
      <tc-card :title="'Outline'" class="mb-0">
        <tc-alert :outline="true" :tcColor="'#000'" class="mb-4">
          This is <strong>Default alert.</strong> Lorem ipsum dolor sit amet.
        </tc-alert>

        <tc-alert :outline="true" :view="'accent'" class="mb-4">
          This is <strong>Accent alert.</strong> Lorem ipsum dolor sit amet.
        </tc-alert>

        <tc-alert :outline="true" :view="'success'" class="mb-4">
          This is <strong>Success alert.</strong> Lorem ipsum dolor sit amet.
        </tc-alert>

        <tc-alert :outline="true" :view="'info'" class="mb-4">
          This is <strong>Info alert.</strong> Lorem ipsum dolor sit amet.
        </tc-alert>

        <tc-alert :outline="true" :view="'warning'" class="mb-4">
          This is <strong>Warning alert.</strong> Lorem ipsum dolor sit amet.
        </tc-alert>

        <tc-alert :outline="true" :view="'error'">
          This is <strong>Error alert.</strong> Lorem ipsum dolor sit amet.
        </tc-alert>
      </tc-card>
    </div>
  </div>
</template>
<script>
import tcCard from '@/components/ui/card/card'
import tcAlert from '@/components/ui/alert/alert'
export default {
  components: {
    tcCard,
    tcAlert
  }
}
</script>
