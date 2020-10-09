import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Scroll from '@/components/scroll'
import Transition from '@/components/transition'
import Tree from '@/components/tree'
import Table from '@/views/tableDemo'
import ConfigTable from '@/views/tableConfig'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
      name:'Tree',
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
    }
  ]
})
