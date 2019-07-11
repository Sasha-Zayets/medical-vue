<template>
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
        this.getData('../../../assets/data/icons-simpleline.json', 'icons', 'setLoaded');
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
.icons-list {
    margin: -.5rem;

    .tc-icon {
      margin: .5rem;
    }
}
</style>
