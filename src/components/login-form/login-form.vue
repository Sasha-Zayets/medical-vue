<template>
  <div class="login-form-host">
    <form :formGroup="loginForm" novalidate>
    <tc-form-group>
      <tc-input :placeholder="'Login'" formControlName="login"></tc-input>
    </tc-form-group>

    <tc-form-group>
      <tc-input :placeholder="'Password'" :type="'password'" formControlName="pass"></tc-input>
    </tc-form-group>

    <tc-form-group>
      <!--<tc-switcher :value="true">Remember me</tc-switcher>-->
    </tc-form-group>

    <div class="actions justify-content-between">
      <tc-button :view="'accent'" :beforeIcon="'icofont-login'">
        Login
      </tc-button>
    </div>
  </form>

  </div>  
</template>
<script>
import tcFormGroup from '@/components/ui/form-group/form-group'
import tcButton from '@/components/ui/button/button'
import tcInput from '@/components/ui/input/input'
export default {
  components: {
    tcFormGroup,
    tcButton,
    tcInput
  }
}
</script>
<style lang="scss" scoped>
.login-form-host {
  display: block;
}

</style>
