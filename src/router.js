import Vue from 'vue'
import Router from 'vue-router'
//layout
import Default from '@/views/default'
import Public from '@/views/public'

//page
import DefaultDashboard from '@/pages/default-dashboard/default-dashboard'
import Doctors from '@/pages/doctors/doctors'
import Typography from '@/pages/typography/typography'
import IconOption from '@/pages/icons/icons-options/icons-options'
import IconIf from '@/pages/icons/icons-if/icons-if'
import IconSli from '@/pages/icons/icons-sli/icons-sli'
import VueCharts from '@/pages/charts/vue-charts/vue-charts'
import Alerts from '@/pages/components/alerts/alerts'
import Badges from '@/pages/components/badges/badges'
import Cards from '@/pages/components/cards/cards'
import Buttons from '@/pages/components/buttons/buttons'
import Checkbox from '@/pages/components/checkboxes/checkboxes'
import Inputs from '@/pages/components/inputs/inputs'
import Modals from '@/pages/components/modals/modals'
import RadioButtons from '@/pages/components/radio-buttons/radio-button'
//import NgxEcharts from '@/pages/charts/ngx-charts/ngx-charts'

//tables page
import SimpleTable from '@/pages/tables/simple-table/simple-table'
//public page
import SignIn from '@/pages/public/sign-in/sign-in'
import SignUp from '@/pages/public/sign-up/sign-up'

//service page
import Pricing from '@/pages/services/price/price'
//end page

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/vertical/default-dashboard'
    },
    {
      path: '/vertical',
      name: 'default',
      component: Default,
      children: [
        {
          path: 'default-dashboard',
          component: DefaultDashboard
        },
        {
          path: 'doctors',
          component: Doctors
        },
        {
          path: 'typography',
          component: Typography
        },
        {
          path: 'icons-options',
          component: IconOption
        },
        {
          path: 'icons-if',
          component: IconIf
        },
        {
          path: 'icons-sli',
          component: IconSli
        },
        {
          path: 'vue-charts',
          component: VueCharts
        },
        {
          path: 'alerts',
          component: Alerts
        },
        {
          path: 'badges',
          component: Badges
        },
        {
          path: 'cards',
          component: Cards
        },
        {
          path: 'buttons',
          component: Buttons
        },
        {
          path: 'checkboxes',
          component: Checkbox
        },
        {
          path: 'inputs',
          component: Inputs
        },
        {
          path: 'modal-windows',
          component: Modals
        },
        {
          path: 'radio-buttons',
          component: RadioButtons
        },
        {
          path: 'pricing',
          component: Pricing
        },
        {
          path: 'simple-table',
          component: SimpleTable
        }
      ]
    },
    {
      path: '/public',
      component: Public,
      children: [
        {
          path: 'sign-in',
          component: SignIn
        },
        {
          path: 'sign-up',
          component: SignUp
        }
      ]
    }
  ]
})
