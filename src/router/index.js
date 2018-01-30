import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: resolve => { require(['@/components/MainLayout/index.vue'], resolve) },
      redirect: {
        name: 'index'
      },
      children: [
        {
          path: 'index',
          name: 'index',
          component: resolve => { require(['@/page/index.vue'], resolve) }
        },
        {
          path: 'business/in',
          name: 'business-in',
          component: resolve => { require(['@/page/business/in/index.vue'], resolve) }
        },
        {
          path: 'setting/db',
          name: 'setting-db',
          component: resolve => { require(['@/page/setting/db/index.vue'], resolve) }
        },
        {
          path: 'setting/manage/project',
          name: 'setting-manage-project',
          component: resolve => { require(['@/page/setting/manage/project/index.vue'], resolve) }
        }
      ]
    }
  ]
})