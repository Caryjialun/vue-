import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Scroll from '@/components/scroll'
import Transition from '@/components/transition'
import Tree from '@/components/tree'
import Table from '@/views/tableDemo'
import ConfigTable from '@/views/tableConfig'
import TreeTransfer from '@/views/treeTransferDemo'
import Radio from '@/views/RadioDemo'
import Switch from '@/views/SwitchDemo'
import Input from '@/views/inputDemo'
import Breadcrumb from '@/views/breadcrumbDemo'
import Select from '@/views/selectDemo'
import Vinput from '@/views/vinputDemo'
import Tooltip from '@/views/vtooltipDemo'
import SwitchModel from '@/views/switch-model-demo'
import Attrs from '@/views/attrs'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/attrs',
      name: 'Attrs',
      component: Attrs
    },
    {
      path: '/tooltip',
      name: 'Tooltip',
      component: Tooltip
    },
    {
      path: '/scroll',
      name: 'Scroll',
      component: Scroll
    },
    {
      path: '/transition',
      name: 'Transition',
      component: Transition
    },
    {
      path: '/tree',
      name: 'Tree',
      component: Tree
    },
    {
      path: '/table',
      name: 'Table',
      component: Table
    },
    {
      path: '/configTable',
      name: 'ConfigTable',
      component: ConfigTable
    },
    {
      path: '/treeTransfer',
      name: 'TreeTransfer',
      component: TreeTransfer
    },
    {
      path: '/radio',
      name: 'Radio',
      component: Radio
    },
    {
      path: '/switch',
      name: 'Switch',
      component: Switch
    },
    {
      path: '/switch-model',
      name: 'SwitchModel',
      component: SwitchModel
    },
    {
      path: '/input',
      name: 'Input',
      component: Input
    },
    {
      path: '/breadcrumb',
      name: 'Breadcrumb',
      component: Breadcrumb
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/vinput',
      name: 'vinput',
      component: Vinput
    }
    // {
    //   path: '/paging',
    //   name: 'paging',
    //   component:Paging
    // }
  ]
})
