<template>
  <div class="row">
    <div class="col-md-6">
      <tc-card :title="'Size'">
        <div class="buttons-list">
          <tc-button :size="'sm'">Small button</tc-button>
          <tc-button>Default button</tc-button>
          <tc-button :size="'lg'">Large button</tc-button>
        </div>
      </tc-card>
    </div>

    <div class="col-md-6">
      <tc-card :title="'Shape'">
        <div class="buttons-list">
          <tc-button>Default</tc-button>
          <tc-button :tcShape="0">Square</tc-button>
          <tc-button :tcShape="500">Rounded</tc-button>
        </div>
      </tc-card>
    </div>

    <div class="col-md-6">
      <tc-card :title="'Style'">
        <div class="buttons-list">
          <tc-button>Default</tc-button>
          <tc-button :view="'accent'">Accent</tc-button>
          <tc-button :view="'success'">Success</tc-button>
          <tc-button :view="'info'">Info</tc-button>
          <tc-button :view="'warning'">Warning</tc-button>
          <tc-button :view="'error'">Error</tc-button>
          <tc-button :tcBgColor="'#e91e63'">Pink</tc-button>
          <tc-button :tcBgColor="'#9c27b0'">Purple</tc-button>
          <tc-button :tcBgColor="'#3f51b5'">Indigo</tc-button>
          <tc-button :tcBgColor="'#00bcd4'">Cyan</tc-button>
          <tc-button :tcBgColor="'#009688'">Teal</tc-button>
          <tc-button :tcBgColor="'#cddc39'">Lime</tc-button>
          <tc-button :tcBgColor="'#ffc107'">Amber</tc-button>
          <tc-button :tcBgColor="'#795548'">Brown</tc-button>
          <tc-button :tcBgColor="'#9e9e9e'">Grey</tc-button>
          <tc-button :tcColor="'#e91e63'" :tcBgColor="'#fbfbfb'">Pink</tc-button>
          <tc-button :tcColor="'#9c27b0'" :tcBgColor="'#fbfbfb'">Purple</tc-button>
          <tc-button :tcColor="'#3f51b5'" :tcBgColor="'#fbfbfb'">Indigo</tc-button>
          <tc-button :tcColor="'#00bcd4'" :tcBgColor="'#fbfbfb'">Cyan</tc-button>
          <tc-button :tcColor="'#009688'" :tcBgColor="'#fbfbfb'">Teal</tc-button>
          <tc-button :tcColor="'#cddc39'" :tcBgColor="'#fbfbfb'">Lime</tc-button>
          <tc-button :tcColor="'#ffc107'" :tcBgColor="'#fbfbfb'">Amber</tc-button>
          <tc-button :tcColor="'#9e9e9e'" :tcBgColor="'#fbfbfb'">Grey</tc-button>
        </div>
      </tc-card>
    </div>

    <div class="col-md-6">
      <tc-card :title="'Outline'">
        <div class="buttons-list">
          <tc-button :outline="true" :view="'default'">Default</tc-button>
          <tc-button :outline="true" :view="'accent'">Accent</tc-button>
          <tc-button :outline="true" :view="'info'">Info</tc-button>
          <tc-button :outline="true" :view="'warning'">Warning</tc-button>
          <tc-button :outline="true" :view="'success'">Success</tc-button>
          <tc-button :outline="true" :view="'error'">Error</tc-button>
          <tc-button
            :outline="true"
            :tcColor="['#e91e63', '#fff']"
            :tcBgColor="['transparent', '#e91e63']"
            :tcBorderColor="'#e91e63'"
          >
            Pink
          </tc-button>
          <tc-button
            :outline="true"
            :tcColor="['#9c27b0', '#fff']"
            :tcBgColor="['transparent', '#9c27b0']"
            :tcBorderColor="'#9c27b0'"
          >
            Purple
          </tc-button>
          <tc-button
            :outline="true"
            :tcColor="['#3f51b5', '#fff']"
            :tcBgColor="['transparent', '#3f51b5']"
            :tcBorderColor="'#3f51b5'"
          >
            Indigo
          </tc-button>
          <tc-button
            :tcColor="['#00bcd4', '#fff']"
            :tcBgColor="['transparent', '#00bcd4']"
            :tcBorderColor="'#00bcd4'"
          >
            Cyan
          </tc-button>
          <tc-button
            :tcColor="['#009688', '#fff']"
            :tcBgColor="['transparent', '#009688']"
            :tcBorderColor="'#009688'"
          >
            Teal
          </tc-button>
          <tc-button
            :tcColor="['#cddc39', '#fff']"
            :tcBgColor="['transparent', '#cddc39']"
            :tcBorderColor="'#cddc39'"
          >
            Lime
          </tc-button>
          <tc-button
            :tcColor="['#ffc107', '#fff']"
            :tcBgColor="['transparent', '#ffc107']"
            :tcBorderColor="'#ffc107'"
          >
            Amber
          </tc-button>
          <tc-button
            :tcColor="['#795548', '#fff']"
            :tcBgColor="['transparent', '#795548']"
            :tcBorderColor="'#795548'"
          >
            Brown
          </tc-button>
          <tc-button
            :tcColor="['#9e9e9e', '#fff']"
            :tcBgColor="['transparent', '#9e9e9e']"
            :tcBorderColor="'#9e9e9e'"
          >
            Grey
          </tc-button>

          <tc-button
            :tcColor="['#e91e63', '#fff']"
            :tcBgColor="['transparent', '#e91e63']"
            :tcBorderStyle="'dotted'"
            :tcBorderColor="'#e91e63'"
          >
            Pink
          </tc-button>
          <tc-button
            :tcColor="['#9c27b0', '#fff']"
            :tcBgColor="['transparent', '#9c27b0']"
            :tcBorderStyle="'dashed'"
            :tcBorderColor="'#9c27b0'"
          >
            Purple
          </tc-button>
          <tc-button
            :tcColor="['#3f51b5', '#cddc39']"
            :tcBgColor="'transparent'"
            :tcBorderStyle="'dashed'"
            :tcBorderColor="['#3f51b5', '#cddc39']"
          >
            Indigo
          </tc-button>
          <tc-button
            :tcColor="['#00bcd4', '#fff']"
            :tcBgColor="['rgba(0,188,212,0.2)', '#00bcd4']"
            :tcBorderColor="'#00bcd4'"
          >
            Cyan
          </tc-button>
          <tc-button
            :tcColor="['#009688', '#fff']"
            :tcBgColor="['rgba(0,150,136,0.2)', '#009688']"
            :tcBorderColor="'#009688'"
          >
            Teal
          </tc-button>
          <tc-button
            :tcColor="['#cddc39', '#fff']"
            :tcBgColor="['rgba(205,220,57,0.2)', '#cddc39']"
            :tcBorderColor="'#cddc39'"
          >
            Lime
          </tc-button>
          <tc-button
            :tcColor="['#000', '#fff']"
            :tcBgColor="['transparent', '#ffc107']"
            :tcBorderColor="'#ffc107'"
          >
            Amber
          </tc-button>
          <tc-button
            :tcColor="['#ed5564', '#fdb0b5']"
            :tcBgColor="['transparent', '#795548']"
            :tcBorderColor="'#795548'"
          >
            Brown
          </tc-button>
        </div>
      </tc-card>
    </div>

    <div class="col-md-6">
      <tc-card :title="'Width'">
        <div class="buttons-list">
          <tc-button :style="{ 'width': '50%' }">50% width button</tc-button>
          <tc-button :block="true">Block button</tc-button>
          <tc-button>Default button</tc-button>
        </div>
      </tc-card>
    </div>

    <div class="col-md-6">
      <tc-card :title="'Align'">
        <div class="buttons-list">
          <tc-button :block="true" :align="'left'">Left</tc-button>
          <tc-button :block="true">Center</tc-button>
          <tc-button :block="true" :align="'right'">Right</tc-button>
        </div>
      </tc-card>
    </div>

    <div class="col-md-6">
      <tc-card :title="'Disabled'">
        <div class="buttons-list">
          <tc-button :disabled="true">Disabled</tc-button>
          <tc-button :disabled="true" :tcBgColor="'#50408e'">Disabled</tc-button>
          <tc-button :disabled="true" :view="'error'">Disabled</tc-button>
          <tc-button :disabled="true" :view="'warning'" :outline="true">Disabled</tc-button>
          <tc-button :disabled="true" :view="'info'" :outline="true" :tcBorderStyle="'dotted'" :tcShape="500">
            Disabled
          </tc-button>
        </div>
      </tc-card>
    </div>

    <div class="col-md-6">
      <tc-card :title="'Loader'">
        <div class="buttons-list">
          <tc-button :load="true">Default</tc-button>
          <tc-button :view="'accent'" :load="true">Accent</tc-button>
          <tc-button :view="'info'" :load="true">Info</tc-button>
          <tc-button :view="'warning'" :load="true">Warning</tc-button>
          <tc-button :view="'error'" :load="true">Error</tc-button>
        </div>
      </tc-card>
    </div>

    <div class="col-12">
      <tc-card :title="'With icons'" class="mb-0">
        <div class="buttons-list">
          <tc-button :beforeIcon="'icofont-bell-alt'">Default</tc-button>
          <tc-button :beforeIcon="'icofont-audio'" :view="'accent'">Accent</tc-button>
          <tc-button :beforeIcon="'icofont-basket'" :view="'success'">Success</tc-button>
          <tc-button :beforeIcon="'icofont-bucket2'" :view="'info'">Info</tc-button>
          <tc-button :beforeIcon="'icofont-clip'" :view="'warning'">Warning</tc-button>
          <tc-button :beforeIcon="'icofont-earth'" :view="'error'">Error</tc-button>
          <tc-button :afterIcon="'icofont-pie-chart'" :tcBgColor="'#4b650d'">Chart</tc-button>
          <tc-button :afterIcon="'icofont-gear'" :tcBgColor="'#3f51b5'">Gear</tc-button>
          <tc-button :afterIcon="'icofont-home'" :tcBgColor="'#009688'">Home</tc-button>
          <tc-button :afterIcon="'icofont-key'" :tcBgColor="'#cddc39'">Key</tc-button>
          <tc-button :afterIcon="'icofont-leaf'" :tcBgColor="'#9e9e9e'">Leaf</tc-button>
          <tc-button :afterIcon="'icofont-pencil-alt-5'" :view="'success'" :outline="true"></tc-button>
          <tc-button :afterIcon="'icofont-coffee-pot'" :tcBgColor="['#f0f4c3', '#aab71c']" :tcColor="'#000'">
            Add
          </tc-button>
          <tc-button :beforeIcon="'icofont-dropbox'" :view="'info'" :outline="true" :tcBorderStyle="'dashed'">
            Dropbox
          </tc-button>
          <tc-button :afterIcon="'icofont-trash'" :iconAnimation="true" :view="'error'">Remove</tc-button>
          <tc-button :afterIcon="'icofont-envato'" :square="true" :tcShape="0" :tcColor="'#7fb140'" :tcBgColor="'#262626'"></tc-button>
          <tc-button :afterIcon="'icofont-facebook'" :square="true" :tcShape="0" :tcColor="'#fff'" :tcBgColor="'#416ab2'"></tc-button>
          <tc-button :afterIcon="'icofont-google-plus'" :square="true" :tcShape="'50%'" :tcColor="'#fff'" :tcBgColor="'#de5542'"></tc-button>
          <tc-button :afterIcon="'icofont-linkedin'" :square="true" :tcShape="'2px'" :tcColor="'#fff'" :tcBgColor="'#0079b5'"></tc-button>
          <tc-button :afterIcon="'icofont-cursor-drag'" :square="true" :tcShape="'50%'" :outline="true" :tcBorderStyle="'dotted'"></tc-button>
          <tc-button :afterIcon="'icofont-woodpecker'" :square="true" :tcShape="'50%'" :outline="true" :tcBorderStyle="'dashed'"></tc-button>
          <tc-button :afterIcon="'icofont-cheese'" :view="'warning'" :square="true" :outline="true"></tc-button>
          <tc-button :afterIcon="'icofont-first-aid'" :view="'error'" :square="true" :outline="true"></tc-button>
          <tc-button :afterIcon="'icofont-visa'" :square="true" :outline="true"></tc-button>
          <tc-button :afterIcon="'icofont-pencil-alt-1'" :view="'accent'" :square="true" :outline="true"></tc-button>
          <tc-button :afterIcon="'icofont-save'" :view="'success'" :square="true" :outline="true"></tc-button>
          <tc-button :afterIcon="'icofont-play-alt-1'" :view="'warning'" :square="true"></tc-button>
          <tc-button :afterIcon="'icofont-search'" :view="'success'" :square="true"></tc-button>
          <tc-button :afterIcon="'icofont-bin'" :view="'error'" :square="true"></tc-button>
          <tc-button :afterIcon="'icofont-clip'" :view="'accent'" :square="true"></tc-button>
          <tc-button :afterIcon="'icofont-plus'" :view="'info'" :square="true"></tc-button>
        </div>
      </tc-card>
    </div>
  </div>

</template>
<script>
import tcCard from '@/components/ui/card/card'
import tcButton from '@/components/ui/button/button'
export default {
  components: {
    tcButton,
    tcCard
  }
}
</script>
