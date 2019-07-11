<template>
  <div class="sign-in-host">
    <h2 class="h4 mt-0 mb-1">Login form</h2>
    <p style="color: #8f8f90">Login to access your Account</p>

    <login-form></login-form>

    <p class="mt-5 mb-1"><a @click.prevent="" href="#">Forgot password?</a></p>
    <p>Don't have an account? <router-link to="/public/sing-up">Sign up!</router-link></p>

  </div>
</template>
<script>
import loginForm from '@/components/login-form/login-form'
export default {
  components: {
    loginForm
  }
}
</script>
<style lang="scss" scoped>

</style>
