<template>
    <div class="icons-host">
        <tc-card :title="'Default icons'">
        <div class="icons-list">
            <tc-icon
            v-for="(icon, index) of defaultIcons"
            :key="index"
            :iconClass="icon"
            ></tc-icon>
        </div>
        </tc-card>

        <tc-card :title="'Icons size'">
        <div class="icons-list">
            <tc-icon
            v-for="(icon, index) of defaultIcons"
            :key="index"
            :iconClass="icon"
            :tcFontSize="10"
            ></tc-icon>
        </div>

        <div class="icons-list">
            <tc-icon
            v-for="(icon, index) of defaultIcons"
            :key="index"
            :iconClass="icon"
            :tcFontSize="20"
            ></tc-icon>
        </div>

        <div class="icons-list">
            <tc-icon
            v-for="(icon, index) of defaultIcons"
            :key="index"
            :iconClass="icon"
            :tcFontSize="30"
            ></tc-icon>
        </div>
        </tc-card>

        <tc-card :title="'Icons color'">
        <div class="icons-list">
            <tc-icon
            v-for="(icon, index) of iconsColor"
            :key="index"
            :iconClass="icon.class"
            :tcColor="icon.color"
            :tcFontSize="20"
            ></tc-icon>
        </div>

        <div class="icons-list">
            <tc-icon
            v-for="(icon, index) of iconsHoverColor"
            :key="index"
            :iconClass="icon.class"
            :tcColor="[icon.color[0], icon.color[1]]"
            :tcFontSize="30"
            ></tc-icon>
        </div>
        </tc-card>

        <tc-card :title="'Icons background color'">
        <div class="icons-list list-indents">
            <tc-icon
            v-for="(icon, index) of iconsBgColor"
            :key="index"
            :iconClass="icon.class"
            :tcBgColor="icon.color"
            :tcColor="'#fff'"
            :tcFontSize="30"
            ></tc-icon>
        </div>

        <div class="icons-list list-indents">
            <tc-icon
            v-for="(icon, index) of iconsHoverBgColor"
            :key="index"
            :iconClass="icon.class"
            :tcBgColor="[icon.color[0], icon.color[1]]"
            :tcFontSize="30"
            ></tc-icon>
        </div>
        </tc-card>

        <tc-card :title="'Icons border color'">
        <div class="icons-list list-indents">
            <tc-icon
            v-for="(icon, index) of iconsBorderColor"
            :key="index"
            :iconClass="icon.class"
            :tcColor="icon.color"
            :tcBorderColor="icon.color"
            :tcFontSize="20"
            ></tc-icon>
        </div>

        <div class="icons-list list-indents">
            <tc-icon
            v-for="(icon, index) of iconsHoverBorderColor"
            :key="index"
            :iconClass="icon.class"
            :tcColor="[icon.color, '#fff']"
            :tcBorderColor="icon.color"
            :tcBgColor="['', icon.color]"
            :tcFontSize="20"
            ></tc-icon>
        </div>

        <div class="icons-list list-indents">
            <tc-icon
            v-for="(icon, index) of iconsBorderType"
            :key="index"
            :iconClass="icon.class"
            :tcColor="icon.color"
            :tcBorderColor="icon.color"
            :tcBorderStyle="icon.type"
            :tcFontSize="25"
            ></tc-icon>
        </div>
        </tc-card>

        <tc-card :title="'Icons background gradient'">
        <div class="icons-list list-indents">
            <tc-icon
            v-for="(icon, index) of iconsGradient"
            :key="index"
            :iconClass="icon.class"
            :tcGradient="[icon.color[0], icon.color[1]]"
            :tcColor="'#ffebdf'"
            :tcFontSize="30"
            ></tc-icon>
        </div>
        </tc-card>

        <tc-card :title="'Icons shape'" class="mb-0">
        <div class="icons-list list-indents">
            <tc-icon
            v-for="(icon, index) of iconsShape"
            :key="index"
            :iconClass="icon"
            :tcShape="'50%'"
            :tcColor="'#dadada'"
            :tcBgColor="'#666666'"
            :tcBorderColor="'#666666'"
            :tcFontSize="20"
            ></tc-icon>
        </div>

        <div class="icons-list list-indents">
            <tc-icon
            v-for="(icon, index) of iconsShape"
            :key="index"
            :iconClass="icon"
            :tcShape="6"
            :tcColor="'#000'"
            :tcBorderColor="'#000'"
            :tcFontSize="20"
            ></tc-icon>
        </div>

        <div class="icons-list list-indents">
            <tc-icon
            v-for="(icon, index) in iconsShape"
            :key="index"
            :iconClass="icon"
            :tcShape="0"
            :tcColor="'#fff'"
            :tcBorderColor="'#000'"
            :tcBgColor="'#000'"
            :tcFontSize="20"
            ></tc-icon>
        </div>
        </tc-card>
    </div>
</template>
<script>
import axios from 'axios'
import tcCard from '@/components/ui/card/card'
import tcIcon from '@/components/ui/icon/icon'
export default {
    created () {
        this.getData('../../../assets/data/icons-options.json');
    },
    data: () => ({
        defaultIcons: [],
        iconsColor: [],
        iconsHoverBgColor: [],
        iconsBgColor: [],
        iconsHoverColor: [],
        iconsBorderColor: [],
        iconsHoverBorderColor: [],
        iconsBorderType: [],
        iconsGradient: [],
        iconsShape: []
    }),
    methods: {
        getData(url) {
            axios.get(url)
                .then(({data}) => {
                    this.defaultIcons = data.default;
                    this.iconsColor = data.color;
                    this.iconsHoverColor = data.hoverColor;
                    this.iconsBgColor = data.bgColor;
                    this.iconsHoverBgColor = data.hoverBgColor;
                    this.iconsBorderColor = data.borderColor;
                    this.iconsHoverBorderColor = data.hoverBorderColor;
                    this.iconsBorderType = data.borderType;
                    this.iconsGradient = data.gradient;
                    this.iconsShape = data.shape;
                    console.log(data.shape)
                    // this.setLoaded();
                }).catch(err => {
                    console.log(err)
                })    
        }
    },
    components: {
        tcCard,
        tcIcon
    }
}
</script>
<style lang="scss" scoped>
.icons-host {
  .icons-list {
    &.list-indents {
      margin: -.5rem;

      .tc-icon {
        margin: .5rem;
      }
    }
  }
}

</style>

