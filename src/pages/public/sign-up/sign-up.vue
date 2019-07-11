<template>
  <div class="sign-up-host">
    <h2 class="h4 mt-0 mb-1">Sign up</h2>
    <p style="color: #8f8f90">Create your Account</p>

    <register-form></register-form>

    <p class="mt-5">Have an account? <router-link to="/public/sign-in">Sign in!</router-link></p>

  </div>
</template>
<script>
import registerForm from '@/components/register-form/register-form'
export default {
  components: {
    registerForm
  }
}
</script>
<style lang="scss" scoped>

</style>
