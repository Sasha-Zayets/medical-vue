<template>
  <div class="row">
  <div class="col-12 col-md-4">
    <tc-card :tcBgColor="'#fbfbfb'" :title="'Personal'" :align="'center'" class="mb-md-0">
      <div class="d-flex justify-content-center align-items-center">
        <div class="mr-2 text-right" v-fontSize="50">39</div>
        <div v-color="'#8f8f90'"  class="text-left">
          <div v-fontSize="20">USD</div>
          <div>month</div>
        </div>
      </div>

      <hr class="mt-4 mb-4">

      <ul class="list-unstyled text-left">
        <li class="d-flex align-items-center pt-2 pb-2">
          <tc-icon :iconClass="'icofont-check-circled'" :tcColor="'#8f8f90'"></tc-icon>
          <span class="ml-1">1GB Disk Space</span>
        </li>
        <li class="d-flex align-items-center pt-2 pb-2">
          <tc-icon :iconClass="'icofont-check-circled'" :tcColor="'#8f8f90'"></tc-icon>
          <span class="ml-1">10GB Monthly Bandwith</span>
        </li>
        <li class="d-flex align-items-center pt-2 pb-2">
          <tc-icon :iconClass="'icofont-check-circled'" :tcColor="'#8f8f90'"></tc-icon>
          <span class="ml-1">2 Email Accounts</span>
        </li>
        <li class="d-flex align-items-center pt-2 pb-2">
          <tc-icon :iconClass="'icofont-check-circled'" :tcColor="'#8f8f90'"></tc-icon>
          <span class="ml-1">Unlimited Subdomains</span>
        </li>
        <li class="d-flex align-items-center pt-2 pb-2">
          <tc-icon :iconClass="'icofont-close-circled'" :tcColor="'#8f8f90'"></tc-icon>
          <span class="ml-1">Free support</span>
        </li>
      </ul>

      <tc-button :view="'success'" :block="true" class="mb-3">Purchase now</tc-button>
    </tc-card>
  </div>

  <div class="col-12 col-md-4">
    <tc-card :tcBgColor="'#f6fafd'" :title="'Developers'" :align="'center'" class="mb-md-0">
      <div class="d-flex justify-content-center align-items-center">
        <div class="mr-2 text-right" v-fontSize="50" v-color="'#336cfb'">59</div>
        <div v-color="'#8f8f90'"  class="text-left">
          <div v-fontSize="20">USD</div>
          <div>month</div>
        </div>
      </div>

      <hr class="mt-4 mb-4">

      <ul class="list-unstyled text-left">
        <li class="d-flex align-items-center pt-2 pb-2">
          <tc-icon :iconClass="'icofont-check-circled'" :tcColor="'#8f8f90'"></tc-icon>
          <span class="ml-1">5GB Disk Space</span>
        </li>
        <li class="d-flex align-items-center pt-2 pb-2">
          <tc-icon :iconClass="'icofont-check-circled'" :tcColor="'#8f8f90'"></tc-icon>
          <span class="ml-1">25GB Monthly Bandwith</span>
        </li>
        <li class="d-flex align-items-center pt-2 pb-2">
          <tc-icon :iconClass="'icofont-check-circled'" :tcColor="'#8f8f90'"></tc-icon>
          <span class="ml-1">5 Email Accounts</span>
        </li>
        <li class="d-flex align-items-center pt-2 pb-2">
          <tc-icon :iconClass="'icofont-check-circled'" :tcColor="'#8f8f90'"></tc-icon>
          <span class="ml-1">Unlimited Subdomains</span>
        </li>
        <li class="d-flex align-items-center pt-2 pb-2">
          <tc-icon :iconClass="'icofont-close-circled'" :tcColor="'#8f8f90'"></tc-icon>
          <span class="ml-1">Free support</span>
        </li>
      </ul>

      <tc-button :view="'accent'" :block="true" class="mb-3">Purchase now</tc-button>
    </tc-card>
  </div>
  <div class="col-12 col-md-4">
    <tc-card :tcBgColor="'#fbfbfb'" :title="'Premium'" :align="'center'" class="mb-md-0">
      <div class="d-flex justify-content-center align-items-center">
        <div class="mr-2 text-right" v-fontSize="50">99</div>
        <div v-color="'#8f8f90'" class="text-left">
          <div v-fontSize="20">USD</div>
          <div>month</div>
        </div>
      </div>

      <hr class="mt-4 mb-4">

      <ul class="list-unstyled text-left">
        <li class="d-flex align-items-center pt-2 pb-2">
          <tc-icon :iconClass="'icofont-check-circled'" :tcColor="'#8f8f90'"></tc-icon>
          <span class="ml-1">10GB Disk Space</span>
        </li>
        <li class="d-flex align-items-center pt-2 pb-2">
          <tc-icon :iconClass="'icofont-check-circled'" :tcColor="'#8f8f90'"></tc-icon>
          <span class="ml-1">100GB Monthly Bandwith</span>
        </li>
        <li class="d-flex align-items-center pt-2 pb-2">
          <tc-icon :iconClass="'icofont-check-circled'" :tcColor="'#8f8f90'"></tc-icon>
          <span class="ml-1">20 Email Accounts</span>
        </li>
        <li class="d-flex align-items-center pt-2 pb-2">
          <tc-icon :iconClass="'icofont-check-circled'" :tcColor="'#8f8f90'"></tc-icon>
          <span class="ml-1">Unlimited Subdomains</span>
        </li>
        <li class="d-flex align-items-center pt-2 pb-2">
          <tc-icon :iconClass="'icofont-check-circled'" :tcColor="'#8f8f90'"></tc-icon>
          <span class="ml-1">Free support</span>
        </li>
      </ul>

      <tc-button :view="'success'" :block="true" class="mb-3">Purchase now</tc-button>
    </tc-card>
  </div>
</div>

</template>
<script>
import tcCard from '@/components/ui/card/card'
import tcButton from '@/components/ui/button/button'
import tcIcon from '@/components/ui/icon/icon'
export default {
  components: {
    tcCard,
    tcButton,
    tcIcon
  }
}
</script>
<style lang="scss" scoped>

</style>
