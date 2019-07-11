<template>
  <div class="register-form-host">
    <form :formGroup="registerForm" novalidate>
      <tc-form-group>
        <tc-input :placeholder="'Name'" formControlName="name"></tc-input>
      </tc-form-group>

      <tc-form-group>
        <tc-input :placeholder="'Email address'" :type="'email'" formControlName="email"></tc-input>
      </tc-form-group>

      <tc-form-group>
        <tc-input :placeholder="'Password'" :type="'password'" formControlName="pass"></tc-input>
      </tc-form-group>

      <tc-form-group>
        <!--<tc-switcher :value="true">I agree to the Terms and Privacy.</tc-switcher>-->
      </tc-form-group>

      <div class="actions justify-content-between">
        <tc-button :view="'accent'" :beforeIcon="'icofont-plus'">
          Register
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

</style>
