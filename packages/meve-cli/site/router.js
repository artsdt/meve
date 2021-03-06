import Vue from 'vue'
import VueRouter from 'vue-router'
import config from '@config'
import routes from '@routes'
import { LoadingBar } from '@meve/ui'
import { get } from 'lodash-es'

Vue.use(VueRouter)

const defaultLanguage = get(config, 'defaultLanguage')
const redirect = get(config, 'redirect')

if (redirect) {
  routes.push({
    path: '*',
    redirect: `/${defaultLanguage}${redirect}`,
  })
}

const router = new VueRouter({
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes,
})

router.beforeEach((to, from, next) => {
  LoadingBar.start()

  next()
})

router.afterEach(() => {
  LoadingBar.finish()
})



export default router
