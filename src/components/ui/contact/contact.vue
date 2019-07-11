<template>
  <div class="contact-host tc-contact">
    <div class="img-box" v-if="data && data.img">
      <img :src="data.img" width="400" height="400" alt="">
    </div>

    <div class="info-box">
      <h4 class="name">{{ data.name }}</h4>

      <p class="role">{{ data.role }}</p>

      <div class="social" v-if="data && data.social">
        <div v-for="(item, index) of data.social" :key="index">
          <router-link :to="item.link" :class="['link', item.icon]"></router-link>
        </div>
      </div>

      <p class="address">{{ data.address }}</p>

      <div class="button-box" v-if="data && data.profileLink">
        <tc-button :to="['../', data.profileLink]" :view="'accent'">View profile</tc-button>
      </div>
    </div>

  </div>  
</template>
<script>
import tcButton from '@/components/ui/button/button'
export default {
  components: {
    tcButton
  },
  props: {
    data: {
      type: Object
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../../assets/sass/variables';

$_module-rem: $module-rem;
$_bg: #fff;
$_shape: $shape;
$_shadow: $shadow;
$_shadow-hover: $shadow-hover;
$_animation: $animation;
$_sl-color: inherit;
$_sl-color-hover: accent-palette(500);

.contact-host {
  background: $_bg;
  border-radius: $_shape;
  box-shadow: $_shadow;
  display: block;
  margin: 0 auto $_module-rem * 2;
  max-width: 400px;
  text-align: center;
  transition: box-shadow .2s $_animation;

  &:hover {
    box-shadow: $_shadow-hover;
  }
  .img-box {
    background: rgba(#000,.05);
    border-top-left-radius: inherit;
    border-top-right-radius: inherit;
    overflow: hidden;
  }
  .info-box {
    padding: ($_module-rem * 2) ($_module-rem * 2) ($_module-rem * 3);

    .name {
      margin: 0 0 $_module-rem;
    }
    .role {
      opacity: .6;
    }
    .social {
      display: flex;
      justify-content: center;
      margin: 0 (-$_module-rem / 2) ($_module-rem * 2);
      
      .link {
        color: $_sl-color;
        display: block;
        font-size: #{$main-lh}rem;
        margin: 0 ($_module-rem / 2);

        &:hover {
          color: $_sl-color-hover;
        }
      }
    }
    .address {
      opacity: .6;
    }
  }
}

</style>
