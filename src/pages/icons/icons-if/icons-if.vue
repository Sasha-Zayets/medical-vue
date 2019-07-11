<template>
    <div class="icons-if-host">
        <div class="icons-if">
            <div class="icons-list">
                <tc-icon
                    v-for="(icon, index) of icons"
                    :key="index"
                    :tcColor="'#000'"
                    :tcBgColor="'#fff'"
                    :tcFontSize="30"
                    :iconClass="icon"
                ></tc-icon>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import tcIcon from '@/components/ui/icon/icon'
export default {
    components: {
        tcIcon
    },
    data: () => ({
        icons: []
    }),
    created () {
        this.getData('../../../assets/data/icons-icofont.json', 'icons', 'setLoaded');
    },
    methods: {
        getData(url) {
            axios.get(url)
                .then(({data}) => {
                    this.icons = data
                }).catch(err => {
                    console.log(err)
                })    
        }
    }
}
</script>
<style lang="scss" scoped>
.icons-if-host {
  .icons-list {
    margin: -.5rem;

    .tc-icon {
      margin: .5rem;
    }
  }
}

</style>
