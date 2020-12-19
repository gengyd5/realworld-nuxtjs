import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _92af082c = () => interopDefault(import('..\\pages\\layout' /* webpackChunkName: "" */))
const _0be7a59f = () => interopDefault(import('..\\pages\\home' /* webpackChunkName: "" */))
const _714556a9 = () => interopDefault(import('..\\pages\\login' /* webpackChunkName: "" */))
const _0e7120e9 = () => interopDefault(import('..\\pages\\profile' /* webpackChunkName: "" */))
const _50f30ce3 = () => interopDefault(import('..\\pages\\settings' /* webpackChunkName: "" */))
const _aa4cbba6 = () => interopDefault(import('..\\pages\\editor' /* webpackChunkName: "" */))
const _15893794 = () => interopDefault(import('..\\pages\\article' /* webpackChunkName: "" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/",
    component: _92af082c,
    children: [{
      path: "",
      component: _0be7a59f,
      name: "home"
    }, {
      path: "/login",
      component: _714556a9,
      name: "login"
    }, {
      path: "/register",
      component: _714556a9,
      name: "register"
    }, {
      path: "/profile/:username",
      component: _0e7120e9,
      name: "profile"
    }, {
      path: "/settings",
      component: _50f30ce3,
      name: "settings"
    }, {
      path: "/editor",
      component: _aa4cbba6,
      name: "editor"
    }, {
      path: "/article/:slug",
      component: _15893794,
      name: "article"
    }]
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decodeURIComponent(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
